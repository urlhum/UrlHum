<?php

/*
 * UrlHum (https://urlhum.com)
 *
 * @link      https://github.com/urlhum/UrlHum
 * @copyright Copyright (c) 2019 Christian la Forgia
 * @license   https://github.com/urlhum/UrlHum/blob/master/LICENSE.md (MIT License)
 */

namespace App\Http\Controllers;

use App\DeviceTarget;
use App\Services\DeviceDetection;
use App\Url;
use App\ClickUrl;
use App\DeletedUrls;
use App\Services\UrlService;
use Hashids\Hashids;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use App\Http\Requests\ShortUrl;
use Illuminate\Support\Facades\DB;
use Yajra\DataTables\DataTables;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

/**
 * Class UrlController
 * Manage everything related to short URLs.
 *
 * @author Christian la Forgia <christian@optiroot.it>
 */
class UrlController extends Controller
{
    /**
     * @var UrlService
     */
    protected $url;
    protected $deviceDetection;

    /**
     * UrlController constructor.
     * @param UrlService $urlService
     */
    public function __construct(UrlService $urlService)
    {
        $this->middleware('throttle:30', ['only' => ['store', 'update', 'checkExistingUrl']]);

        $this->url = $urlService;
        $this->deviceDetection = new DeviceDetection();
    }

    /**
     * Store the data the user sent to create the Short URL.
     *
     * @param ShortUrl $request
     * @return RedirectResponse
     */
    public function store(ShortUrl $request)
    {
        $data = $request->validated();
        $siteUrl = request()->getHttpHost();

        // If user is not logged in, he can't set private statistics,
        // because otherwise they will not be available to anybody else but admin
        if (! Auth::check()) {
            $data['hideUrlStats'] = 0;
        }

        if ($this->url->customUrlExisting($data['customUrl'])) {
            return Redirect::route('home')
                ->with('existingCustom', $data['customUrl']);
        }

        if ($existing = $this->url->checkExistingLongUrl($data['url'])) {
            return Redirect::route('home')
                ->with('existing', $existing)
                ->with('siteUrl', $siteUrl);
        }

        $short = $this->url->shortenUrl($data['url'], $data['customUrl'], $data['privateUrl'], $data['hideUrlStats']);

        $hashids = new Hashids(env('APP_KEY'), 4);

        $short_url_id = $hashids->decode($short)[0] ?? Url::where('short_url', $short)->first()->id;

        $this->url->assignDeviceTargetUrl($data, $short_url_id);

        return Redirect::route('home')
            ->with('success', $short)
            ->with('siteUrl', $siteUrl);
    }

    /**
     * Show the "edit" form of the URL.
     * This method actually shows the URL edit page. It is not actually "@show" URL. The URL show is in clickUrl@view.
     *
     * @param $url
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Contracts\View\Factory|\Illuminate\Http\Response|\Illuminate\View\View
     */
    public function show($url)
    {
        if (! $this->url->OwnerOrAdmin($url) ) {
            abort(403);
        }

        $short_url = Url::with('user:id,name,email')->findOrFail($url);

        $targets = $this->url->getTargets($short_url);

        $data['url'] = $short_url;

        $data['targets'] = $targets;

        return view('url.edit')->with('data', $data);
    }

    /**
     * Update the URL on the user request.
     *
     * @param $url
     * @param ShortUrl $request
     *
     * @return \Illuminate\Contracts\Routing\ResponseFactory|RedirectResponse|\Illuminate\Http\Response
     */
    public function update($url, ShortUrl $request)
    {
        $url = Url::findOrFail($url);

        if (! $this->url->OwnerOrAdmin($url->short_url)) {
            return response('Forbidden', 403);
        }

        $data = $request->validated();

        $url->private = $data['privateUrl'];
        $url->hide_stats = $data['hideUrlStats'];
        $url->long_url = $data['url'];
        $url->update();

        $hashids = new Hashids(env('APP_KEY'), 4);

        $url->deviceTargets()->delete();

        $this->url->assignDeviceTargetUrl($data, $url->id);

        return Redirect::back()
            ->with('success', 'Short URL updated successfully.');
    }

    /**
     * Delete a Short URL on user request.
     *
     * @param $url
     * @return \Illuminate\Contracts\Routing\ResponseFactory|RedirectResponse|\Illuminate\Http\Response
     */
    public function destroy($url)
    {
        Url::findOrFail($url);

        if (! $this->url->OwnerOrAdmin($url)) {
            return response('Forbidden', 403);
        }

        ClickUrl::deleteUrlsClicks($url);
        Url::find($url)->deviceTargets()->delete();
        Url::destroy($url);

        // We add the Short URL to the DeletedUrls Database table.
        // Needed to use the setting 'allow deleted URLs to be created again'
        DeletedUrls::add($url);

        return Redirect::route('url.my')->with(['success' => 'Short url "'.$url.'" deleted successfully. Its Analytics data has been deleted too.']);
    }

    /**
     * Response to an AJAX request by the custom Short URL form.
     *
     * @param Request $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function checkExistingUrl(Request $request)
    {
        if (Url::where('short_url', $request->input)->exists() || $this->url->isUrlReserved($request->input) ||
            (! setting('deleted_urls_can_be_recreated') && $this->url->isUrlAlreadyDeleted($request->input)) || $this->url->isShortUrlProtected($request->input)) {
            return response('Custom URL already existing', 409);
        }

        return response('ok', 200);
    }

    /**
     * Show the user its own short URLs.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function getMyUrls()
    {
        $urls = Url::getMyUrls();

        return view('url.my')->with('urls', $urls);
    }

    /**
     * Show the admin all the Short URLs.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function showUrlsList()
    {
        return view('url.list');
    }

    /**
     * AJAX load of all the Short URLs to show in the admin URLs list.
     *
     * @return mixed
     * @throws \Exception
     */
    public function loadUrlsList()
    {
        // Here we add a column with the buttons to show analytics and edit short URLs.
        // There could be a better way to do this.
        // TODO: Really NEED to find a better way to handle this. It's horrible.
        $dataTable = Datatables::of(Url::with('user:id,email')->get())->
        addColumn('action', function ($row) {
            return '<a href="/'.$row->short_url.'+"><button type="button" class="btn btn-secondary btn-sm btn-url-analytics"><i class="fa fa-chart-bar" alt="Analytics"> </i> '.trans('analytics.analytics').'</button></a> &nbsp;
                   <a href="/url/'.$row->short_url.'"><button type="button" class="btn btn-success btn-sm btn-url-edit"><i class="fa fa-pencil-alt" alt="Edit"> </i>'.trans('urlhum.edit').'</button></a>';
        })
            ->rawColumns(['action'])
            ->make(true);

        return $dataTable;
    }

    /**
     * Load the public URLs list to show.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function publicUrls()
    {
        if (! setting('show_guests_latests_urls') && ! isAdmin()) {
            abort(404);
        }

        return view('url.public')->with('urls', Url::getLatestPublicUrls());
    }
}

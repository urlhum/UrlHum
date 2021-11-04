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
use App\Http\Requests\MultipleUrls;
use App\Services\DeviceDetection;
use App\Url;
use App\ClickUrl;
use App\DeletedUrls;
use App\Services\UrlService;
use Exception;
use Hashids\Hashids;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use App\Http\Requests\ShortUrl;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\View\View;
use Yajra\DataTables\DataTables;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

/**
 * Class UrlController
 * Manage everything related to short URLs.
 *
 * @author Christian la Forgia <christian@optiroot.dev>
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

    public function createMultiple()
    {
        return view ('url.multiple');
    }

    public function storeMultiple(MultipleUrls $multipleUrls): RedirectResponse
    {
        $data = $multipleUrls->validated();
        $siteUrl = request()->getHttpHost();

        // Split every URL by \n\r
        $urls = preg_split('/$\R?^/m', $data['urls']);

        foreach ($urls as $key => $url) {
            $urls[$key] = trim($url);
        }

        $errors = [];
        $existing = 0;
        $shortened = [];

        foreach ($urls as $key => $url) {
            $validator = Validator::make([$url], [$key => 'url']);
            if ($validator->fails()) {
                $errors[] = 'The URL ' . $url . ' is not valid.';
            }
        }

        if (count($errors) > 0) {
            $multipleUrls->flash();
            return Redirect::route('multiple')
                ->with('errors', $errors);
        }

        foreach ($urls as $key => $url) {
            if ($shortUrl = $this->url->checkExistingLongUrl($url)) {
                $shortened[] = $shortUrl;
                $existing++;

            } else {
                try {
                    $url = $this->url->shortenUrl($url, null, $data['privateUrl'], $data['hideUrlStats']);
                } catch (Exception $ex) {
                    return Redirect::route('multiple')
                        ->with('errors', 'Error. Please try again.');
                }

                $shortened[] = $url->short_url;
            }
        }

        return Redirect::route('multiple')
            ->with('shortened', $shortened)
            ->with('existing', $existing)
            ->with('siteUrl', $siteUrl)
        ;
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

        $existing = $this->url->checkExistingLongUrl($data['url']);

        if ($existing !== null) {
            return Redirect::route('home')
                ->with('existing', $existing)
                ->with('siteUrl', $siteUrl);
        }

        if (empty($data['customUrl'])) {
            $customUrl = null;
        } else {
            $customUrl = $data['customUrl'];
        }

        try {
            $url = $this->url->shortenUrl($data['url'], $customUrl, $data['privateUrl'], $data['hideUrlStats']);
        } catch (\Exception $ex) {
            return Redirect::route('home')
                ->with('error', 'Error. Please try again.');
        }

        $short = $url->short_url;

        $this->url->assignDeviceTargetUrl($data, $url->id);

        return Redirect::route('home')
            ->with('success', $short)
            ->with('siteUrl', $siteUrl);
    }

    /**
     * Show the "edit" form of the URL.
     * This method actually shows the URL edit page. It is not actually "@show" URL. The URL show is in clickUrl@view.
     *
     * @param $url
     * @return ResponseFactory|Factory|Response|View
     */
    public function show($url)
    {
        if (! $this->url->OwnerOrAdmin($url) ) {
            abort(403);
        }

        $url = Url::with('user:id,name,email')->whereRaw('BINARY `short_url` = ?', [$url])->firstOrFail();

        $targets = $this->url->getTargets($url);

        $data['url'] = $url;

        $data['targets'] = $targets;

        return view('url.edit')->with('data', $data);
    }

    /**
     * Update the URL on the user request.
     *
     * @param $url
     * @param ShortUrl $request
     *
     * @return ResponseFactory|RedirectResponse|Response
     */
    public function update($url, ShortUrl $request)
    {
        $url = Url::whereRaw('BINARY `short_url` = ?', [$url])->firstOrFail();

        if (! $this->url->OwnerOrAdmin($url->short_url)) {
            return response('Forbidden', 403);
        }

        $data = $request->validated();

        $url->private = $data['privateUrl'];
        $url->hide_stats = $data['hideUrlStats'];
        $url->long_url = $data['url'];
        $url->update();

        $url->deviceTargets()->delete();

        $this->url->assignDeviceTargetUrl($data, $url->id);

        return Redirect::back()
            ->with('success', 'Short URL updated successfully.');
    }

    /**
     * Delete a Short URL on user request.
     *
     * @param $url
     * @return ResponseFactory|RedirectResponse|Response
     */
    public function destroy($url)
    {
        Url::whereRaw('BINARY `short_url` = ?',  [$url])->firstOrFail();

        if (! $this->url->OwnerOrAdmin($url)) {
            return response('Forbidden', 403);
        }

        ClickUrl::deleteUrlsClicks($url);
        Url::whereRaw('BINARY `short_url` = ?', [$url])->firstOrFail()->deviceTargets()->delete();
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
     * @return ResponseFactory|Response
     */
    public function checkExistingUrl(Request $request)
    {
        if ($this->url->isUrlReserved($request->input) ||
            Url::whereRaw('BINARY `short_url` = ?', [$request->input])->exists() ||
            (! setting('deleted_urls_can_be_recreated') && $this->url->isUrlAlreadyDeleted($request->input)) || $this->url->isShortUrlProtected($request->input)) {
            return response('Custom URL already existing', 409);
        }

        return response('ok');
    }

    /**
     * Show the user its own short URLs.
     *
     * @return Factory|View
     */
    public function getMyUrls()
    {
        $urls = Url::getMyUrls();

        return view('url.my')->with('urls', $urls);
    }

    /**
     * Show the admin all the Short URLs.
     *
     * @return Factory|View
     */
    public function showUrlsList()
    {
        return view('url.list');
    }

    /**
     * AJAX load of all the Short URLs to show in the admin URLs list.
     *
     * @return mixed
     * @throws Exception
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
     * @return Factory|View
     */
    public function publicUrls()
    {
        if (! setting('show_guests_latests_urls') && ! isAdmin()) {
            abort(404);
        }

        return view('url.public')->with('urls', Url::getLatestPublicUrls());
    }
}

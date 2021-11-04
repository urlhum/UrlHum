<?php

/*
 * UrlHum (https://urlhum.com)
 *
 * @link      https://github.com/urlhum/UrlHum
 * @copyright Copyright (c) 2019 Christian la Forgia
 * @license   https://github.com/urlhum/UrlHum/blob/master/LICENSE.md (MIT License)
 */

namespace App\Http\Controllers\api;

use App\Url;
use App\User;
use App\ClickUrl;
use App\DeletedUrls;
use App\Services\UrlService;
use App\Http\Requests\ShortUrl;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

/**
 * Class UrlController
 * @package App\Http\Controllers\api
 */
class UrlController extends Controller
{
    /**
     * @var UrlService
     */
    protected $url;

    /**
     * UrlController constructor.
     * @param UrlService $url
     */
    public function __construct(UrlService $url)
    {
        $this->url = $url;
    }

    /**
     * Return the current user Short URLs.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (! Auth::check()) {
            abort(403);
        }
        $user_id = Auth::user()->id;

        return Url::where('user_id', $user_id)
            ->select(['created_at', 'updated_at', 'long_url', 'short_url', 'private', 'hide_stats'])
            ->paginate(25);
    }

    /**
     * @param ShortUrl $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $url = $request->request->get('url');
        $customUrl = $request->request->get('custom_url') ?? null;
        $isPrivate = (bool) $request->request->get('is_private') ?? false;
        $hideStats = (bool) $request->request->get('hide_stats') ?? false;

        if ($url === null || $url === '') {
            return response()->json([
                'message' => 'Url parameter cannot be blank or null.'
            ], 409);
        }

        if ($customUrl !== null) {
            if ($this->url->customUrlExisting($customUrl)) {
                return response()->json([
                    'message' => 'This Short URL already exists.',
                ], 409);
            }
        }

        $existing = $this->url->checkExistingLongUrl($url);

        if ($existing !== null) {
            return response()->json([
                'message' => 'The Short URL for this destination already exists.',
                'short_url' => $existing,
                'long_url' => trim($url),
                'full_url' =>  url('/').'/'.$existing
            ], 200);
        }

        try {
            $url = $this->url->shortenUrl($url, $customUrl, $isPrivate, $hideStats);
        } catch (\Exception $ex) {
            return response()->json([
                'message' => 'Error. Please try again.'
            ], 409);
        }

        return response()->json([
            'message' => 'Success! Short URL created.',
            'short_url' => $url->short_url,
            'full_url' => url('/').'/'.$url->short_url
        ], 200);
    }

    /**
     * @param $url
     * @return mixed
     */
    public function show($shortUrl)
    {
        return response()->json([
            'message' => 'Not implemented',
        ], 409);

        $url = Url::where('short_url', $shortUrl)->get()->first();

        if ($url === null) {
            return response()->json([
                'message' => 'URL not found or not available'
            ], 404);
        }
      
        $selectStatement = ['long_url', 'short_url'];

        if ($this->url->isOwner($url)) {
            $selectStatement = ['created_at', 'updated_at', 'long_url', 'short_url', 'private', 'hide_stats'];
        }

        if (User::isAdmin()) {
            $selectStatement = '*';
        }

        return Url::where('short_url', $shortUrl)->select($selectStatement)->get();
    }

    /**
     * @param $url
     * @param ShortUrl $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update($url, ShortUrl $request)
    {
        return response()->json([
            'message' => 'Not implemented'
        ], 409);

        $url = Url::where('short_url', $url)->firstOrFail();

        if (! $this->url->OwnerOrAdmin($url->short_url)) {
            abort(403);
        }

        $data = $request->validated();

        $url->private = $data['privateUrl'];
        $url->hide_stats = $data['hideUrlStats'];
        $url->long_url = $data['url'];

        $url->update();

        return response()->json([
            'message' => 'Success! Short URL updated.',
            'url' => [
                'created_at' => $url->created_at->toDateTimeString(),
                'updated_at' => $url->updated_at->toDateTimeString(),
                'long_url' => $url->long_url,
                'short_url' => $url->short_url,
                'private' => $url->private,
                'hide_stats' => $url->hide_stats,
            ],
        ], 200);
    }

    /**
     * @param $url
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($url)
    {
        return response()->json([
            'message' => 'Not implemented'
        ], 409);
      
        Url::where('short_url', $url)->firstOrFail();

        if (! $this->url->OwnerOrAdmin($url)) {
            abort(403);
        }

        ClickUrl::deleteUrlsClicks($url);
        Url::destroy($url);
        DeletedUrls::add($url);

        return response()->json([
            'message' => 'Short URL '.$url.' deleted successfully!',
        ], 200);
    }
}

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
use Illuminate\Support\Facades\Auth;

class UrlController extends Controller
{
    protected $url;

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

    public function store(ShortUrl $request)
    {
        $data = $request->validated();

        if ($this->url->customUrlExisting($data['customUrl'])) {
            return response()->json([
                'message' => 'This Short URL already exists.',
            ], 409);
        }

        if ($existing = $this->url->checkExistingLongUrl($data['url'])) {
            return response()->json([
                'message' => 'The Short URL for this destination already exists.',
                'short_url' => $existing,
                'long_url' => $data['url'],
            ], 409);
        }

        $short = $this->url->shortenUrl($data['url'], $data['customUrl'], $data['privateUrl'], $data['hideUrlStats']);

        return response()->json([
            'message' => 'Success! Short URL created.',
            'short_url' => $short,
        ], 200);
    }

    public function show($url)
    {
        Url::findOrFail($url);
        $selectStatement = ['long_url', 'short_url'];

        if ($this->url->isOwner($url)) {
            $selectStatement = ['created_at', 'updated_at', 'long_url', 'short_url', 'private', 'hide_stats'];
        }

        if (User::isAdmin()) {
            $selectStatement = '*';
        }

        return Url::where('short_url', $url)->select($selectStatement)->get();
    }

    public function update($url, ShortUrl $request)
    {
        $url = Url::findOrFail($url);

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

    public function destroy($url)
    {
        Url::findOrFail($url);

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

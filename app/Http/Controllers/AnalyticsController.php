<?php

/*
 * UrlHum (https://urlhum.com)
 *
 * @link      https://github.com/urlhum/UrlHum
 * @copyright Copyright (c) 2019 Christian la Forgia
 * @license   https://github.com/urlhum/UrlHum/blob/master/LICENSE.md (MIT License)
 */

namespace App\Http\Controllers;

use App\Url;
use App\ClickUrl;
use Carbon\Carbon;
use App\Services\Analytics;
use App\Services\UrlService;
use Illuminate\Contracts\View\Factory;
use Illuminate\View\View;

/**
 * Class AnalyticsController.
 *
 * @author Christian la Forgia <christian@optiroot.dev>
 */
class AnalyticsController extends Controller
{
    /**
     * @var UrlService
     */
    protected $url;

    protected $analytics;

    /**
     * AnalyticsController constructor.
     *
     * @param UrlService $urlService
     * @param Analytics $analytics
     */
    public function __construct(UrlService $urlService, Analytics $analytics)
    {
        $this->url = $urlService;
        $this->analytics = $analytics;
    }

    /**
     * Show the URL analytics page to user.
     *
     * @param $url
     * @return Factory|View
     */
    public function show($url)
    {
        $urlWithRelations = Url::withCount([
            'clicks',
            'clicks as real_clicks_count' => function ($query) {
                $query->where('real_click', 1);
            },
            'clicks as today_clicks_count' => function ($query) {
                $query->where('created_at', '>=', Carbon::now()->subDay());
            },
        ])->whereRaw('BINARY `short_url` = ?',  [$url])->firstOrFail();

        if ($urlWithRelations->hide_stats && ! $this->url->OwnerOrAdmin($url)) {
            abort(403);
        }

        $data = [
            'url' => $url,
            'clicks' => $urlWithRelations->clicks_count,
            'realClicks' => $urlWithRelations->real_clicks_count,
            'todayClicks' => $urlWithRelations->today_clicks_count,
            'countriesClicks' => $this->analytics::getCountriesClicks($url),
            'countriesColor' =>  $this->analytics::getCountriesColor($this->analytics::getCountriesClicks($url)),
            'latestClicks' => $this->analytics::getLatestClicks($url),
            'referers' =>  $this->analytics::getUrlReferers($url),
            'creationDate' => $urlWithRelations->created_at->diffForHumans(),
            'isOwnerOrAdmin' => $this->url->OwnerOrAdmin($url),
        ];

        return view('analytics.urlAnalytics')->with($data);
    }

    /**
     * Show the referers list to the user.
     *
     * @return Factory|View
     */
    public function showReferrersList()
    {
        if (setting('disable_referers')) {
            abort(404);
        }

        return view('analytics.referrers')->with('referrers', ClickUrl::getReferersList());
    }
}

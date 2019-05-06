<?php
/**
 * UrlHum (https://urlhum.com).
 *
 * @link      https://github.com/urlhum/UrlHum
 * @copyright Copyright (c) 2019 Christian la Forgia
 * @license   https://github.com/urlhum/UrlHum/blob/master/LICENSE.md (MIT License)
 */

namespace App\Http\Controllers;

use App\Url;
use App\ViewUrl;
use App\Analytics;
use Carbon\Carbon;
use App\Services\UrlService;

/**
 * Class AnalyticsController.
 *
 * @author Christian la Forgia <christian@optiroot.it>
 */
class AnalyticsController extends Controller
{
    /**
     * @var UrlService
     */
    protected $url;

    /**
     * AnalyticsController constructor.
     *
     * @param UrlService $urlService
     */
    public function __construct(UrlService $urlService)
    {
        $this->url = $urlService;
    }

    /**
     * Show the URL analytics page to user.
     *
     * @param $url
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function show($url)
    {
        // Check if URL exists
        $urlWithRelations = Url::withCount([
            'clicks',
            'clicks as real_clicks_count' => function ($query) {
                $query->where('real_click', 1);
            },
            'clicks as today_clicks_count' => function ($query) {
                $query->where('created_at', '>=', Carbon::now()->subDay());
            },
        ])->where('short_url', $url)->firstOrFail();

        if ($urlWithRelations->hide_stats && ! $this->url->OwnerOrAdmin($url)) {
            abort(403);
        }

        $countriesViews = Analytics::getCountriesViews($url);

        $data = [
            'url' => $url,
            'clicks' => $urlWithRelations->clicks_count,
            'realClicks' => $urlWithRelations->real_clicks_count,
            'todayClicks' => $urlWithRelations->today_clicks_count,
            'countriesViews' => $countriesViews,
            'countriesRealViews' => Analytics::getCountriesRealViews($url),
            'countriesColor' => Analytics::getCountriesColor($countriesViews),
            'referrers' => Analytics::getReferrers($url),
            'creationDate' => $urlWithRelations->created_at->diffForHumans(),
            'isOwnerOrAdmin' => $this->url->OwnerOrAdmin($url),
        ];

        return view('analytics.urlAnalytics')->with($data);
    }

    /**
     * Show the referers list to the user.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function showReferrersList()
    {
        if (setting('disable_referers')) {
            abort(404);
        }

        return view('analytics.referrers')->with('referrers', ViewUrl::getReferrers());
    }
}

<?php
/**
 * UrlHum (https://urlhum.com)
 *
 * @link      https://github.com/urlhum/UrlHum
 * @copyright Copyright (c) 2019 Christian la Forgia
 * @license   https://github.com/urlhum/UrlHum/blob/master/LICENSE.md (MIT License)
 */

namespace App\Http\Controllers;

use App\Analytics;
use App\Url;
use App\Services\UrlService;
use App\ViewUrl;

/**
 * Class AnalyticsController
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
     * Show the URL analytics page to user
     *
     * @param $url
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function show($url)
    {
        // Check if URL exists
        Url::where('short_url', $url)->firstOrFail();

        if ($this->url->urlStatsHidden($url)  && !$this->url->OwnerOrAdmin($url)) {
           abort(403);
        }

        $countriesViews = Analytics::getCountriesViews($url);

        $data = [
            'url'                   =>          $url,
            'clicks'                =>          Analytics::getClicks($url),
            'realClicks'            =>          Analytics::getRealClicks($url),
            'todayClicks'           =>          Analytics::getTodayClicks($url),
            'countriesViews'        =>          $countriesViews,
            'countriesRealViews'    =>          Analytics::getCountriesRealViews($url),
            'countriesColor'        =>          Analytics::getCountriesColor($countriesViews),
            'referrers'             =>          Analytics::getReferrers($url),
            'creationDate'          =>          Analytics::getCreationDate($url),
            'isOwnerOrAdmin'        =>          $this->url->OwnerOrAdmin($url)
        ];

        return view('analytics.urlAnalytics')->with($data);

    }

    /**
     * Show the referers list to the user
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function showReferrersList()
    {
        return view('analytics.referrers')->with('referrers', ViewUrl::getReferrers());
    }

}

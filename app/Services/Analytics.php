<?php

/*
 * UrlHum (https://urlhum.com)
 *
 * @link      https://github.com/urlhum/UrlHum
 * @copyright Copyright (c) 2019 Christian la Forgia
 * @license   https://github.com/urlhum/UrlHum/blob/master/LICENSE.md (MIT License)
 */

namespace App\Services;

use App\ViewUrl;

/**
 * Class Analytics, used to retrieve analytics data about Short URLs.
 *
 *
 * @author Christian la Forgia <christian@optiroot.it>
 */
class Analytics
{
    /**
     * Get the list of the URL's visitors countries.
     *
     * @param $url
     * @return array
     */
    public static function getCountriesViews($url)
    {
        $countriesViews = ViewUrl::where('short_url', $url)
            ->select('country_full', \DB::raw('count(*) as total'))
            ->groupBy('country_full')
            ->pluck('total', 'country_full')->all();

        return $countriesViews;
    }

    /**
     * Get the list of the URL's real visitors countries.
     *
     * @param $url
     * @return array
     */
    public static function getCountriesRealViews($url)
    {
        $countriesRealViews = ViewUrl::where('short_url', $url)
            ->where('real_click', 1)
            ->select('country_full', \DB::raw('count(*) as total'))
            ->groupBy('country_full')
            ->pluck('total', 'country_full')->all();

        return $countriesRealViews;
    }

    /**
     * Generate a random set of colors, depending on how much countries
     * are present in the analytics data.
     *
     * @param $countriesViews
     * @return array
     */
    public static function getCountriesColor($countriesViews)
    {
        $rgbColor = [];
        $countriesColor = [];
        $countriesNum = count($countriesViews);

        // Iterate same time as the number of the countries
        for ($i = 0; $i <= $countriesNum; $i++) {
            foreach (['r', 'g', 'b'] as $color) {
                $rgbColor[$color] = mt_rand(0, 255);
            }
            $countriesColor[] = $rgbColor['r'].', '.$rgbColor['g'].', '.$rgbColor['b'];
        }

        return $countriesColor;
    }

    /**
     * Load the short URL referers' list.
     *
     * @param $url
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public static function getReferrers($url)
    {
        $referrers = ViewUrl::where('short_url', $url)
            ->where('real_click', 1)
            ->select(\DB::raw('IFNULL(referer, \'Direct / Unknown\') AS referer'), \DB::raw('sum(real_click) as total'))
            ->groupBy('real_click', 'referer')
            ->orderBy('total', 'DESC')
            ->paginate('20');

        return $referrers;
    }

    /**
     * Count how much referers we have in total.
     *
     * @return int
     */
    public static function getReferersCount()
    {
        $referersCount = ViewUrl::count(\DB::raw('DISTINCT referer'));

        return $referersCount;
    }
}

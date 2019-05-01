<?php
/**
 * UrlHum (https://urlhum.com)
 *
 * @link      https://github.com/urlhum/UrlHum
 * @copyright Copyright (c) 2019 Christian la Forgia
 * @license   https://github.com/urlhum/UrlHum/blob/master/LICENSE.md (MIT License)
 */

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

/**
 * Analytics Model, used to retrieve every data about URLs analytics
 *
 * Class Analytics
 * @author Christian la Forgia <christian@optiroot.it>
 */
class Analytics extends Model
{
    /**
     * @var string
     */
    protected $table = 'views';

    /**
     * Get the Clicks an URL had
     *
     * @param $url
     * @return int
     */
    public static function getClicks($url)
    {
        $clicks = Analytics::where('short_url', $url)
            ->count();
        return $clicks;
    }

    /**
     * Get the Real Clicks an URL had
     *
     * @param $url
     * @return int
     */
    public static function getRealClicks($url)
    {
        $realClicks = Analytics::where('short_url', $url)
            ->where('real_click', 1)
            ->count();
        return $realClicks;
    }

    /**
     * Load the Clicks (not real) made today to the URL
     *
     * @param $url
     * @return int
     */
    public static function getTodayClicks($url)
    {
        $todayClicks = Analytics::where('short_url', $url)
            ->where('created_at', '>=', Carbon::now()->subDay())
            ->count();

        return $todayClicks;
    }

    /**
     * Get the list of the URL's visitors countries
     *
     * @param $url
     * @return array
     */
    public static function getCountriesViews($url)
    {
        $countriesViews =  Analytics::where('short_url', $url)
            ->select('country_full', \DB::raw('count(*) as total'))
            ->groupBy('country_full')
            ->pluck('total','country_full')->all();

        return $countriesViews;
    }

    /**
     * Get the list of the URL's real visitors countries
     *
     * @param $url
     * @return array
     */
    public static function getCountriesRealViews($url)
    {
        $countriesRealViews =  Analytics::where('short_url', $url)
            ->where('real_click', 1)
            ->select('country_full', \DB::raw('count(*) as total'))
            ->groupBy('country_full')
            ->pluck('total','country_full')->all();

        return $countriesRealViews;
    }


    /**
     * Generate a random set of colors, depending on how much countries
     * are present in the analytics data
     *
     * @param $countriesViews
     * @return array
     */
    public static function getCountriesColor($countriesViews)
    {
        $rgbColor = array();
        $countriesColor = array();
        $countriesNum = count($countriesViews);

        // Iterate same time as the number of the countries
        for ($i = 0; $i <= $countriesNum; $i++) {
            foreach (array('r', 'g', 'b') as $color) {
                $rgbColor[$color] = mt_rand(0, 255);
            }
            $countriesColor[] = $rgbColor['r'] . ', ' . $rgbColor['g'] . ', ' . $rgbColor['b'];
        }

        return $countriesColor;
    }

    /**
     * Load the short URL referers' list
     *
     * @param $url
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public static function getReferrers($url)
    {
        $referrers =  Analytics::where('short_url', $url)
            ->where('real_click', 1)
            ->select(\DB::raw('IFNULL(referer, \'Direct / Unknown\') AS referer'),  \DB::raw('sum(real_click) as total'))
            ->groupBy('real_click', 'referer')
            ->orderBy('total', 'DESC')
            ->paginate('20');

        return $referrers;
    }

    /**
     * Get the data of the URL creation
     *
     * @param $url
     * @return mixed
     */
    public static function getCreationDate($url)
    {
        $creationDate = Url::where('short_url', $url)
            ->select('created_at')
            ->first('created_at');

        return $creationDate->created_at->diffForHumans();
    }


    /**
     * Count how much referers we have in total
     *
     * @return int
     */
    public static function getReferersCount()
    {
        $referersCount = DB::table('views')->count(DB::raw('DISTINCT referer'));

        return $referersCount;
    }


}

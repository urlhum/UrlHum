<?php
/**
 * UrlHum (https://urlhum.com)
 *
 * @link      https://github.com/urlhum/UrlHum
 * @copyright Copyright (c) 2019 Christian la Forgia
 * @license   https://github.com/urlhum/UrlHum/blob/master/LICENSE.md (MIT License)
 */

namespace App\Services;

use App\Settings;
use App\User;
use Auth;
use App\Url;
use Illuminate\Support\Str;


/**
 * Useful functions to use in the Whole App for Short URLs
 *
 * Class UrlService
 * @package App\Services
 */
class UrlService
{
    /**
     * Check if the URL is reserved, based on the system setting
     *
     * @param $url
     * @return bool
     */
    public function isUrlReserved($url)
    {
        $reservedUrls = Settings::getReservedUrls();
        return in_array($url, $reservedUrls);
    }

    /**
     * Check if the Custom URL already exists
     *
     * @param $custom_url
     * @return bool
     */
    public function checkExistingCustomUrl($custom_url)
    {
        // Check if custom url has been typed by user
        if (is_null($custom_url)) {
            return false;
        } else {
            // Search for custom url. If it is present or is it reserved return true
            if ($res = Url::where('short_url', $custom_url)->exists() || $this->isUrlReserved($custom_url)) {
                return true;
            } else {
                return false;
            }
        }
    }

    /**
     * Check if the long URL exists on database. If so, return the short URL
     *
     * @param $long_url
     * @return mixed|null
     */
    public function checkExistingLongUrl($long_url)
    {
        if ($long_url_check = Url::where('long_url', $long_url)->first()) {
            return $long_url_check['short_url'];
        }

        return null;
    }


    /**
     * Check if the logged in user is the Short URL owner
     *
     * @param $url
     * @return bool
     */
    public function isOwner($url)
    {
        if (Auth::check()) {
            $user_id = Auth::user()->id;
        } else {
            return false;
        }

        $urlUser = Url::where('short_url', $url)
            ->first();

        if ($urlUser->user_id == $user_id) {
            return true;
        }

        return false;
    }


    /**
     * Actually creates a short URL if there is no custom URL. Otherwise, use the custom
     *
     * @param $long_url
     * @param $short_url
     * @param $privateUrl
     * @param $hideUrlStats
     * @return string
     */
    public function createShortUrl($long_url, $short_url, $privateUrl, $hideUrlStats)
    {
        // Check if Short UrlService is present or not
        if (is_null($short_url)) {

            // Iterate until a not-already-created short url is generated
            do {
                $short_url = Str::random(6);
            } while (Url::where('short_url', $short_url)->first() || $this->isUrlReserved($short_url));

            Url::createUrl($long_url, $short_url, $privateUrl, $hideUrlStats);

            return $short_url;

        } else {
            // Set the short url as custom url sent by user
            Url::createUrl($long_url, $short_url, $privateUrl, $hideUrlStats);
            return $short_url;
        }

    }


    /**
     * Load the URLs of the currently logged in user
     *
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function getMyUrls()
    {
        if (Auth::check()) {
            $user_id = Auth::user()->id;
        } else {
            abort(404);
        }

        return $urlsList = Url::where('user_id', $user_id)->paginate(30);
    }


    /**
     * Check if the logged in user is the URL Owner or an Admin
     *
     * @param $url
     * @return bool
     */
    public function OwnerOrAdmin($url)
    {
        return User::isAdmin() || $this->isOwner($url);
    }


    /**
     * Check if the Url statistics are Hidden and return the setting value
     *
     * @param $url
     * @return mixed
     */
    public function urlStatsHidden($url)
    {
        $check = Url::where('short_url', $url)
            ->select('hide_stats')
            ->first();

        return $check->hide_stats;
    }


    /**
     * Check if the typed URL has already been deleted before
     *
     * @param $url
     * @return bool
     */
    public function isUrlAlreadyDeleted($url)
    {
        $check = \DB::table('deleted_urls')
            ->select('url')
            ->where('url', $url)
            ->exists();

        return $check;
    }


}
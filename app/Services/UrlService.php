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
use App\Url;
use Auth;
use Illuminate\Support\Str;


/**
 * Useful functions to use in the Whole App for Short URLs
 *
 * Class UrlService
 *
 * @author Christian la Forgia <christian@optiroot.it>
 */
class UrlService
{

    /**
     * Actually creates a short URL if there is no custom URL. Otherwise, use the custom
     *
     * @param $long_url
     * @param $short_url
     * @param $privateUrl
     * @param $hideUrlStats
     * @return string
     */
    public function shortenUrl($long_url, $short_url, $privateUrl, $hideUrlStats)
    {
        if (!empty($short_url)) {
            // Set the short url as custom url sent by user
            Url::createShortUrl($long_url, $short_url, $privateUrl, $hideUrlStats);
            return $short_url;
        }

        // Iterate until a not-already-created short url is generated
        do {
            $short_url = Str::random(6);
            // ! because we need 'false', not 'true'
        } while ($this->customUrlExisting($short_url));

        Url::createShortUrl($long_url, $short_url, $privateUrl, $hideUrlStats);
        return $short_url;
    }

    /**
     * Check if is possible to use the Custom URL or not
     *
     * @param $url
     * @return bool
     */
    public function customUrlExisting($url)
    {
        if ($this->checkExistingCustomUrl($url) ||
            $this->isShortUrlProtected($url)    ||
            $this->isUrlReserved($url)          ||
            (!setting('deleted_urls_can_be_recreated') && ($this->isUrlAlreadyDeleted($url)))) {
            return true;
        }

        return false;
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
     * Check if the logged in user is the Short URL owner
     *
     * @param $url
     * @return bool
     */
    public function isOwner($url)
    {
        if (!Auth::check()) { return false; }

        $urlUser = Url::find($url);

        if ($urlUser->user_id == Auth::user()->id) {
            return true;
        }

        return false;
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
        }

        return Url::where('short_url', $custom_url)->exists() || $this->isUrlReserved($custom_url);
    }

    /**
     * Check if the long URL exists on database. If so, return the short URL
     *
     * @param $long_url
     * @return mixed|null
     */
    public function checkExistingLongUrl($long_url)
    {
        $long_url_check = Url::where('long_url', $long_url)->first();

        return $long_url_check['short_url'];
    }

    /**
     * Check if Short URL is protected / cannot be created
     * because it is a path
     *
     * @param url
     * @return array|null
     */
    public function isShortUrlProtected($url)
    {
        $routes = array_map(
            function (\Illuminate\Routing\Route $route) {
                return $route->uri;
            }, (array) \Route::getRoutes()->getIterator()
        );

        return in_array($url, $routes);
    }


    /**
     * Check if the URL is reserved, based on the system setting
     *
     * @param $url
     * @return bool
     */
    public function isUrlReserved($url)
    {
        $reservedUrls = Settings::getReservedUrls();
        // Check if there are any reserved URLs or if the custom URL isn't set
        if (gettype($reservedUrls) !== 'array' || $url === NULL) {
            return false;
        }

        return in_array($url, $reservedUrls);
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
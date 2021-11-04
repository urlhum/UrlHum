<?php

/*
 * UrlHum (https://urlhum.com)
 *
 * @link      https://github.com/urlhum/UrlHum
 * @copyright Copyright (c) 2019 Christian la Forgia
 * @license   https://github.com/urlhum/UrlHum/blob/master/LICENSE.md (MIT License)
 */

namespace App\Services;

use App\ClickUrl;
use App\DeviceTarget;
use App\DeviceTargetsEnum;
use App\Http\Requests\ShortUrl;
use Illuminate\Routing\Route;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use App\Url;
use App\User;
use App\Settings;
use Hashids\Hashids;
use Illuminate\Support\Facades\DB;
use RuntimeException;

/**
 * Useful functions to use in the Whole App for Short URLs.
 *
 * Class UrlService
 *
 * @author Christian la Forgia <christian@optiroot.dev>
 */
class UrlService
{
    /**
     * Actually creates a short URL if there is no custom URL. Otherwise, use the custom.
     *
     * @param $long_url
     * @param $short_url
     * @param $privateUrl
     * @param $hideUrlStats
     * @return Url
     * @throws RuntimeException
     */
    public function shortenUrl($long_url, $short_url, $privateUrl, $hideUrlStats): Url
    {
        $createdUrlId = Url::createShortUrl($long_url, $short_url, $privateUrl, $hideUrlStats);

        if ($short_url === null) {
            $short_url = $this->generateShortUrl($createdUrlId);
            if ($short_url === '') {
                throw new RuntimeException();
            }
        }

        return Url::assignShortUrlToUrl($createdUrlId, $short_url);
    }

    /**
     * Generate an unique short URL using hashids. Salt is the APP_KEY, which is always unique.
     *
     * @param int $id
     * @return string
     */
    public function generateShortUrl(int $id): string
    {
        $checksQuantity = 0;
        do {
            if ($checksQuantity > 5) {
                return '';
            }
            $hashLength = setting('min_hash_length') ?? 4;
            $hashids = new Hashids(env('APP_KEY'), $hashLength);
            $encoded = $hashids->encode($id);
            $alreadyGenerated = false;
            if ($this->isUrlReserved($encoded) || Url::whereRaw('BINARY `short_url` = ?', [$encoded])->exists()) {
                $alreadyGenerated = true;
                $checksQuantity++;
            }
        } while ($alreadyGenerated);

        return $encoded;
    }

    /**
     * Check if is possible to use the Custom URL or not.
     *
     * @param $url
     * @return bool
     */
    public function customUrlExisting($url)
    {
        if ($this->checkExistingCustomUrl($url) ||
            $this->isShortUrlProtected($url) ||
            $this->isUrlReserved($url) ||
            (! setting('deleted_urls_can_be_recreated') && ($this->isUrlAlreadyDeleted($url)))) {
            return true;
        }

        return false;
    }

    /**
     * Check if the logged in user is the URL Owner or an Admin.
     *
     * @param $url
     * @return bool
     */
    public function OwnerOrAdmin($url)
    {
        return User::isAdmin() || $this->isOwner($url);
    }

    /**
     * Check if the logged in user is the Short URL owner.
     *
     * @param $url
     * @return bool
     */
    public function isOwner($url)
    {
        if (! Auth::check()) {
            return false;
        }

        $urlUser = Url::whereRaw('BINARY `short_url` = ?', [$url])->firstOrFail();

        return $urlUser->user_id === Auth::user()->id;
    }

    /**
     * Check if the Custom URL already exists.
     *
     * @param $custom_url
     * @return bool
     */
    public function checkExistingCustomUrl($custom_url): bool
    {
        // Check if custom url has been typed by user
        if (is_null($custom_url)) {
            return false;
        }

        return Url::whereRaw('BINARY `short_url` = ?', [$custom_url])->exists() || $this->isUrlReserved($custom_url);
    }

    /**
     * Check if the long URL exists on database. If so, return the short URL.
     *
     * @param $long_url
     * @return mixed|null
     */
    public function checkExistingLongUrl($long_url)
    {
        $long_url_check = Url::where('long_url', $long_url)->first();

        if ($long_url_check === null) {
            return null;
        }

        return $long_url_check['short_url'];
    }

    /**
     * Check if Short URL is protected / cannot be created
     * because it is a path.
     *
     * @param url
     * @return bool
     */
    public function isShortUrlProtected($url): bool
    {
        $routes = array_map(
            static function (Route $route) {
                return $route->uri;
            }, (array) \Route::getRoutes()->getIterator()
        );

        return in_array($url, $routes, true);
    }

    /**
     * Check if the URL is reserved, based on the system setting.
     *
     * @param $url
     * @return bool
     */
    public function isUrlReserved($url): bool
    {
        $reservedUrls = Settings::getReservedUrls();
        // Check if there are any reserved URLs or if the custom URL isn't set
        if (!is_array($reservedUrls) || $url === null) {
            return false;
        }

        return in_array($url, $reservedUrls, true);
    }

    /**
     * Check if the typed URL has already been deleted before.
     *
     * @param $url
     * @return bool
     */
    public function isUrlAlreadyDeleted($url): bool
    {
        return \DB::table('deleted_urls')
            ->select('url')
            ->whereRaw('BINARY `short_url` = ?', [$url])
            ->exists();
    }


    /*
     * Let's assign at every URL the value sent by the form
     */
    /**
     * @param $request
     * @param $short_url_id
     */
    public function assignDeviceTargetUrl($request, $short_url_id): void
    {
        $data = [];

        $enums = DeviceTargetsEnum::all();

        foreach ($enums as $device) {
            if (isset($request[$device->name]) && $request[$device->name] !== null) {
                $data[] = [
                    'short_url_id' => $short_url_id,
                    'device' => $device->id,
                    'target_url' => $request[$device->name],
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s')
                ];
            }
        }

        DeviceTarget::insert($data);
    }

    /**
     * @param $short_url
     * @return Collection
     */
    public function getTargets(Url $short_url)
    {
        return DB::table('device_targets_enum')
            ->leftJoin('device_targets', static function($join) use ($short_url)
            {
                $join->on('device_targets.device', '=', 'device_targets_enum.id');
                $join->where('device_targets.short_url_id', '=', $short_url->id);
            })
            ->select('*')
            ->get();
    }


    /**
     * @param $short_url
     * @return bool|string
     */
    public function getLongUrl(Url $short_url)
    {
        $deviceDetection = new DeviceDetection();

        $platformId = $deviceDetection->getPlatform();

        $targets = $this->getTargets($short_url);

        return $targets->where('device', $platformId)->first()->target_url ?? $short_url->long_url;
    }
}

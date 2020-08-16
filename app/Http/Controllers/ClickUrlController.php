<?php

/*
 * UrlHum (https://urlhum.com)
 *
 * @link      https://github.com/urlhum/UrlHum
 * @copyright Copyright (c) 2019 Christian la Forgia
 * @license   https://github.com/urlhum/UrlHum/blob/master/LICENSE.md (MIT License)
 */

namespace App\Http\Controllers;

use App\Services\UrlService;
use App\Url;
use App\ClickUrl;
use App\IpAnonymizer;
use GeoIp2\Database\Reader;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use BrowscapPHP\Browscap;
use BrowscapPHP\Exception;
use Doctrine\Common\Cache\FilesystemCache;
use Roave\DoctrineSimpleCache\SimpleCacheAdapter;

/**
 * Controller handling the actual page of the corresponding URL, that redirects the user.
 *
 * Class ClickUrlController
 * @author Christian la Forgia <christian@optiroot.it>
 */
class ClickUrlController
{
    /**
     * The actual "url" page, redirects the user.
     *
     * @param $url
     * @return \Illuminate\Http\RedirectResponse
     */
    public function click($url)
    {
        $urlService = new UrlService();

        if ($result = Url::findOrFail($url)) {
            $externalUrl = $urlService->getLongUrl($result);
        }

        $ip = request()->ip();

        if (setting('disable_referers')) {
            $referer = null;
        } else {
            $referer = request()->server('HTTP_REFERER');
        }

        $hashed = 0;
        $anonymized = 0;

        if (setting('anonymize_ip')) {
            $Anonip = IpAnonymizer::anonymizeIp($ip);
            $anonymized = 1;
            $countries = $this->getCountries($Anonip);
        } else {
            $countries = $this->getCountries($ip);
        }

        if (setting('hash_ip')) {
            $ip = hash('sha1', $ip);
            $hashed = 1;
        }

        $click = 1;
        $real_click = 0;

        if (ClickUrl::realClick($url, $ip)) {
            $click = 0;
            $real_click = 1;
        }

        if (! setting('hash_ip') && setting('anonymize_ip')) {
            $click = 1;
            $real_click = 0;
        }

        $userAgent = request()->server('HTTP_USER_AGENT');
        $browser = $this->getBrowser($userAgent);

        $data = [
            'short_url' => $url,
            'click' => $click,
            'real_click' => $real_click,
            'country' => $countries['countryCode'],
            'country_full' => $countries['countryName'],
            'user_agent' => $userAgent,
            'browser' => $browser['browser'],
            'browser_version' => $browser['browserVersion'],
            'os' => $browser['os'],
            'referer' => $referer ?? null,
            'ip_address' => $ip,
            'ip_hashed' => $hashed,
            'ip_anonymized' => $anonymized,
        ];

        ClickUrl::store($data);

        return Redirect::away($externalUrl);
    }

    public function getCountries($ip)
    {
        // We try to get the IP country using (or not) the anonymized IP
        // If it fails, because GeoLite2 doesn't know the IP country, we
        // will set it to Unknown
        try {
            $reader = new Reader(app_path().'/../database/GeoLite2-Country.mmdb');
            $record = $reader->country($ip);
            $countryCode = $record->country->isoCode;
            $countryName = $record->country->name;

            return compact('countryCode', 'countryName');
        } catch (\Exception $e) {
            $countryCode = 'N/A';
            $countryName = 'Unknown';

            return compact('countryCode', 'countryName');
        }
    }

    protected function getBrowser($userAgent)
    {
        $fileCache = new FilesystemCache(config('browscap.cache'));
        $cache = new SimpleCacheAdapter($fileCache);
        $browscap = new Browscap($cache, logger()->driver());

        try {
            $result = $browscap->getBrowser($userAgent);
        } catch (Exception $e) {
            return [
                'browser' => null,
                'browserVersion' => null,
                'os' => null
            ];
        }

        return [
            'browser' => $result->browser,
            'browserVersion' => $result->version,
            'os' => $result->platform
        ];
    }
}

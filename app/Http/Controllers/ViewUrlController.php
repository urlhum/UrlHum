<?php
/**
 * UrlHum (https://urlhum.com)
 *
 * @link      https://github.com/urlhum/UrlHum
 * @copyright Copyright (c) 2019 Christian la Forgia
 * @license   https://github.com/urlhum/UrlHum/blob/master/LICENSE.md (MIT License)
 */

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\Request;
use App\Url;
use Faker;
use App\IpAnonymizer;
use GeoIp2\Database\Reader;
use App\ViewUrl;

/**
 * Controller handling the actual page of the corresponding URL, that redirects the user
 *
 * Class ViewUrlController
 * @author Christian la Forgia <christian@optiroot.it>
 */
class ViewUrlController
{
    /**
     * The actual "url" page, redirects the user
     *
     * @param $url
     * @return \Illuminate\Http\RedirectResponse
     */
    public function view($url)
    {
        if ($result = Url::find($url)) {
            $externalUrl = $result->long_url;
        } else {
            abort(404);
        }

        $ip = request()->ip();

        if (setting('disable_referers')) {
            $referer = NULL;
        } else {
            $referer = request()->server('HTTP_REFERER') ?? NULL;
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

        if (ViewUrl::realClick($url, $ip)) {
            $click = 0;
            $real_click = 1;
        }

        if (!setting('hash_ip') && setting('anonymize_ip') ) {
            $click = 1;
            $real_click = 0;
        }

        $data = array(
            'short_url' => $url,
            'click' => $click,
            'real_click' => $real_click,
            'country' => $countries['countryCode'],
            'country_full' => $countries['countryName'],
            'referer' => $referer ?? NULL,
            'ip_address' => $ip,
            'ip_hashed' => $hashed,
            'ip_anonymized' => $anonymized
            );

        ViewUrl::store($data);



        return Redirect::away($externalUrl);

    }

    public function getCountries($ip)
    {
        // We try to get the IP country using (or not) the anonymized IP
        // If it fails, because GeoLite2 doesn't know the IP country, we
        // will set it to Unknown
        try {
            $reader = new Reader(app_path() . '/../database/GeoLite2-Country.mmdb');
            $record = $reader->country($ip);
            $countryCode = $record->country->isoCode;
            $countryName = $record->country->name;
            return compact("countryCode", "countryName");
        } catch(\Exception $e) {
            $countryCode = 'N/A';
            $countryName = 'Unknown';
            return compact("countryCode", "countryName");
        }
    }

}
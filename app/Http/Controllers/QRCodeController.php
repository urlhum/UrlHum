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
use Illuminate\Support\Facades\Storage;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

/**
 * Controller handling creating/fetching the QR code associated with the short URL.
 *
 * Class QRCodeController
 * @author Michael Lindahl <me@michaellindahl.com>
 */
class QRCodeController
{
    /**
     * Retreives the QR Code in svg format for the short URL.
     *
     * @param $url
     * @return \Illuminate\Http\RedirectResponse
     */
    public function svg(Url $url)
    {
        return $this->qrCode($url, 'svg', 'image/svg+xml');
    }

    /**
     * Retreives the QR Code in png format for the short URL.
     *
     * @param $url
     * @return \Illuminate\Http\RedirectResponse
     */
    public function png(Url $url)
    {
        return $this->qrCode($url, 'png', 'image/png');
    }

    private function qrCode(Url $url, $format, $contentType)
    {
        $path = 'qrcodes/'.$url->short_url.'.'.$format;
        if (Storage::exists($path)) {
            $qrCode = Storage::get($path);
        } else {
            $qrCode = QrCode::format($format)->size(300)->generate(route('click', $url));
            Storage::put($path, $qrCode);
        }

        return response($qrCode)->header('Content-Type', $contentType);
    }
}

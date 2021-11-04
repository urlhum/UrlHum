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
use Illuminate\Contracts\Filesystem\FileNotFoundException;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Response;
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
     * Retrieves the QR Code in svg format for the short URL.
     *
     * @param string $shortUrl
     * @return Application|ResponseFactory|Response
     * @throws FileNotFoundException
     */
    public function svg(string $shortUrl)
    {
        $url = Url::whereRaw('BINARY `short_url` = ?', [$shortUrl])->firstOrFail();
        return $this->qrCode($url, 'svg', 'image/svg+xml');
    }

    /**
     * Retrieves the QR Code in png format for the short URL.
     *
     * @param string $shortUrl
     * @return Application|ResponseFactory|Response
     * @throws FileNotFoundException
     */
    public function png(string $shortUrl)
    {
        $url = Url::whereRaw('BINARY `short_url` = ?', [$shortUrl])->firstOrFail();
        return $this->qrCode($url, 'png', 'image/png');
    }

    /**
     * @param Url $url
     * @param $format
     * @param $contentType
     * @return Application|ResponseFactory|Response
     * @throws FileNotFoundException
     */
    private function qrCode(Url $url, $format, $contentType)
    {
        $path = 'qrcodes/'.$url->short_url.'.'.$format;
        if (Storage::exists($path)) {
            $qrCode = Storage::get($path);
        } else {
            $qrCode = QrCode::format($format)->size(300)->generate(route('click', $url->short_url));
            Storage::put($path, $qrCode);
        }

        return response($qrCode)->header('Content-Type', $contentType);
    }

}
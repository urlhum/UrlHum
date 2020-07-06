<?php
/*
 * UrlHum (https://urlhum.com)
 *
 * @link      https://github.com/urlhum/UrlHum
 * @copyright Copyright (c) 2019 Christian la Forgia
 * @license   https://github.com/urlhum/UrlHum/blob/master/LICENSE.md (MIT License)
 */

namespace App\Services;

use Jenssegers\Agent\Agent;

/**
 * Useful functions to use in the Whole App for Short URLs.
 *
 * Class UrlService
 *
 * @author Christian la Forgia <christian@optiroot.it>
 */
class DeviceDetection
{
    protected $agent;

    public function __construct()
    {
        $this->agent = new Agent();
    }

    public function getPlatform(): ?int
    {
        $platform = $this->agent->platform();

        switch ($platform)
        {
            case 'Windows':
            case 'Windows NT':
                return 1;

            case 'OS X':
            case 'Mac OS X':
                return 2;

            case 'AndroidOS':
            case 'Android':
            case 'JavaOS':
                return 3;

            case 'iOS':
            case 'iPadOS':
                return 4;

            default:
                return null;
        }
    }
}

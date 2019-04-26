<?php
/**
 * UrlHum (https://urlhum.com)
 *
 * @link      https://github.com/urlhum/UrlHum
 * @copyright Copyright (c) 2019 Christian la Forgia
 * @license   https://github.com/urlhum/UrlHum/blob/master/LICENSE.md (MIT License)
 */

namespace App;
use Barryvdh\Debugbar\Facade as Debugbar;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use anlutro\LaravelSettings\Facade as Setting;

/**
 * Settings Model
 *
 * Class Settings
 * @package App
 */
class Settings extends Model
{
    /**
     * @var string
     */
    protected $table = 'settings';

    /**
     * Get all settings
     *
     * @return mixed
     */
    public static function getAllSettings()
    {
        $settings = Setting::all();
        $arr = json_decode($settings['reservedShortUrls']);
        $settings['reservedShortUrls'] =  implode(PHP_EOL, $arr);

        return $settings;
    }

    /**
     * Load the reserved URLs and json_decode them
     *
     * @return mixed
     */
    public static function getReservedUrls()
    {
        $settings = setting('reservedShortUrls');
        return json_decode($settings);
    }

}
<?php

/*
 * UrlHum (https://urlhum.com)
 *
 * @link      https://github.com/urlhum/UrlHum
 * @copyright Copyright (c) 2019 Christian la Forgia
 * @license   https://github.com/urlhum/UrlHum/blob/master/LICENSE.md (MIT License)
 */

namespace App\Console\Commands;

use Illuminate\Console\Command;

class SettingsSetCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'settings:set';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create new settings on system update or new install';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Return an array of the default UrlHum settings.
     *
     * @return array
     */
    public static function defaultSettingsList()
    {
        return [
            'anonymous_urls' => 1,
            'registration' => 1,
            'private_site' => 0,
            'unauthorized_redirect' => ' ',
            'show_guests_latests_urls' => 1,
            'hash_ip' => 1,
            'anonymize_ip' => 1,
            'disable_referers' => 1,
            'reservedShortUrls' =>  '""',
            'deleted_urls_can_be_recreated' => 1,
            'website_name' => 'UrlHum',
            'website_image' => '/images/urlhum.png',
            'website_favicon' => '/images/favicon.ico',
            'privacy_policy' => ' ',
            'enable_privacy_policy' => 1,
            'terms_of_use' => ' ',
            'enable_terms_of_use' => 1,
            'require_user_verify' => 1,
            'custom_html' => ' ',
        ];
    }

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function handle()
    {
        $default = self::defaultSettingsList();
        $actual = setting()->all();

        $diff = array_diff_key($default, $actual);

        if (! empty($diff)) {
            setting()->set(array_merge($default, $actual));
            setting()->save();
        }

        $this->info('Great! New settings created.');
    }
}

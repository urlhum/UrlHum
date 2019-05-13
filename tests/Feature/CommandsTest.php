<?php

/*
 * UrlHum (https://urlhum.com)
 *
 * @link      https://github.com/urlhum/UrlHum
 * @copyright Copyright (c) 2019 Christian la Forgia
 * @license   https://github.com/urlhum/UrlHum/blob/master/LICENSE.md (MIT License)
 */

namespace Tests\Feature;

use Tests\TestCase;
use App\Console\Commands\SettingsSetCommand;
use anlutro\LaravelSettings\Facade as Setting;

class CommandsTest extends TestCase
{
    /**
     * Check if running "settings:set" actually sets new settings.
     *
     * @return void
     */
    public function test_settings_set()
    {
        $this->artisan('settings:set')
            ->expectsOutput('Great! New settings created.');

        $actual = Setting::all();
        $default = SettingsSetCommand::defaultSettingsList();
        $diff = array_diff_key($default, $actual);

        $this->assertEmpty($diff);
    }

    /**
     * Check if running "settings:reset" works.
     *
     * @return void
     */
    public function test_settings_reset()
    {
        $this->artisan('settings:reset')
            ->expectsOutput('Settings successfully reset!');
    }
}

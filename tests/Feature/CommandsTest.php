<?php

namespace Tests\Feature;

use App\Console\Commands\SettingsSetCommand;
use Tests\TestCase;
use anlutro\LaravelSettings\Facade as Setting;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class CommandsTest extends TestCase
{
    /**
     * Check if running "settings:set" actually sets new settings
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
     * Check if running "settings:reset" works
     *
     * @return void
     */
    public function test_settings_reset()
    {
        $this->artisan('settings:reset')
            ->expectsOutput('Settings successfully reset!');
    }
}

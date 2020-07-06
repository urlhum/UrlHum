<?php

/*
 * UrlHum (https://urlhum.com)
 *
 * @link      https://github.com/urlhum/UrlHum
 * @copyright Copyright (c) 2019 Christian la Forgia
 * @license   https://github.com/urlhum/UrlHum/blob/master/LICENSE.md (MIT License)
 */

namespace App\Http\Controllers;

use App\Settings;
use App\Http\Requests\SettingsRequest;
use anlutro\LaravelSettings\Facade as Setting;

/**
 * Class SettingsController
 * Manage system settings for the admin.
 *
 * @author Christian la Forgia <christian@optiroot.it>
 */
class SettingsController extends Controller
{
    /**
     * Show the settings page to users.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function show()
    {
        $settings = Settings::getAllSettings();

        return view('settings')->with('settings', $settings);
    }

    /**
     * Save the settings.
     *
     * @param SettingsRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function save(SettingsRequest $request)
    {
        $data = $request->validated();

        // We convert reservedShortUrls new lines to array and json-ize the array to save in Database
        $data['reservedShortUrls'] = json_encode(explode(PHP_EOL, $data['reservedShortUrls']));

        $imagesVars = ['website_image', 'website_favicon'];
        foreach ($imagesVars as &$var) {
            if ($request->exists($var)) {
                $data[$var] = Settings::saveImage($data[$var]);
            }
        }

        $textareaVars = ['privacy_policy', 'terms_of_use', 'custom_html'];
        foreach ($textareaVars as &$var) {
            if ($data[$var] == null) {
                $data[$var] = ' ';
            }
        }

        Setting::set($data);
        Setting::save();

        return redirect()->back()->with('success', trans('settings.success'));
    }
}

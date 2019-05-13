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

        // TODO: These checks are repeated. To clear up a bit
        // We get the image, if uploaded by the user, then move it in the /images public folder
        if ($request->exists('website_image')) {
            $data['website_image'] = Settings::saveImage($data['website_image']);
        }

        // We get the favicon, if uploaded by the user, then move it in the /images public folder
        if ($request->exists('website_favicon')) {
            $data['website_favicon'] = Settings::saveImage($data['website_favicon']);
        }

        // Check if Privacy Policy, TOS and Custom HTML text is empty.
        // In that case, we set the content to an empty char so *setting()* doesn't delete the database field
        if ($data['privacy_policy'] == null) {
            $data['privacy_policy'] = ' ';
        }

        if ($data['terms_of_use'] == null) {
            $data['terms_of_use'] = ' ';
        }

        if ($data['custom_html'] == null) {
            $data['custom_html'] = ' ';
        }

        Setting::set($data);
        Setting::save();

        return redirect()->back()->with('success', trans('settings.success'));
    }
}

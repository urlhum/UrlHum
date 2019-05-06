<?php
/**
 * UrlHum (https://urlhum.com).
 *
 * @link      https://github.com/urlhum/UrlHum
 * @copyright Copyright (c) 2019 Christian la Forgia
 * @license   https://github.com/urlhum/UrlHum/blob/master/LICENSE.md (MIT License)
 */

namespace App\Http\Controllers;

use App\Settings;
use Illuminate\Http\Request;
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
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function save(Request $request)
    {
        $data = $request->validate([
            'website_name' => 'required|min:2|max:30',
            'anonymous_urls' => 'boolean',
            'registration' => 'boolean',
            'private_site' => 'boolean',
            'show_guests_latests_urls' => 'boolean',
            'hash_ip' => 'boolean',
            'anonymize_ip' => 'boolean',
            'disable_referers' => 'boolean',
            'reservedShortUrls' => 'max:200',
            'deleted_urls_can_be_recreated' => 'boolean',
            'website_image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'privacy_policy' => 'max:10000',
            'enable_privacy_policy' => 'boolean',
            'terms_of_use' => 'max:10000',
            'enable_terms_of_use' => 'boolean',
        ]);

        // We convert reservedShortUrls new lines to array and json-ize the array to save in Database
        $data['reservedShortUrls'] = json_encode(explode(PHP_EOL, $data['reservedShortUrls']));

        // We get the image, if uploaded by the user, then move it in the /images public folder
        if ($request->exists('website_image')) {
            $imageName = time().'.'.request()->website_image->getClientOriginalExtension();
            $request->website_image->move(public_path('images'), $imageName);
            $data['website_image'] = '/images/'.$imageName;
        }

        // Check if Privacy Policy and TOS text is empty.
        // In that case, we set the content to an empty char so *setting()* doesn't delete the database field

        if ($request->privacy_policy == null) {
            $data['privacy_policy'] = ' ';
        }

        if ($request->terms_of_use == null) {
            $data['terms_of_use'] = ' ';
        }

        Setting::set($data);
        Setting::save();

        return redirect()->back()->with('success', trans('settings.success'));
    }
}

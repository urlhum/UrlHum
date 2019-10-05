<?php

/*
 * UrlHum (https://urlhum.com)
 *
 * @link      https://github.com/urlhum/UrlHum
 * @copyright Copyright (c) 2019 Christian la Forgia
 * @license   https://github.com/urlhum/UrlHum/blob/master/LICENSE.md (MIT License)
 */

namespace Tests\Feature;

use App\User;
use Tests\TestCase;
use Illuminate\Http\UploadedFile;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class SettingsTest extends TestCase
{
    use DatabaseTransactions;

    /**
     * Useful function to reuse settings list in tests.
     *
     * @return array
     */
    public function settings_list()
    {
        return [
            'anonymous_urls' => 1,
            'registration' => 1,
            'private_site' => 0,
            'unauthorized_redirect' => '',
            'show_guests_latests_urls' => 1,
            'hash_ip' => 1,
            'website_name' => 'UrlHum',
            'anonymize_ip' => 1,
            'reservedShortUrls' => '',
            'deleted_urls_can_be_recreated' => 1,
            'privacy_policy' => '',
            'enable_privacy_policy' => 0,
            'terms_of_use' => '',
            'enable_terms_of_use' => 0,
            'custom_html' => '',
        ];
    }

    /**
     * Show the settings page to an admin. Should be successfull.
     *
     * @return void
     */
    public function test_edit_settings_page_show_as_admin()
    {
        $admin = User::find(1);
        $this->actingAs($admin)
            ->get('/settings')
            ->assertStatus(200);
    }

    /**
     * Show the settings page to an user. Should return to page not found.
     *
     * @return void
     */
    public function test_edit_settings_page_show_as_user()
    {
        $user = factory(User::class)->create();
        $this->actingAs($user)
            ->get('/settings')
            ->assertStatus(404);
    }

    /**
     * Show the settings page to a guest. Should redirect to login page.
     *
     * @return void
     */
    public function test_edit_settings_page_show_as_guest()
    {
        $this->get('/settings')
            ->assertStatus(302);
    }

    /**
     * Update settings as admin. Should succeed.
     *
     * @return void
     */
    public function test_edit_settings_send_as_admin()
    {
        $admin = User::find(1);

        $this->actingAs($admin)
            ->post('/settings/save', $this->settings_list())
            ->assertStatus(302)
            ->assertSessionHas('success');
    }

    /**
     * Update settings as user. Should return page not found for security reasons.
     *
     * @return void
     */
    public function test_edit_settings_send_as_user()
    {
        $user = factory(User::class)->create();

        $this->actingAs($user)
            ->post('/settings/save', $this->settings_list())
            ->assertStatus(404);
    }

    /**
     * Update settings as guest. Should redirect to login.
     *
     * @return void
     */
    public function test_edit_settings_send_as_guest()
    {
        $this->post('/settings/save', $this->settings_list())
            ->assertStatus(302);
    }

    /**
     * Set Website Image and Favicon.
     *
     * @return void
     */
    public function test_set_image_and_favicon()
    {
        $settings = $this->settings_list();
        $settings['website_image'] = UploadedFile::fake()->image('logo.jpg');
        $settings['website_favicon'] = UploadedFile::fake()->image('favicon.ico');

        $admin = User::find(1);
        $this->followingRedirects()
            ->actingAs($admin)
            ->post('/settings/save', $settings)
            ->assertStatus(200);
    }
}

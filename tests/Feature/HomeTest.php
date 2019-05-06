<?php
/**
 * UrlHum (https://urlhum.com).
 *
 * @link      https://github.com/urlhum/UrlHum
 * @copyright Copyright (c) 2019 Christian la Forgia
 * @license   https://github.com/urlhum/UrlHum/blob/master/LICENSE.md (MIT License)
 */

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class HomeTest extends TestCase
{
    use DatabaseTransactions;

    /**
     * Simply show the homepage to any user.
     *
     * @return void
     */
    public function test_show_homepage()
    {
        $response = $this->get('/');
        $response->assertStatus(200);
    }

    /**
     * If "private site" setting is enabled, guests should be redirected
     * to login page.
     *
     * @return void
     */
    public function test_setting_private_site_enabled_guest_redirect_to_login()
    {
        setting()->set('private_site', 1);
        $this->get('/')
            ->assertStatus(302)
            ->assertRedirect('/login');
    }

    /**
     * If Privacy Policy page is disabled, don't show it.
     *
     * @return void
     */
    public function test_disable_privacy_policy_verify()
    {
        setting()->set('enable_privacy_policy', 0);
        $this->get('/privacy-policy')
            ->assertStatus(404);
    }

    /**
     * If Privacy Policy page is enabled, show it.
     *
     * @return void
     */
    public function test_enable_privacy_policy_verify()
    {
        setting()->set('enable_privacy_policy', 1);
        $this->get('/privacy-policy')
            ->assertStatus(200);
    }

    /**
     * If TOS page is disabled, don't show it.
     *
     * @return void
     */
    public function test_disable_tos_verify()
    {
        setting()->set('enable_terms_of_use', 0);
        $this->get('/terms-of-use')
            ->assertStatus(404);
    }

    /**
     * If Privacy Policy page is enabled, show it.
     *
     * @return void
     */
    public function test_enable_tos_verify()
    {
        setting()->set('enable_terms_of_use', 1);
        $this->get('/terms-of-use')
            ->assertStatus(200);
    }
}

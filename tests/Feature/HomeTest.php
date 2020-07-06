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
     * to "unauthorized url" setting.
     *
     * @return void
     */
    public function test_setting_private_site_with_unauthorized_redirect_enabled()
    {
        setting()->set('private_site', 1);
        setting()->set('unauthorized_redirect', 'https://urlhum.com');
        $this->get('/')
            ->assertStatus(302)
            ->assertRedirect('https://urlhum.com');
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

    /**
     * Visit Homepage with latest URLs widget disabled as anonymous.
     *
     * @return void
     */
    public function test_show_homepage_public_urls_widget_disabled()
    {
        setting()->set('show_guests_latests_urls', 0);

        $this->post('/url', ['url' => 'https://youtube.com/testingifthisisvisible',
            'customUrl' => 'youtube', 'privateUrl' => 0, 'hideUrlStats' => 0, ]);

        $this->get('/')
            ->assertDontSee('https://youtube.com/testingifthisisvisible');
    }

    /**
     * Visit Homepage with Referers enabled as admin, check if visibile: should.
     *
     * @return void
     */
    public function test_show_homepage_referers_widget_enabled()
    {
        setting()->set('disable_referers', 0);

        $admin = User::find(1);
        $this->actingAs($admin)
            ->get('/')
            ->assertSee('Best referers');
    }

    /**
     * Visit Homepage with Referers enabled as admin, check if visibile: shouldn't.
     *
     * @return void
     */
    public function test_show_homepage_referers_widget_disabled()
    {
        setting()->set('disable_referers', 1);

        $admin = User::find(1);
        $this->actingAs($admin)
            ->get('/')
            ->assertDontSee('Best referers');
    }
}

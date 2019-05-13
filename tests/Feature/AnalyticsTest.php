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
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class AnalyticsTest extends TestCase
{
    use DatabaseTransactions;

    /**
     * Simply get the analytics of a just created Short URL.
     *
     * @return void
     */
    public function test_get_sample_url_analytics()
    {
        $this->post('/url', ['url' => 'https://stackoverflow.com', 'customUrl' => 'stack', 'privateUrl' => 0, 'hideUrlStats' => 0]);
        $this->get('/stack+')
            ->assertStatus(200);
    }

    /**
     * A logged-in user created Short URL with 'hide url stats' enabled
     * So, a guest user visited the analytics and received 403.
     *
     * @return void
     */
    public function test_get_as_guest_hidden_url_analytics()
    {
        $user = factory(User::class)->create();

        $this->actingAs($user)
            ->post('/url', ['url' => 'https://youtube.com', 'customUrl' => 'youtube', 'privateUrl' => 0, 'hideUrlStats' => 1]);

        Auth::logout();

        $this->get('/youtube+')
                ->assertStatus(403);
    }

    /**
     * A logged-in user created Short URL with 'hide url stats' enabled
     * so, an he visited the Short URL analytics and received 200.
     *
     * @return void
     */
    public function test_get_as_owner_hidden_url_analytics()
    {
        $user = factory(User::class)->create();

        $this->actingAs($user)
            ->post('/url', ['url' => 'https://youtube.com', 'customUrl' => 'youtube', 'privateUrl' => 0, 'hideUrlStats' => 1]);

        $this->actingAs($user)
            ->get('/youtube+')
            ->assertStatus(200);
    }

    /**
     * A logged-in user created Short URL with 'hide url stats' enabled
     * so, an admin visited the analytics and received 200, because
     * admins can see an URL analytics even if its stats are hidden.
     *
     * @return void
     */
    public function test_get_as_admin_hidden_url_analytics()
    {
        $user = factory(User::class)->create();

        $this->actingAs($user)
            ->post('/url', ['url' => 'https://youtube.com', 'customUrl' => 'youtube', 'privateUrl' => 0, 'hideUrlStats' => 1]);

        Auth::logout();

        $admin = User::find(1);

        $this->actingAs($admin)
            ->get('/youtube+')
            ->assertStatus(200);
    }

    /**
     * Admin that visits the referers page, with referers enabled. Expects 200.
     *
     * @return void
     */
    public function test_referers_enabled_views_as_admin()
    {
        setting()->set('disable_referers', 0);
        $admin = User::find(1);
        $this->actingAs($admin)
            ->get('/url/referers')
            ->assertStatus(200);
    }

    /**
     * Admin that visits the referer page, with referers disabled. Expects 404.
     *
     * @return void
     */
    public function test_referers_disabled_view_as_admin()
    {
        setting()->set('disable_referers', 1);
        $admin = User::find(1);
        $this->actingAs($admin)
            ->get('/url/referers')
            ->assertStatus(404);
    }

    /**
     * User that visits the referer page, expect 404.
     *
     * @return void
     */
    public function test_referers_view_as_user()
    {
        $user = factory(User::class)->create();
        $this->actingAs($user)
            ->get('/url/referers')
            ->assertStatus(404);
    }
}

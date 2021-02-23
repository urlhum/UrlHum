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
use Illuminate\Support\Facades\Artisan;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;

/**
 * @method post(string $string, array $array)
 * @method get(string $string)
 */
class AnalyticsTest extends TestCase
{
    use WithFaker;
    use DatabaseTransactions;

    public function setUp(): void
    {
        parent::setUp();
        Artisan::call('settings:set');
    }

    /**
     * Simply get the analytics of a just created Short URL.
     *
     * @return void
     */
    public function test_get_sample_url_analytics(): void
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
    public function test_get_as_guest_hidden_url_analytics(): void
    {
        $user = User::factory()->create();

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
    public function test_get_as_owner_hidden_url_analytics(): void
    {
        $user = User::factory()->create();

        $url = $this->faker->url;
        $shortUrl = $this->faker->slug(1, false);
        $this->actingAs($user)
            ->post('/url', ['url' => $url, 'customUrl' => $shortUrl, 'privateUrl' => 0, 'hideUrlStats' => 1]);

        $this->actingAs($user)
            ->get("/$shortUrl+")
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
        $user = User::factory()->create();

        $this->actingAs($user)
            ->post('/url', ['url' => 'https://youtube.com', 'customUrl' => 'youtube', 'privateUrl' => 0, 'hideUrlStats' => 1]);

        Auth::logout();

        $admin =  User::factory()->create(['role' => 'admin']);

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
        $admin =  User::factory()->create(['role' => 'admin']);
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
        $admin =  User::factory()->create(['role' => 'admin']);
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
        $user = User::factory()->create();
        $this->actingAs($user)
            ->get('/url/referers')
            ->assertStatus(404);
    }
}

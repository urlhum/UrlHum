<?php

/*
 * UrlHum (https://urlhum.com)
 *
 * @link      https://github.com/urlhum/UrlHum
 * @copyright Copyright (c) 2019 Christian la Forgia
 * @license   https://github.com/urlhum/UrlHum/blob/master/LICENSE.md (MIT License)
 */

namespace Tests\Feature;

use App\Url;
use App\User;
use Tests\TestCase;
use Illuminate\Support\Facades\Storage;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ShortUrlTest extends TestCase
{
    use DatabaseTransactions;

    public function getUrlId($url)
    {
        return Url::where('short_url', $url)
            ->select('id')
            ->first()
            ->id;
    }

    /**
     * Try to edit a Short URL as an anonymous user. Should fail.
     *
     * @return void
     */
    public function test_edit_short_url_as_anonymous_user()
    {
        $this->post('/url', ['url' => 'https://instagram.com', 'customUrl' => 'inst', 'privateUrl' => 0, 'hideUrlStats' => 0]);

        $this->get('/url/inst')
            ->assertStatus(403);

        $this->put('/url/inst', ['url' => 'https://aaa.com'])
            ->assertStatus(403);
    }

    /**
     * Try to edit a Short URL as an owner. Should succeed.
     *
     * @return void
     */
    public function test_edit_short_url_as_owner()
    {
        $user = factory(User::class)->create();

        $this->actingAs($user)
            ->post('/url', ['url' => 'https://urlhum.com', 'customUrl' => 'inst', 'privateUrl' => 0, 'hideUrlStats' => 0]);

        $this->actingAs($user)
            ->get('/url/inst')
            ->assertStatus(200);

        $this->actingAs($user)
            ->put('/url/inst', ['url' => 'https://aaa.com', 'privateUrl' => 0, 'hideUrlStats' => 0])
            ->assertStatus(302);
    }

    /**
     * If users set the Short Url as hidden from public URLs page,
     * the list shouldn't have the Short URL.
     *
     * @return void
     */
    public function test_short_hidden_from_public_url_page()
    {
        $data = [
            'url' => 'https://reddit.com',
            'customUrl' => 'reddit',
            'privateUrl' => 1,
            'hideUrlStats' => 0,
        ];

        $this->post('/url', $data)
            ->assertStatus(302)
            ->assertSessionHas('success');

        $urls = Url::getLatestPublicUrls();
        $url = $urls[0]->short_url ?? null;

        $this->assertNotEquals($url, $data['customUrl']);
    }

    /**
     * Delete Short URL as Owner, should succeed.
     *
     * @return void
     */
    public function test_delete_short_url_as_owner()
    {
        $user = factory(User::class)->create();

        $this->actingAs($user)
            ->post('/url', ['url' => 'https://urlhum.com', 'customUrl' => 'inst', 'privateUrl' => 0, 'hideUrlStats' => 0]);

        $this->actingAs($user)
            ->delete('/url/inst')
            ->assertStatus(302);

        $this->assertNull(Url::find('inst'));
    }

    /**
     * Delete Short URL as Anonymous user. Should fail.
     *
     * @return void
     */
    public function test_delete_short_url_as_anonymous()
    {
        $user = factory(User::class)->create();

        $this->actingAs($user)
            ->post('/url', ['url' => 'https://urlhum.com', 'customUrl' => 'inst', 'privateUrl' => 0, 'hideUrlStats' => 0]);

        \Auth::logout();

        $this->delete('url/inst')
            ->assertStatus(403);

        $this->assertNotNull(Url::find('inst'));
    }

    /**
     * Delete Short URL as Admin. Should succeed.
     *
     * @return void
     */
    public function test_delete_short_url_as_admin()
    {
        $user = factory(User::class)->create();

        $this->actingAs($user)
            ->post('/url', ['url' => 'https://urlhum.com', 'customUrl' => 'inst', 'privateUrl' => 0, 'hideUrlStats' => 0]);

        \Auth::logout();

        $admin = User::find(1);

        $this->actingAs($admin)
            ->delete('url/inst')
            ->assertStatus(302);

        $this->assertNull(Url::find('inst'));
    }

    /**
     * Show the user his own short URLs page.
     *
     * @return void
     */
    public function test_show_my_urls_page()
    {
        $user = factory(User::class)->create();
        $this->actingAs($user)
            ->get('/url/my')
            ->assertStatus(200);
    }

    /**
     * Show to guest user his own short URLs page (should return 302).
     *
     * @return void
     */
    public function test_show_my_urls_page_guest()
    {
        $this->get('/url/my')
            ->assertStatus(302);
    }

    /**
     * Show URLs List page to admin. Should return 200.
     *
     * @return void
     */
    public function test_show_urls_list_page_admin()
    {
        $admin = User::find(1);
        $this->actingAs($admin)
            ->get('/url/list')
                ->assertStatus(200);
    }

    /**
     * Show URLs List page to user. Should fail to 404.
     *
     * @return void
     */
    public function test_show_urls_list_page_user()
    {
        $user = factory(User::class)->create();
        $this->actingAs($user)
            ->get('/url/list')
            ->assertStatus(404);
    }

    /**
     * AJAX-load of the URLs list for admin.
     *
     * @return void
     */
    public function test_show_urls_list_ajax_admin()
    {
        $admin = User::find(1);
        $this->actingAs($admin)
            ->get('/url/list-load')
            ->assertStatus(200);
    }

    /**
     * View the public URLs page as guest, with option disabled.
     *
     * @return void
     */
    public function test_view_public_urls_as_guest_option_disabled()
    {
        setting()->set('show_guests_latests_urls', 0);
        $this->get('/url/public')
            ->assertStatus(404);
    }

    /**
     * View public URLs page as guest, with option enabled.
     *
     * @return void
     */
    public function test_view_public_urls_as_guest_option_enabled()
    {
        setting()->set('show_guests_latests_urls', 1);
        $this->get('/url/public')
            ->assertStatus(200);
    }

    /**
     * Create .svg file when when that url is hit.
     *
     * @return void
     */
    public function test_svg_is_created_on_load()
    {
        Storage::fake();

        $this->post('/url', ['url' => 'https://instagram.com', 'customUrl' => 'inst', 'privateUrl' => 0, 'hideUrlStats' => 0]);

        $this->get('/inst.svg')->assertStatus(200);

        Storage::assertExists('qrcodes/inst.svg');
    }
}

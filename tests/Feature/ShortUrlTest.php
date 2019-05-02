<?php
/**
 * UrlHum (https://urlhum.com)
 *
 * @link      https://github.com/urlhum/UrlHum
 * @copyright Copyright (c) 2019 Christian la Forgia
 * @license   https://github.com/urlhum/UrlHum/blob/master/LICENSE.md (MIT License)
 */

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use App\User;
use App\Url;

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
     * Try to edit a Short URL as an anonymous user. Should fail
     *
     * @return void
     */
    public function test_edit_short_url_as_anonymous_user()
    {
        $this->post('/url', ['url' => 'https://instagram.com', 'customUrl' => 'inst', 'privateUrl' => 0, 'hideUrlStats' => 0]);

        $this->get('/url/inst')
            ->assertStatus(403);

       $urlId = $this->getUrlid('inst');

        $this->put("/url/$urlId", ['destinationUrl' => 'https://aaa.com'])
            ->assertStatus(403);
    }

    /**
     * Try to edit a Short URL as an owner. Should succeed
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

        $urlId = $this->getUrlId('inst');

        $this->actingAs($user)
            ->put("/url/$urlId", ['destinationUrl' => 'https://aaa.com'])
            ->assertStatus(302);
    }


    /**
     * If users set the Short Url as hidden from public URLs page,
     * the list shouldn't have the Short URL
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
        $url = $urls[0]->short_url ?? NULL;

        $this->assertNotEquals($url, $data['customUrl']);
    }

}

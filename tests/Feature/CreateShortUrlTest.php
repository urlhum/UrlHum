<?php

/*
 * UrlHum (https://urlhum.com)
 *
 * @link      https://github.com/urlhum/UrlHum
 * @copyright Copyright (c) 2019 Christian la Forgia
 * @license   https://github.com/urlhum/UrlHum/blob/master/LICENSE.md (MIT License)
 */

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class CreateShortUrlTest extends TestCase
{
    use WithFaker;
    use DatabaseTransactions;

    /**
     * Test to check if a Short Url with an automatically generated URL works.
     *
     * @return void
     */
    public function test_normal_short_url()
    {
        $data = [
            'url' => 'https://google.com',
            'customUrl' => null,
            'privateUrl' => 0,
            'hideUrlStats' => 0,
        ];

        $response = $this->json('POST', '/url', $data);

        $this->assertEquals(302, $response->status());

        $response->assertSessionHas('success');
    }

    /**
     * Check if the long URL typed is valid or not. Example with a mistype http.
     *
     * @return void
     */
    public function test_invalid_long_url()
    {
        $data = [
            'url' => 'htp://facebook.com',
            'customUrl' => null,
            'privateUrl' => 0,
            'hideUrlStats' => 0,
        ];

        $this->post('/url', $data)
        ->assertStatus(302)
        ->assertSessionHasErrors(['url']);
    }

    /**
     * Test for a custom, valid, short URL.
     *
     * @return void
     */
    public function test_short_custom_url_success()
    {
        $data = [
            'url' => 'https://reddit.com',
            'customUrl' => 'example-custom',
            'privateUrl' => 0,
            'hideUrlStats' => 0,
        ];

        $this->post('/url', $data)
            ->assertStatus(302)
            ->assertSessionHas('success');
    }

    /**
     * Test with a Custom URL too short.
     *
     * @return void
     */
    public function test_short_custom_url_error_too_short()
    {
        $data = [
            'url' => 'https://reddit.com',
            'customUrl' => 'aa',
            'privateUrl' => 0,
            'hideUrlStats' => 0,
        ];

        $this->post('/url', $data)
            ->assertStatus(302)
            ->assertSessionHasErrors('customUrl');
    }

    /**
     * If system setting is set to disallow anonymous URLs, guests
     * users shouldn't be allowed to create Short URLs.
     *
     * @return void
     */
    public function test_anonymous_option_off_guest_user()
    {
        setting()->set('anonymous_urls', 0);

        $data = [
            'url' => 'https://google.com',
            'customUrl' => '',
        ];

        $this->post('/url', $data)
            ->assertStatus(403);
    }

    /**
     * If a custom URL is existing, verify the response.
     *
     * @return void
     */
    public function test_existing_custom_url()
    {
        $data = [
            'url' => 'https://reddit.com',
            'customUrl' => 'reddit',
            'privateUrl' => 0,
            'hideUrlStats' => 0,
        ];

        $this->post('/url', $data)
            ->assertStatus(302);

        $this->post('/url', $data)
            ->assertSessionHas('existingCustom');
    }

    /**
     * If a long url exists, verify the response.
     *
     * @return void
     */
    public function test_existing_long_url()
    {
        $data = [
            'url' => 'https://reddit.com',
            'customUrl' => null,
            'privateUrl' => 0,
            'hideUrlStats' => 0,
        ];

        $this->post('/url', $data)
            ->assertStatus(302);

        $this->post('/url', $data)
            ->assertSessionHas('existing');
    }

    /**
     * Ajax-check existing Custom URL. Should return 409 (existing).
     *
     * @return void
     */
    public function test_ajax_existing_custom_url()
    {
        $data = [
            'url' => 'https://reddit.com',
            'customUrl' => 'reddit',
            'privateUrl' => 0,
            'hideUrlStats' => 0,
        ];
        $this->post('/url', $data)
            ->assertStatus(302);

        $this->post('/url/short', ['input' => 'reddit'])
            ->assertStatus(409);
    }

    /**
     * Ajax-check not-existing Custom URL. Should return 200 (ok).
     *
     * @return void
     */
    public function test_ajax_not_existing_custom_url()
    {
        $data = [
            'url' => 'https://reddit.com',
            'customUrl' => 'reddit',
            'privateUrl' => 0,
            'hideUrlStats' => 0,
        ];
        $this->post('/url', $data)
            ->assertStatus(302);

        $this->post('/url/short', ['input' => 'test'])
            ->assertStatus(200);
    }
}

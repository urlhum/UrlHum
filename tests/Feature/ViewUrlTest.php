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
use App\Url;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use App\ViewUrl;

class ViewUrlTest extends TestCase
{
    use DatabaseTransactions;

    /**
     * Test if viewing an URL with a fresh and not-saved IP address will result as a real click
     *
     * @return void
     */
    public function url_view_fresh_ip_address()
    {

        $ip = '216.58.205.205';

        $this->post('/url', ['url' => 'https://reddit.com', 'customUrl' => 'inst', 'privateUrl' => 0, 'hideUrlStats' => 0]);

        $this->get('/inst', ['REMOTE_ADDR' => $ip])
                ->assertStatus(302);

        $realClick = ViewUrl::select('real_click')
            ->where('short_url', 'inst')
            ->orderBy('id', 'desc')
            ->first()
            ->real_click;

        $this->assertEquals(true, $realClick);

    }

    /**
     * Test if viewing an URL with a repeated IP address will result as a click
     *
     * @return void
     */
    public function test_url_view_repeat_ip_address()
    {

        $ip = '216.58.205.204';

        $this->post('/url', ['url' => 'https://instagram.com', 'customUrl' => 'inst', 'privateUrl' => 0, 'hideUrlStats' => 0]);

        $this->get('/inst', ['REMOTE_ADDR' => $ip])
            ->assertStatus(302);

        $this->get('/inst', ['REMOTE_ADDR' => $ip])
            ->assertStatus(302);

        $click = ViewUrl::select('click')
            ->where('short_url', 'inst')
            ->orderBy('id', 'desc')
            ->first()
            ->click;

        $this->assertEquals(true, $click);
    }

    /**
     * If hash ip option is enabled, let's verify if the IP gets hashed
     *
     * @return void
     */
    public function test_option_ip_hash_enabled_verify_if_ip_hashed()
    {

        $ip = "216.58.205.205";
        setting()->set('hash_ip', 1);

        $this->post('/url', ['url' => 'https://google.com', 'customUrl' => 'inst', 'privateUrl' => 0, 'hideUrlStats' => 0]);

        $this->get('/inst', ['REMOTE_ADDR' => $ip])
            ->assertStatus(302);

        $hashedIp = ViewUrl::select('ip_address')
            ->orderBy('id', 'desc')
            ->first()
            ->ip_address;
        
        $this->assertEquals(hash('sha1', $ip), $hashedIp);
    }

    /**
     * Check if Referer gets saved after an User clicks a Short URL
     *
     * @return void
     */
    public function test_referer_is_saved()
    {
        $ip =  "216.58.205.205";
        $referer = "https://github.com/urlhum";

        $this->post('/url', ['url' => 'https://google.com', 'customUrl' => 'inst', 'privateUrl' => 0, 'hideUrlStats' => 0]);

        $this->get('/inst', ['REMOTE_ADDR' => $ip, 'HTTP_REFERER' => $referer])
            ->assertStatus(302);

        $check = ViewUrl::select('referer')
            ->orderBy('id', 'desc')
            ->first()
            ->referer;

        $this->assertEquals($referer, $check);
    }
}

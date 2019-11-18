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
use App\ClickUrl;
use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ClickUrlTest extends TestCase
{
    use DatabaseTransactions;

    /**
     * Test if viewing an URL with a fresh and not-saved IP address will result as a real click.
     *
     * @return void
     */
    public function url_view_fresh_ip_address()
    {
        $ip = '216.58.205.205';

        $this->post('/url', ['url' => 'https://reddit.com', 'customUrl' => 'inst', 'privateUrl' => 0, 'hideUrlStats' => 0]);

        $this->get('/inst', ['REMOTE_ADDR' => $ip])
                ->assertStatus(302);

        $realClick = ClickUrl::select('real_click')
            ->where('short_url', 'inst')
            ->orderBy('id', 'desc')
            ->first()
            ->real_click;

        $this->assertEquals(true, $realClick);
    }

    /**
     * Test if viewing an URL with a repeated IP address will result as a click.
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

        $click = ClickUrl::select('click')
            ->where('short_url', 'inst')
            ->orderBy('id', 'desc')
            ->first()
            ->click;

        $this->assertEquals(true, $click);
    }

    /**
     * If hash ip option is enabled, let's verify if the IP gets hashed.
     *
     * @return void
     */
    public function test_option_ip_hash_enabled_verify_if_ip_hashed()
    {
        $ip = '216.58.205.205';
        setting()->set('hash_ip', 1);

        $this->post('/url', ['url' => 'https://google.com', 'customUrl' => 'inst', 'privateUrl' => 0, 'hideUrlStats' => 0]);

        $this->get('/inst', ['REMOTE_ADDR' => $ip])
            ->assertStatus(302);

        $hashedIp = ClickUrl::select('ip_address')
            ->orderBy('id', 'desc')
            ->first()
            ->ip_address;

        $this->assertEquals(hash('sha1', $ip), $hashedIp);
    }

    /**
     * Check if Referer gets saved after an User clicks a Short URL.
     *
     * @return void
     */
    public function test_referer_is_saved()
    {
        setting()->set('disable_referers', 0);

        $ip = '216.58.205.205';
        $referer = 'https://github.com/urlhum';

        $this->post('/url', ['url' => 'https://google.com', 'customUrl' => 'inst', 'privateUrl' => 0, 'hideUrlStats' => 0]);

        $this->get('/inst', ['REMOTE_ADDR' => $ip, 'HTTP_REFERER' => $referer])
            ->assertStatus(302);

        $check = ClickUrl::select('referer')
            ->orderBy('id', 'desc')
            ->first()
            ->referer;

        $this->assertEquals($referer, $check);
    }

    /**
     * Disable referers setting is enabled, so verify if the new view data doesn't contain the referer.
     *
     * @return void
     */
    public function test_disable_referer_setting_enabled_verify_view_doesnt_contain_it()
    {
        setting()->set('disable_referers', 1);

        $this->post('/url', ['url' => 'https://stackoverflow.com', 'customUrl' => 'stack', 'privateUrl' => 0, 'hideUrlStats' => 0])
            ->assertStatus(302);

        $this->withHeader('HTTP_REFERER', 'https://google.com')
            ->get('/stack')
            ->assertStatus(302);

        $referer = ClickUrl::where('short_url', 'stack')
            ->first()
            ->referer;

        $this->assertNull($referer);
    }

    /**
     * Visit a non-existing Short URL. Return 404.
     *
     * @return void
     */
    public function test_visit_non_existing_url()
    {
        $this->get('/test')
            ->assertStatus(404);
    }

    /**
     * Visit a short URL with anonymous and hash disabled
     * Check if actually IP address is not anonymized.
     *
     * @return void
     */
    public function test_visit_url_hash_and_anonymous_ip_disabled()
    {
        $ip = '192.168.1.1';
        setting()->set('anonymize_ip', 0);
        setting()->set('hash_ip', 0);
        $this->post('/url', ['url' => 'https://stackoverflow.com', 'customUrl' => 'stack', 'privateUrl' => 0, 'hideUrlStats' => 0])
            ->assertStatus(302);

        $this->get('stack', ['REMOTE_ADDR' => $ip]);

        $viewIp = \DB::table('clicks')->latest()->first()->ip_address;

        $this->assertEquals($ip, $viewIp);
    }

    /**
     * Visit a short URL with hashing disabled and and
     * anonymization enabled. Should be a click (not real)
     * in any case, because this is the normal behavior.
     *
     * @return void
     */
    public function test_visit_url_hash_disabled_anonymous_enabled()
    {
        $ip = '192.161.1.1';
        setting()->set('anonymize_ip', 1);
        setting()->set('hash_ip', 0);
        $this->post('/url', ['url' => 'https://stackoverflow.com', 'customUrl' => 'stack', 'privateUrl' => 0, 'hideUrlStats' => 0])
            ->assertStatus(302);

        $this->get('stack', ['REMOTE_ADDR' => $ip]);

        $click = \DB::table('clicks')->latest()->first()->click;
        $this->assertEquals(1, $click);
    }
}

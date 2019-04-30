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
    public function test_url_view_fresh_ip_address()
    {
        $ip = '216.58.205.205';

        Url::createUrl('https://instagram.com', 'inst', 0, 0);

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

        Url::createUrl('https://instagram.com', 'inst', 0, 0);

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
}

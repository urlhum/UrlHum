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

class ProfileTest extends TestCase
{
    use DatabaseTransactions;

    /**
     * Get the "my profile" (account) page as authenticated user.
     *
     * @return void
     */
    public function test_get_my_profile()
    {
        $user = factory(User::class)->create();
        $this->actingAs($user)
            ->get('/profile')
            ->assertStatus(200);
    }

    /**
     * Get the account page as anonymous user. Should redirect.
     *
     * @return void
     */
    public function test_get_my_profile_as_anonymouse()
    {
        $this->get('/profile')
            ->assertStatus(302);
    }

    /**
     * Update the user profile, as user. Should succeed.
     *
     * @return void
     */
    public function test_update_profile_as_user()
    {
        $user = factory(User::class)->create();
        $this->actingAs($user)
            ->put('/profile', ['name' => 'Test', 'email' => 'test@urlhum.com'])
            ->assertStatus(302);

        $this->assertEquals('Test', $user->name);
        $this->assertEquals('test@urlhum.com', $user->email);
    }

    /**
     * Visit the verified page, which is shown after email verification.
     *
     * @return void
     */
    public function test_visit_verified_page()
    {
        $user = factory(User::class)->create();
        $this->actingAs($user)
            ->get('/profile/verified')
            ->assertStatus(200);
    }

    /**
     * Visit the verified page as anonymous, should redirect.
     *
     * @return void
     */
    public function test_visit_verified_page_as_guest()
    {
        $this->get('/profile/verified')
            ->assertStatus(302);
    }
}

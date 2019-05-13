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

class UserTest extends TestCase
{
    use DatabaseTransactions;

    /**
     * View the users list page, as admin.
     *
     * @return void
     */
    public function test_get_index_page()
    {
        $this->actingAs(User::find(1))
            ->get('/user')
            ->assertStatus(200);
    }

    /**
     * View the form for new user creation, as admin.
     *
     * @return void
     */
    public function test_get_user_create_page()
    {
        $this->actingAs(User::find(1))
            ->get('/user/create')
            ->assertStatus(200);
    }

    /**
     * Create an user using the form. Post request, as admin.
     *
     * @return void
     */
    public function test_post_create_user()
    {
        $this->actingAs(User::find(1))
            ->post('/user', ['name' => 'Testing', 'email' => 'test@urlhum.com', 'password' => 'secret123', 'password_confirmation' => 'secret123'])
            ->assertStatus(302);

        $user = User::where('email', 'test@urlhum.com')->first();
        $this->assertEquals('test@urlhum.com', $user->email);
    }

    /**
     * Show the edit user form.
     *
     * @return void
     */
    public function test_get_edit_user()
    {
        $user = factory(User::class)->create();
        $userId = $user->id;
        $this->actingAs(User::find(1))
            ->get('/user/'.$userId.'/edit')
            ->assertStatus(200);
    }

    /**
     * Update an user as admin.
     *
     * @return void
     */
    public function test_update_user()
    {
        $user = factory(User::class)->create();
        $userId = $user->id;
        $this->actingAs(User::find(1))
            ->put('/user/'.$userId, ['name' => 'Testing', 'email' => 'hello@urlhum.com', 'password' => 'newsecret', 'password_confirmation' => 'newsecret'])
            ->assertStatus(302);

        $edited = User::find($userId);
        $this->assertEquals('hello@urlhum.com', $edited->email);
        $this->assertEquals('Testing', $edited->name);
    }

    /**
     * Delete an user as admin.
     *
     * @return void
     */
    public function test_delete_user()
    {
        $user = factory(User::class)->create();
        $userId = $user->id;
        $this->actingAs(User::find(1))
            ->delete('/user/'.$userId)
            ->assertStatus(302);

        $deleted = User::find($userId);

        $this->assertNull($deleted);
    }
}

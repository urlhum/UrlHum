<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    // Declaring void return type because
    public function setUp(): void
    {
        parent::setUp();
        config()->set('honeypot.enabled', false);
    }
}

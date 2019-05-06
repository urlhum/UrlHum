<?php

use App\User;

function isAdmin()
{
    return User::isAdmin();
}

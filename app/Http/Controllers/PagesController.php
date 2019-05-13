<?php

/*
 * UrlHum (https://urlhum.com)
 *
 * @link      https://github.com/urlhum/UrlHum
 * @copyright Copyright (c) 2019 Christian la Forgia
 * @license   https://github.com/urlhum/UrlHum/blob/master/LICENSE.md (MIT License)
 */

namespace App\Http\Controllers;

/**
 * Class PagesController
 * Show Privacy Policy and TOS to users.
 *
 * @author Christian la Forgia <christian@optiroot.it>
 */
class PagesController extends Controller
{
    /**
     * Show the privacy page to users.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function privacy()
    {
        if (setting('enable_privacy_policy')) {
            return view('pages.privacy-policy');
        }

        return abort(404);
    }

    /**
     * Show the TOS page to users.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function tos()
    {
        if (setting('enable_terms_of_use')) {
            return view('pages.terms-of-use');
        }

        return abort(404);
    }
}

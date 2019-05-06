<?php
/**
 * UrlHum (https://urlhum.com).
 *
 * @link      https://github.com/urlhum/UrlHum
 * @copyright Copyright (c) 2019 Christian la Forgia
 * @license   https://github.com/urlhum/UrlHum/blob/master/LICENSE.md (MIT License)
 */

namespace App\Http\Controllers;

use App\Url;
use App\User;
use App\ViewUrl;
use App\Analytics;
use Illuminate\Support\Facades\Auth;

/**
 * Class HomeController.
 */
class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        if (setting('private_site')) {
            $this->middleware('auth');
        }
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        // We initialize the anonymous var to verify later if the user is anonymous or not
        $anonymous = false;

        if (! Auth::check()) {
            $anonymous = true;
        }

        $anonymousUrls = setting('anonymous_urls');

        // We null the referers Widget to enable it just if the user is an admin
        $referersWidget = null;

        $latestsPublicUrls = Url::getLatestPublicUrlsWidget();

        if (! setting('show_guests_latests_urls') && $anonymous) {
            $latestsPublicUrls = null;
        }

        if (! $anonymous && isAdmin() && ! setting('disable_referers')) {
            $referersWidget = ViewUrl::getReferersWidget();
        }

        $data = [
            'publicUrls' => $latestsPublicUrls,
            'referers' => $referersWidget,
            'urlsCount' => Url::count(),
            'usersCount' => User::count(),
            'referersCount' => Analytics::getReferersCount(),
            'anonymous' => $anonymous,
        ];

        return view('dashboard', [
            'data' => $data,
            'anonymous_urls' => $anonymousUrls,
        ]);
    }
}

<?php
/**
 * UrlHum (https://urlhum.com)
 *
 * @link      https://github.com/urlhum/UrlHum
 * @copyright Copyright (c) 2019 Christian la Forgia
 * @license   https://github.com/urlhum/UrlHum/blob/master/LICENSE.md (MIT License)
 */

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Url;
use App\ViewUrl;
use App\User;
use App\Services\Analytics;

/**
 * Class HomeController
 * @package App\Http\Controllers
 */
class HomeController extends Controller
{
    protected $analytics;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Analytics $analytics)
    {
        if (setting('private_site')) {
            $this->middleware('auth');
        }
        $this->analytics = $analytics;
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

        if (!Auth::check()) {
           $anonymous = true;
        }

        $anonymousUrls = setting('anonymous_urls');

        // We null the referers Widget to enable it just if the user is an admin
        $referersWidget = NULL;

        $publicUrls = Url::getLatestPublicUrlsWidget();

        if(!setting('show_guests_latests_urls') && $anonymous) {
            $publicUrls = NULL;
        }

        if (!$anonymous && isAdmin() && !setting('disable_referers')) {
            $referersWidget = ViewUrl::getReferersWidget();
        }

        $data = [
            'publicUrls' => $publicUrls,
            'referers' => $referersWidget,
            'urlsCount' => Url::count(),
            'usersCount' => User::count(),
            'referersCount' => $this->analytics->getReferersCount(),
            'anonymous' => $anonymous
        ];

        return view('dashboard', [
            'data' => $data,
            'anonymous_urls' => $anonymousUrls,
        ]);

    }

}

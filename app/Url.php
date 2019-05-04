<?php
/**
 * UrlHum (https://urlhum.com)
 *
 * @link      https://github.com/urlhum/UrlHum
 * @copyright Copyright (c) 2019 Christian la Forgia
 * @license   https://github.com/urlhum/UrlHum/blob/master/LICENSE.md (MIT License)
 */

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Services\UrlService;

/**
 * Model for the Url table, used for advanced functions too
 *
 * Class Url
 * @package App
 */
class Url extends Model
{
    /**
     * @var string
     */
    protected $table = "urls";


    /**
     * Create a Short URL based on the given parameters
     *
     * @param $long_url
     * @param $short_url
     * @param $privateUrl
     * @param $hideUrlStats
     */
    public static function createUrl($long_url, $short_url, $privateUrl, $hideUrlStats)
    {
        if (Auth::check()) {
            $user_id = Auth::user()->id;
        } else {
            $user_id = NULL;
        }

        $url = new Url;
        $url->long_url = $long_url;
        $url->short_url = $short_url;
        $url->user_id = $user_id;
        $url->private = $privateUrl;
        $url->hide_stats = $hideUrlStats;
        $url->save();
    }


    /**
     * Load all URLs to show them in a table
     *
     * @return \Illuminate\Support\Collection
     */
    public static function getAllUrlsList()
    {
        $result = DB::table('urls')
            ->select('urls.id', \DB::raw('IFNULL(users.email, \'Anonymous\') AS email'), 'urls.short_url', 'urls.long_url', 'urls.created_at')
            ->leftJoin('users', 'urls.user_id', '=', 'users.id')
            ->get();

        return $result;
    }

    /**
     * Get the URL data to allow user to edit it
     *
     * @param $url
     * @return Model|\Illuminate\Database\Query\Builder|null|object
     */
    public static function getUrlForEdit($url)
    {
        $data = DB::table('urls')
            ->select(\DB::raw('urls.id AS urlid'), 'users.name', \DB::raw('users.id AS userid'), \DB::raw('IFNULL(users.email, \'Anonymous\') AS email'), 'urls.short_url', 'urls.long_url', 'urls.created_at', 'urls.updated_at', 'urls.private', 'urls.hide_stats')
            ->leftJoin('users', 'urls.user_id', '=', 'users.id')
            ->where('urls.short_url', $url)
            ->first();

        return $data;


    }


    /**
     * Retrieve the latest URLs that are public
     *
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public static function getLatestPublicUrls()
    {
        $urls = DB::table('urls')
            ->select('urls.short_url', 'urls.long_url', \DB::raw('count(views.short_url) as clicks'), 'urls.created_at')
            ->leftJoin('views', 'urls.short_url', '=', 'views.short_url')
            ->groupBy('urls.short_url', 'urls.long_url', 'urls.created_at')
            ->orderBy('urls.created_at', 'DESC')
            ->where('private', '=', 0)
            ->paginate('20');

        return $urls;
    }


    /**
     * Same as above, but with "limit" instead of "paginate".
     * This is for a widget
     *
     * @return \Illuminate\Support\Collection
     */
    public static function getLatestPublicUrlsWidget()
    {
      $urls = DB::table('urls')
          ->select('urls.short_url', 'urls.long_url', \DB::raw('count(views.short_url) as clicks'), 'urls.created_at')
          ->leftJoin('views', 'urls.short_url', '=', 'views.short_url')
          ->groupBy('urls.short_url', 'urls.long_url', 'urls.created_at')
          ->orderBy('urls.created_at', 'DESC')
          ->where('private', '=', 0)
          ->limit(8)
      ->get();

      return $urls;
    }

    public function clicks(){
        return $this->hasMany('App\Analytics', 'short_url','short_url');
    }

}

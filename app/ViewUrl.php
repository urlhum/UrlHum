<?php

/*
 * UrlHum (https://urlhum.com)
 *
 * @link      https://github.com/urlhum/UrlHum
 * @copyright Copyright (c) 2019 Christian la Forgia
 * @license   https://github.com/urlhum/UrlHum/blob/master/LICENSE.md (MIT License)
 */

namespace App;

use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;

/**
 * Model that saves and loads data when an User visits a Short URL.
 *
 * Class ViewUrl
 */
class ViewUrl extends Model
{
    /**
     * @var string
     */
    protected $table = 'views';
    /**
     * @var array
     */
    protected $fillable = [
        'short_url', 'click', 'real_click', 'country', 'country_full', 'referer', 'ip_address', 'ip_hashed', 'ip_anonymized',
    ];

    /**
     * Store a new View in database.
     *
     * @param $data
     */
    public static function store($data)
    {
        $viewUrl = new self;
        $viewUrl->fill($data);
        $viewUrl->save();
    }

    /**
     * Check if the click is actually real or not, based on the IP and datetime.
     *
     * @param $short_url
     * @param $ip_address
     * @return bool
     */
    public static function realClick($short_url, $ip_address)
    {
        $view = DB::table('views')
            ->where('short_url', $short_url)
            ->where('ip_address', $ip_address)
            ->where('created_at', '>=', Carbon::now()->subDay())
            ->where(function ($query) {
                $query->where(function ($query) {
                    $query->where('ip_hashed', 1)
                        ->where('ip_anonymized', 1);
                })->orWhere(function ($query) {
                    $query->where('ip_hashed', 1)
                        ->where('ip_anonymized', 0);
                })->orWhere(function ($query) {
                    $query->where('ip_hashed', 0)
                        ->where('ip_anonymized', 0);
                });
            })
            ->limit(1)
            ->orderBy('created_at', 'desc')
            ->get();

        return $view->isNotEmpty() ? false : true;
    }

    /**
     * Get the Short URL referers.
     *
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public static function getReferrers()
    {
        $urls = DB::table('views')
            ->select(\DB::raw('IFNULL(referer, \'Direct / Unknown\') AS referer'), \DB::raw('sum(click) as clicks'), \DB::raw('sum(real_click) as real_clicks'))
            ->groupBy('referer')
            ->orderBy('clicks', 'DESC')
            ->paginate(40);

        return $urls;
    }

    /**
     * Same as above, but with "limit" instead of "paginate".
     * This is for a widget.
     *
     * @return \Illuminate\Support\Collection
     */
    public static function referersWidget()
    {
        $urls = DB::table('views')
            ->select(\DB::raw('IFNULL(referer, \'Direct / Unknown\') AS referer'), \DB::raw('sum(click) as clicks'), \DB::raw('sum(real_click) as real_clicks'))
            ->groupBy('referer')
            ->orderBy('clicks', 'DESC')
            ->limit(9)
            ->get();

        return $urls;
    }

    /**
     * When a Short URL is deleted, we delete its analytical data too.
     *
     * @param $url
     */
    public static function deleteUrlsViews($url)
    {
        self::where('short_url', $url)->delete();
    }
}

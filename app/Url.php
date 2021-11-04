<?php

/*
 * UrlHum (https://urlhum.com)
 *
 * @link      https://github.com/urlhum/UrlHum
 * @copyright Copyright (c) 2019 Christian la Forgia
 * @license   https://github.com/urlhum/UrlHum/blob/master/LICENSE.md (MIT License)
 */

namespace App;

use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

/**
 * Model for the Url table, used for advanced functions too.
 *
 * Class Url
 * @method static where(string $string, $custom_url)
 * @method static find($url)
 * @method static withCount(array $array)
 * @method static firstWhere(string $string, int $urlId)
 * @method static whereRaw(string $string, array $array)
 * @property int id
 * @property string short_url
 * @property mixed long_url
 * @property mixed hide_stats
 * @property mixed private
 * @property mixed|null user_id
 */
class Url extends Model
{
    /**
     * @var string
     */
    protected $table = 'urls';

    /**
     * @var bool
     */
    public $incrementing = false;

    /**
     * Create a Short URL based on the given parameters.
     *
     * @param $long_url
     * @param $short_url
     * @param $privateUrl
     * @param $hideUrlStats
     * @return int
     */
    public static function createShortUrl($long_url, $short_url, $privateUrl, $hideUrlStats): int
    {
        $user_id = null;
        if (Auth::check()) {
            $user_id = Auth::user()->id;
        }

        $url = new self;
        $url->long_url = $long_url;
        $url->short_url = $short_url;
        $url->user_id = $user_id;
        $url->private = $privateUrl;
        $url->hide_stats = $hideUrlStats;
        $url->save();

        return (int) DB::getPdo()->lastInsertId();
    }

    public static function assignShortUrlToUrl(int $urlId, string $shortUrl): Url
    {
        $url = self::firstWhere('id', $urlId);
        $url->short_url = $shortUrl;
        $url->save();

        return $url;
    }

    /**
     * Retrieve the latest URLs that are public.
     *
     * @return LengthAwarePaginator
     */
    public static function getLatestPublicUrls(): LengthAwarePaginator
    {
        return DB::table('urls')
            ->select('urls.short_url', 'urls.long_url', \DB::raw('count(clicks.short_url) as clicks'), 'urls.created_at')
            ->leftJoin('clicks', 'urls.short_url', '=', 'clicks.short_url')
            ->groupBy('urls.short_url', 'urls.long_url', 'urls.created_at')
            ->orderBy('urls.created_at', 'DESC')
            ->where('private', '=', 0)
            ->paginate('20');
    }

    /**
     * Same as above, but with "limit" instead of "paginate".
     * This is for a widget.
     *
     * @return Collection
     */
    public static function publicUrlsWidget(): Collection
    {
        return DB::table('urls')
          ->select('urls.short_url', 'urls.long_url', \DB::raw('count(clicks.short_url) as clicks'), 'urls.created_at')
          ->leftJoin('clicks', 'urls.short_url', '=', 'clicks.short_url')
          ->groupBy('urls.short_url', 'urls.long_url', 'urls.created_at')
          ->orderBy('urls.created_at', 'DESC')
          ->where('private', '=', 0)
          ->limit(8)
      ->get();
    }

    /**
     * Load the URLs of the currently logged in user.
     *
     * @return LengthAwarePaginator
     */
    public static function getMyUrls()
    {
        if (! Auth::check()) {
            abort(404);
        }

        $user_id = Auth::user()->id;

        return self::where('user_id', $user_id)->paginate(30);
    }

    /**
     * Url Eloquent hasMany relationship with ViewUrl.
     *
     * @return HasMany
     */
    public function clicks()
    {
        return $this->hasMany(ClickUrl::class, 'short_url', 'short_url');
    }

    /**
     * Eloquent relationship, which tells the user of the Short URL.
     * If the user doesn't exist, email will be "Anonymous".
     *
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id')
            ->withDefault(function ($user) {
                $user->email = 'Anonymous';
            });
    }

    /**
     * @return HasMany
     */
    public function deviceTargets(): HasMany
    {
        return $this->hasMany(DeviceTarget::class, 'short_url_id', 'id');
    }
}

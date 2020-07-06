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
use Illuminate\Database\Eloquent\Model;

/**
 * Model for the deletedURls database table.
 *
 * Class DeletedUrls
 * @author Christian la Forgia <christian@optiroot.it>
 */
class DeletedUrls extends Model
{
    /**
     * @var string
     */
    protected $table = 'deleted_urls';
    /**
     * @var bool
     */
    public $timestamps = false;

    /**
     * Add a deleted URL to the table.
     * Useful to check in future if a URL has already been deleted.
     *
     * @param $url
     */
    public static function add($url)
    {
        $deleted = new self();
        $deleted->url = $url;
        $deleted->deleted_at = Carbon::now()->toDateTimeString();
        $deleted->save();
    }
}

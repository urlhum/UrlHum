<?php

/*
 * UrlHum (https://urlhum.com)
 *
 * @link      https://github.com/urlhum/UrlHum
 * @copyright Copyright (c) 2019 Christian la Forgia
 * @license   https://github.com/urlhum/UrlHum/blob/master/LICENSE.md (MIT License)
 */

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateViewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('views', function (Blueprint $table) {
            $table->increments('id');
            $table->string('short_url', 30);
            $table->tinyInteger('click')->nullable()->default(0);
            $table->tinyInteger('real_click')->nullable()->default(0);
            $table->char('country', 10)->nullable()->default(0);
            $table->string('country_full', 50)->nullable()->default(0);
            $table->string('referer', 300)->nullable()->default(0);
            $table->string('ip_address', 300)->default(0);
            $table->tinyInteger('ip_hashed')->nullable()->default(0);
            $table->tinyInteger('ip_anonymized')->nullable()->default(null);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('views');
    }
}

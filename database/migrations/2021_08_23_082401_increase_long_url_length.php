<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class IncreaseLongUrlLength extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('urls', function ($table) {
            DB::statement('ALTER TABLE `urls` DROP INDEX `urls_long_url_unique`;');
            $table->string('long_url', 2048)->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('urls', function ($table) {
            $table->string('long_url', 255)->change();
        });
    }
}

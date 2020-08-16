<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddBrowserOsToClicksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('clicks', function (Blueprint $table) {
            $table->string('user_agent')->after('country_full');
            $table->string('browser', 30)->after('user_agent')->nullable();
            $table->string('browser_version', 10)->after('browser')->nullable();
            $table->string('os', 30)->after('browser_version')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('clicks', function (Blueprint $table) {
            $table->dropColumn(['user_agent', 'browser', 'browser_version', 'os']);
        });
    }
}

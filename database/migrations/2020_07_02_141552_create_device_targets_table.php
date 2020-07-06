<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDeviceTargetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('device_targets', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('short_url_id')->unsigned();
            $table->integer('device')->unsigned();
            $table->string('target_url');
            $table->timestamps();

            $table->foreign('short_url_id')->references('id')->on('urls');
            $table->foreign('device')->references('id')->on('device_targets_enum');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('device_targets');
    }
}

<?php

use Illuminate\Database\Seeder;

class DeviceTargetsEnumsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('device_targets_enum')->insert([
            'name' => 'windows',
            'display_name' => 'Windows'
        ]);
        DB::table('device_targets_enum')->insert([
            'name' => 'macos',
            'display_name' => 'Mac OS'
        ]);
        DB::table('device_targets_enum')->insert([
            'name' => 'android',
            'display_name' => 'Android'
        ]);
        DB::table('device_targets_enum')->insert([
            'name' => 'ios',
            'display_name' => 'iOS'
        ]);
    }
}
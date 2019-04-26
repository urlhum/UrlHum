<?php

use Illuminate\Database\Seeder;

class SettingsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('settings')->insert(
            [
                [
                    'key' => 'anonymous_urls',
                    'value' => 1
                ],

                [
                    'key' => 'registration',
                    'value' => 1
                ],

                [
                    'key' => 'private_site',
                    'value' => 0
                ],

                [
                    'key' => 'show_guests_latests_urls',
                    'value' => 1
                ],

                [
                    'key' => 'hash_ip',
                    'value' => 1
                ],

                [
                    'key' => 'anonymize_ip',
                    'value' => 1
                ],

                [
                    'key' => 'reservedShortUrls',
                    'value' => '["privacy-policy","terms-of-use","login","register","password","profile","settings","url"]'
                ],

                [
                    'key' => 'deleted_urls_can_be_recreated',
                    'value' => 1
                ],

                [
                    'key' => 'website_name',
                    'value' => 'UrlHum'
                ],

                [
                    'key' => 'website_image',
                    'value' => '/images/urlhum.png'
                ],

                [
                    'key' => 'privacy_policy',
                    'value' => ' '
                ],

                [
                    'key' => 'enable_privacy_policy',
                    'value' => 1
                ],

                [
                    'key' => 'terms_of_use',
                    'value' => ' '
                ],

                [
                    'key' => 'enable_terms_of_use',
                    'value' => 1
                ]
            ]
        );
    }
}

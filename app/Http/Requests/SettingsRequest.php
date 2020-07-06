<?php

/*
 * UrlHum (https://urlhum.com)
 *
 * @link      https://github.com/urlhum/UrlHum
 * @copyright Copyright (c) 2019 Christian la Forgia
 * @license   https://github.com/urlhum/UrlHum/blob/master/LICENSE.md (MIT License)
 */

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SettingsRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'website_name' => 'required|min:2|max:30',
            'anonymous_urls' => 'boolean',
            'registration' => 'boolean',
            'private_site' => 'boolean',
            'unauthorized_redirect' => 'url|nullable',
            'show_guests_latests_urls' => 'boolean',
            'hash_ip' => 'boolean',
            'anonymize_ip' => 'boolean',
            'disable_referers' => 'boolean',
            'reservedShortUrls' => 'max:200',
            'deleted_urls_can_be_recreated' => 'boolean',
            'website_image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'website_favicon' => 'image|mimes:ico,png|max:2048',
            'privacy_policy' => 'max:10000',
            'enable_privacy_policy' => 'boolean',
            'terms_of_use' => 'max:10000',
            'enable_terms_of_use' => 'boolean',
            'require_user_verify' => 'boolean',
            'custom_html' => 'max:10000',
        ];
    }
}

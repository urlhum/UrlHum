<?php

/*
 * UrlHum (https://urlhum.com)
 *
 * @link      https://github.com/urlhum/UrlHum
 * @copyright Copyright (c) 2019 Christian la Forgia
 * @license   https://github.com/urlhum/UrlHum/blob/master/LICENSE.md (MIT License)
 */

namespace App\Http\Requests;

use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Http\FormRequest;

class ShortUrl extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        if (! Auth::check() && ! setting('anonymous_urls')) {
            return false;
        }

        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'url' => 'required|max:500|url',
            'customUrl' => 'nullable|min:4|max:15|regex:/^[-a-zA-Z0-9_]+$/',
            'privateUrl' => 'boolean',
            'hideUrlStats' => 'boolean',
            'windows' => 'nullable|string|max:500|url',
            'macos' => 'nullable|string|max:500|url',
            'ios' => 'nullable|string|max:500|url',
            'android' => 'nullable|string|max:500|url',
        ];

    }
}

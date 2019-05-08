<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class ShortUrl extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        if (!Auth::check() && !setting('anonymous_urls')) {
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
            'url' => 'required|max:500|regex:/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/',
            // TODO: Better customUrl validation
            'customUrl' => 'nullable|min:4|max:15|regex:/^[-a-zA-Z0-9_]+$/',
            'privateUrl' => 'boolean',
            'hideUrlStats' => 'boolean'
        ];
    }
}

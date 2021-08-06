<?php

/*
 * UrlHum (https://urlhum.com)
 *
 * @link      https://github.com/urlhum/UrlHum
 * @copyright Copyright (c) 2019 Christian la Forgia
 * @license   https://github.com/urlhum/UrlHum/blob/master/LICENSE.md (MIT License)
 */

use App\Http\Controllers\UrlController;

Route::get('/', 'HomeController@index')
    ->name('home');

Route::get('test', 'UrlController@createMultiple');

Route::get('privacy-policy', 'PagesController@privacy')->name('privacy');
Route::get('terms-of-use', 'PagesController@tos')->name('tos');

Auth::routes(['verify' => true]);

Route::group(['middleware' => 'auth'], function () {
    Route::resource('user', 'UserController', ['except' => ['show']])->middleware('admin');
    Route::get('profile', ['as' => 'profile.edit', 'uses' => 'ProfileController@edit']);
    Route::put('profile', ['as' => 'profile.update', 'uses' => 'ProfileController@update']);
    Route::put('profile/password', ['as' => 'profile.password', 'uses' => 'ProfileController@password']);
    Route::get('profile/access-token', ['as' => 'access_token.index', 'uses' => 'AccessTokenController@index']);
    Route::post('profile/access-token', ['as' => 'access_token.store', 'uses' => 'AccessTokenController@store']);
    Route::delete('profile/access-token', ['as' => 'access_token.delete', 'uses' => 'AccessTokenController@delete']);

    Route::get('profile/verified', ['as' => 'profile.verified', 'uses' => 'ProfileController@verified'])
        ->middleware('verified');

    Route::group(['middleware' => 'admin'], function () {
        Route::get('settings', ['as' => 'settings', 'uses' => 'SettingsController@show']);
        Route::post('settings/save', ['as' => 'settings.save', 'uses' => 'SettingsController@save']);
    });
});

Route::group(['prefix' => 'url'], function () {
    Route::get('multiple', 'UrlController@createMultiple')->name('multiple');
    Route::post('multiple', 'UrlController@storeMultiple')->name('store-multiple');
    Route::post('short', 'UrlController@checkExistingUrl')->name('short')->name('url.short')
        ->middleware('verifycheck');
    Route::get('my', 'UrlController@getMyUrls')->middleware('auth')->name('url.my')
        ->middleware('verifycheck');
    Route::get('list', 'UrlController@showUrlsList')->middleware('admin')->name('url.list');
    Route::get('list-load', 'UrlController@loadUrlsList')->middleware('admin')->name('url.list-load');
    Route::get('public', 'UrlController@publicUrls')->name('url.public');
    Route::get('referers', 'AnalyticsController@showReferrersList')->name('url.referers')->middleware('admin');
});

// We use "show" in place of "edit", because the "real" show is /{url}
Route::resource('url', 'UrlController')->except(['edit', 'index'])->middleware(['verifycheck', 'honeypot']);

Route::get('/{url}+', 'AnalyticsController@show')->name('stats');
Route::get('/{url}.svg', 'QRCodeController@svg')->name('qrcode.svg');
Route::get('/{url}.png', 'QRCodeController@png')->name('qrcode.png');
Route::get('/{url}', 'ClickUrlController@click')->name('click');

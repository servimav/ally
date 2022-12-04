<?php

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Route;
use TCG\Voyager\Facades\Voyager;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return File::get(public_path('ui') . '/index.html');
});

Route::get('/auth', function () {
    return File::get(public_path('ui') . '/index.html');
})->name('login');


Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});

Route::fallback(function () {
    return File::get(public_path('ui') . '/index.html');
});

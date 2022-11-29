<?php

use App\Http\Controllers\QrController;
use App\Http\Controllers\User\AuthController;
use Illuminate\Support\Facades\Route;

/**
 * -----------------------------------------
 *	Auth User
 * -----------------------------------------
 */
Route::prefix('auth')->group(function () {
    Route::get('', [AuthController::class, 'profile']);
    Route::post('login', [AuthController::class, 'login']);
    Route::post('register', [AuthController::class, 'register']);
});

Route::get('public-qr/{name}/{slug}', [QrController::class, 'publicQr']);

Route::apiResources([
    'qr' => QrController::class,
]);

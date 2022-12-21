<?php

use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\QrController;
use App\Http\Controllers\User\AuthController;
use App\Http\Controllers\UserPaymentController;
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
    Route::post('update', [AuthController::class, 'updateProfile']);
});

Route::get('public-qr', [QrController::class, 'publicQr']);

Route::apiResource('qr', QrController::class);

Route::get('products/by-nick', [ProductController::class, 'byNick']);
Route::apiResource('products', ProductController::class)->except(['update']);
Route::post('products/{id}', [ProductController::class, 'update']);

Route::prefix('payments')->group(function () {
    Route::get('', [UserPaymentController::class, 'index']);
    Route::post('', [UserPaymentController::class, 'store']);
    Route::get('available', [PaymentController::class, 'index']);
    Route::get('by-nick', [UserPaymentController::class, 'byNick']);
});

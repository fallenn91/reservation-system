<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ReservationController;

//Route::apiResource('reservations', ReservationController::class);
Route::get('/test', function () {
    return response()->json(['message' => 'API WORKING']);
});
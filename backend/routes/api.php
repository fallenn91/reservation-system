<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ReservationController;

Route::get('/reservations', [ReservationController::class, 'index']);
Route::post('/reservations', [ReservationController::class, 'store']);
Route::put('/reservations/${id}', [ReservationController::class, 'update']);
Route::delete('/reservations(${id}', [ReservationController::class, 'delete']);
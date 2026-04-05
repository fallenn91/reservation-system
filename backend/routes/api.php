<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

Route::options('/contacto', function () {
    return response()->json([], 200);
});

Route::options('/{any}', function () {
    return response()->json([], 200);
})->where('any', '.*');

Route::post('/contacto', [ContactController::class, 'sendForm']);
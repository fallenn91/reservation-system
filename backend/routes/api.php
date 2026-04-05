<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

Route::options('/contacto', function () {
    return response()->json([], 200);
});

Route::post('/contacto', [ContactController::class, 'sendForm']);
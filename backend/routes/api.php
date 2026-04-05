<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;

Route::post('/contacto', [ContactController::class, 'sendForm']);
<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

Route::post('/contacto', [ContactController::class, 'sendForm']);
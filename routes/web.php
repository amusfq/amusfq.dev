<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AppController;
use App\Http\Controllers\ResumeController;

Route::get('/', [AppController::class, 'index']);
Route::get('/resume', [ResumeController::class, 'index']);

<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    session_start();
    return view('home');
});

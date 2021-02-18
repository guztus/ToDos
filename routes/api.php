<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/get/all', 'ApiController@getAll');
Route::post('/add', 'ApiController@add');
Route::post('/completed-change', 'ApiController@completedChange');
Route::post('/delete', 'ApiController@delete');

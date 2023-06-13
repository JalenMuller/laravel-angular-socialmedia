<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\File;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
View::addExtension('html', 'php');

// Route::view('{path}', 'app/index')->where('path', '([A-z\d\-\/_.]+)?');

Route::get('/', function()
{
    return File::get(public_path() . '/app/index.html');
});
Route::get('/{any}', function ($any)
{
    return File::get(public_path() . '/app/index.html');
})->where('any', '.*');

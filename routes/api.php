<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProjectController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::controller(UserController::class)->middleware('auth:sanctum')->prefix('user')->group(function () {
    Route::post('registration', 'registration')->withoutMiddleware('auth:sanctum');
    Route::post('getUser', 'user');
    Route::post('fillWorksheet', 'fillWorksheet');
    Route::post('login', 'login')->withoutMiddleware('auth:sanctum');
});

Route::controller(ProjectController::class)->middleware(['auth:sanctum', 'activeUser'])->prefix('project')->group(function () {
    Route::post('createProject', 'createProject');
    Route::post('publishProject', 'publishProject');
    Route::post('deleteProject', 'deleteProject');
    Route::post('getUserProjects', 'getUserProjects');
    Route::post('joinToProject', 'joinToProject');
});


Route::controller(AdminController::class)->middleware(['auth:sanctum', 'adminUser'])->prefix('project')->group(function () {

});

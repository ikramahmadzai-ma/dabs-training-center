<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\InstructorController;
use App\Http\Controllers\Api\CourseController;
use App\Http\Controllers\Api\EventController;
use App\Http\Controllers\Api\TestimonialController;
use App\Http\Controllers\Api\StatisticController;

//instructor routes
Route::get('/instructors', [InstructorController::class, 'index']);
Route::get('/instructors/{id}', [InstructorController::class, 'show']);
Route::post('/instructors', [InstructorController::class, 'store']);
Route::put('/instructors/{id}', [InstructorController::class, 'update']);
Route::delete('/instructors/{id}', [InstructorController::class, 'destroy']);

//course routes
Route::apiResource('courses', CourseController::class);
Route::apiResource('events', EventController::class);
Route::apiResource('testimonials', TestimonialController::class);
Route::apiResource('statistics', StatisticController::class);

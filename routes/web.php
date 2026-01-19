<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get("/", function () {
  return Inertia::render("index");
})->name("home");

Route::get("/posts", [PostController::class, "index"]);
Route::post("/posts", [PostController::class, "store"])->name("posts.store");

Route::get("/tasks", [TaskController::class, "index"])->name("tasks.index");
Route::post("/tasks", [TaskController::class, "store"])->name("tasks.store");
Route::put("/tasks/{task}", [TaskController::class, "update"])->name("tasks.update");
Route::delete("/tasks/{task}", [TaskController::class, "destroy"])->name("tasks.destroy");

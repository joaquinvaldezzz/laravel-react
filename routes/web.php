<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\PostController;

Route::get("/", function () {
  return Inertia::render("welcome");
})->name("home");

Route::get("/about", function () {
  return Inertia::render("about");
})->name("about");

Route::get("/posts", [PostController::class, "index"]);
Route::post("/posts", [PostController::class, "store"])->name("posts.store");

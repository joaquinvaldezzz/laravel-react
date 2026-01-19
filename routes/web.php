<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\PostController;

Route::get("/", function () {
  return Inertia::render("index");
})->name("home");

Route::get("/posts", [PostController::class, "index"]);
Route::post("/posts", [PostController::class, "store"])->name("posts.store");

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
  public function index()
  {
    $posts = Post::all();

    return response()->json($posts);
  }

  public function store(Request $request)
  {
    $validated = $request->validate([
      "title" => "required|string|max:255",
      "content" => "required|string",
    ]);

    Post::create($validated);

    return redirect()->back()->with("success", "Post created!");
  }
}

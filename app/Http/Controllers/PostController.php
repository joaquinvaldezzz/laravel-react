<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

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

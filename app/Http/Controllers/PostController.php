<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreatePostRequest;
use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function create(CreatePostRequest $request)
    {
        $data = $request->validated();

        $post = new Post;

        // if the post type is text and there is no description
        // return error
        if ($data['post_type'] === 'text') {
            if (!isset($data['post_desc'])) {
                return response()->json(['message' => 'No description provided']);
            }
        }
        if ($data['post_type'] === 'image') {
            if ($request->hasFile('post_image')) {
                $path = $request->file('post_image')->store('uploads/posts/images', 'public');
                $post->post_image = $path;
            } else {
                return response()->json(['message' => 'Something went wrong with your upload.']);
            }
        }
        $post->user_id = 1;
        $post->post_type = $data['post_type'];
        if (isset($data['post_desc'])) {
            $post->post_desc = $data['post_desc'];
        } else {
            $post->post_desc = null;
        }
        $post->save();
        return response()->json(['message' => 'Successfully created your post.', 'post' => $post]);
    }
}

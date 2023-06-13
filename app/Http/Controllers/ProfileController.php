<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
   public function index(Request $request, $url){
   $currentUser = false;
   $requestedUser = User::where('profile_url', $url)->first();
   if($request->user()['id'] === $requestedUser['id']){
      $currentUser = true;
   }
    return response()->json(['user'=> $requestedUser, 'currentUser' => $currentUser]);
   }
}

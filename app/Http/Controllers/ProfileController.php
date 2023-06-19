<?php

namespace App\Http\Controllers;

use App\Http\Requests\AvatarRequest;
use App\Http\Requests\UpdateProfileRequest;
use App\Models\Profile;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class ProfileController extends Controller
{
   public function index(Request $request, $url){
   $currentUser = false;
   $profile = Profile::where('profile_url', $url)->first();
   if($request->user()['id'] === $profile['user_id']){
      $currentUser = true;
   }
    return response()->json(['profile'=> $profile, 'currentUser' => $currentUser]);
   }

   public function update_avatar(AvatarRequest $request){
      $data = $request->validated();
      $user = $request->user();

      if ($request->hasFile('avatar')) {
         if ($user['avatar']){
            $filePath = public_path().'/storage/'. $user['avatar'];
            if(file_exists($filePath)){

               File::delete($filePath);
            }
         }
         $path = $request->file('avatar')->store('uploads/avatars', 'public');
         // update user record with path
         $user->avatar = $path;
         $user->save();
         // update profile record with path
         $profile = Profile::where('user_id', $user['id'])->first();
         $profile->avatar = $path;
         $profile->save();

         return response()->json(['message'=> "Successfully updated your profile picture!", 'url'=> 'storage/' . $path]);
     } else {
         return response()->json(['message' => 'Something went wrong with your image upload.']);
     }
   }
   public function update_profile(UpdateProfileRequest $request){
      $data = $request->validated();

      $profile = Profile::where('user_id', $request->user()['id'])->first();
      
      $profile->workplace = $data['workplace'];
      $profile->high_school = $data['high_school'];
      $profile->college = $data['college'];
      $profile->country = $data['country'];
      $profile->city = $data['city'];
      $profile->relationship_status = $data['relationship_status'];
      $profile->email = $data['email'];
      $profile->phone_nr = $data['phone_nr'];
      $profile->website = $data['website'];

      $profile->save();
   }
}

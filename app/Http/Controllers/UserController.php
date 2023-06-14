<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\Profile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Routing\Route;

class UserController extends Controller
{
    public function index()
    {
        return Hash::make("root");
    }
    public function user(Request $request)
    {
        return $request->user();
    }
    public function create(RegisterRequest $request){
        $data = $request->validated();

        $profile_url = $this->generate_profile_url($data['first_name'], $data['last_name']);

        $user = User::create([
            'first_name' => $data['first_name'],
            'last_name' => $data['last_name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'birthday' => $data['birthday'],
            'gender' => $data['gender'],
            'profile_url' => $profile_url
        ]);
        Profile::create([
            'user_id' => $user['id'],
            'first_name' => $data['first_name'],
            'last_name' => $data['last_name'],
            'birthday' => $data['birthday'],
            'gender' => $data['gender'],
            'profile_url' => $profile_url
        ]);
        $token = $user->createToken('Token')->accessToken;
        return response()->json(['token' => $token]);
    }
    public function login(LoginRequest $request){
        $data = $request->validated();

        $user = User::where('email', $data['email'])->first();
        if ($user) {
            if (Hash::check($data['password'], $user->password)) {
                $token = $user->createToken('Token')->accessToken;
                $response = ['token' => $token];
                return response($response, 200);
            } else {
                $response = ["message" => "Password mismatch"];
                return response($response, 422);
            }
        } else {
            $response = ["message" =>'User does not exist'];
            return response($response, 422);
        }
    }
    public function check_token(Request $request){
        if($request->user()){
            return response()->json(true);
        }
    }
    private function generate_profile_url($first_name, $last_name){
        $profile_url = Str::slug($first_name." ". $last_name . " ". uniqid());
        return $profile_url;

    }
    // private function unique_profile_url(){

    // }
}

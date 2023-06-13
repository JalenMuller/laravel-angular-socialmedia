<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'first_name' => 'required|string|max:15',
            'last_name' => 'required|string|max:20',
            'email' => 'required|email|unique:users,email|max:255',
            'password' => [
                'required',
                'string',
                Password::min(8),
            ],
            // unix timestamp
            'birthday' => 'required|int',
            // Male/Female/Other
            'gender' => ["required" , "max:1", "regex:(M|F|O)"]
        ];
    }
}

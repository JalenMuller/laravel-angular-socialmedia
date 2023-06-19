<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProfileRequest extends FormRequest
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
            'workplace' => 'string|max:255|nullable',
            'high_school' => 'string|max:255|nullable',
            'college' => 'string|max:255|nullable',
            'country' => 'string|max:255|nullable',
            'city' => 'string|max:255|nullable',
            'relationship_status' => 'string|max:255|nullable',
            'email' => 'string|max:255|nullable',
            'phone_nr' => 'string|max:255|nullable',
            'website' => 'string|max:255|nullable',
        ];
    }
}

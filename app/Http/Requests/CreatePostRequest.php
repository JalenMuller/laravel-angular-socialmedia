<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\File;

class CreatePostRequest extends FormRequest
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
            'post_type' => [ "max:30", "regex:(text|image|feeling)"],
            'post_desc' => 'string|max:255|nullable',
            'post_feeling' => 'string|max:255|nullable',
            'post_location' => 'string|max:255|nullable',
            'post_image' => [
                File::types(['png', 'jpeg', 'jpg'])
                    ->max(1024 * 1000 * 2),
            ],
        ];
    }
}

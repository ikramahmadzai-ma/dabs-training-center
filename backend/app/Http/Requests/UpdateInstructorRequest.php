<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateInstructorRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'position' => 'required|string|max:255',
            'image' => 'required|string',
            'email' => 'nullable|email|max:255',
            'phone' => 'nullable|string|max:30',
            'bio' => 'nullable|string',
            'status' => 'required|boolean',
        ];
    }
}

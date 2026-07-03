<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCourseRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'slug' => 'required|string|unique:courses,slug',
            'description' => 'required|string',
            'duration' => 'required|string|max:100',
            'rating' => 'required|numeric|min:0|max:5',
            'students' => 'required|integer|min:0',
            'image' => 'required|string|max:255',
            'status' => 'required|boolean',
            'instructor_id' => 'required|exists:instructors,id',
        ];
    }
}

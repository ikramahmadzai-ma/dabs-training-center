<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreEventRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'day' => 'required|integer|min:1|max:31',
            'month' => 'required|string|max:20',
            'time' => 'required|string|max:100',
            'location' => 'required|string|max:255',
            'description' => 'required|string',
            'status' => 'required|boolean',
        ];
    }
}

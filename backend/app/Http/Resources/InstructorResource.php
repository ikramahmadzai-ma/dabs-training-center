<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class InstructorResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'position' => $this->position,
            'image' => $this->image,
            'email' => $this->email,
            'phone' => $this->phone,
            'bio' => $this->bio,
            'status' => $this->status,
            'created_at' => $this->created_at,
        ];
    }
}

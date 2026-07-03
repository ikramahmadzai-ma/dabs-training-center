<?php

namespace App\Http\Resources;


use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CourseResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'duration' => $this->duration,
            'rating' => $this->rating,
            'students' => $this->students,
            'image' => $this->image,
            'status' => $this->status,

            // Foreign Key
            'instructor_id' => $this->instructor_id,

            'instructor' => [
                'id' => $this->instructor?->id,
                'name' => $this->instructor?->name,
                'position' => $this->instructor?->position,
                'image' => $this->instructor?->image,
            ],

            // Optional (shows instructor information)
            // 'instructor' => new InstructorResource($this->whenLoaded('instructor')),

            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}

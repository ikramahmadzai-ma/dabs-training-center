<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Instructor extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'position',
        'image',
        'email',
        'phone',
        'bio',
        'status',
    ];

    /**
     * One Instructor Has Many Courses
     */
    public function courses()
    {
        return $this->hasMany(Course::class);
    }
}

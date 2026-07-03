<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Instructor;


class Course extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'description',
        'image',
        'duration',
        'students',
        'rating',
        'instructor_id',
        'status',
    ];


    public function instructor()
    {
        return $this->belongsTo(Instructor::class);
    }
}

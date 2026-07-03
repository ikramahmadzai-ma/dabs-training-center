<?php

namespace App\Http\Controllers\Api;


use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\StoreCourseRequest;
use App\Http\Requests\UpdateCourseRequest;
use App\Http\Resources\CourseResource;
use App\Models\Course;


class CourseController extends Controller
{
    // 1. GET ALL (index)
    public function index(Request $request)
    {
        // $courses = Course::latest()->get();
        // $courses = Course::with('instructor')->latest()->get();

        // return CourseResource::collection($courses);
        $limit = $request->query('limit');

        $courses = Course::latest();

        if ($limit) {
            $courses->take($limit);
        }

        return CourseResource::collection($courses->get());
    }

    // 2. GET ONE (show)
    public function show($id)
    {
        $course = Course::find($id);

        if (!$course) {
            return response()->json([
                'message' => 'Course not found'
            ], 404);
        }

        return new CourseResource($course);
    }

    // 3. STORE (create)
    public function store(StoreCourseRequest $request)
    {
        $course = Course::create($request->validated());

        return new CourseResource($course);
    }


    // 4. UPDATE
    public function update(UpdateCourseRequest $request, $id)
    {
        $course = Course::find($id);

        if (!$course) {
            return response()->json([
                'message' => 'Course not found'
            ], 404);
        }

        $course->update($request->validated());

        return new CourseResource($course);
    }

    // 5. DELETE
    public function destroy($id)
    {
        $course = Course::find($id);

        if (!$course) {
            return response()->json([
                'message' => 'Course not found'
            ], 404);
        }

        $course->delete();

        return response()->json([
            'message' => 'Course deleted successfully'
        ]);
    }
}

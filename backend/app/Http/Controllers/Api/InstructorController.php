<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Instructor;
use App\Http\Requests\StoreInstructorRequest;
use Illuminate\Http\Request;
use App\Http\Resources\InstructorResource;
use App\Http\Requests\UpdateInstructorRequest;

class InstructorController extends Controller
{
    // 1. GET ALL (index)
    public function index()
    {
        $instructors = Instructor::latest()->get();

        return InstructorResource::collection($instructors);
    }

    // 2. GET ONE (show)
    public function show($id)
    {
        $instructor = Instructor::find($id);

        if (!$instructor) {
            return response()->json([
                'message' => 'Instructor not found'
            ], 404);
        }

        return new InstructorResource($instructor);
    }

    // 3. STORE (create)
    public function store(StoreInstructorRequest $request)
    {
        $instructor = Instructor::create($request->validated());

        return new InstructorResource($instructor);
    }

    // 4. UPDATE
    public function update(UpdateInstructorRequest $request, Instructor $instructor)
    {
        $instructor->update($request->validated());

        return new InstructorResource($instructor);
    }

    // 5. DELETE
    public function destroy($id)
    {
        $instructor = Instructor::find($id);

        if (!$instructor) {
            return response()->json([
                'success' => false,
                'message' => 'Instructor not found'
            ], 404);
        }

        $instructor->delete();

        return response()->json([
            'success' => true,
            'message' => 'Instructor deleted successfully'
        ]);
    }
}

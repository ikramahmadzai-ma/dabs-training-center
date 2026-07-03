<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreTestimonialRequest;
use App\Http\Requests\UpdateTestimonialRequest;
use App\Http\Resources\TestimonialResource;
use App\Models\Testimonial;


class TestimonialController extends Controller
{
    // 1. GET ALL (index)
    public function index()
    {
        $testimonials = Testimonial::latest()->get();

        return TestimonialResource::collection($testimonials);
    }

    // 2. GET ONE (show)
    public function show($id)
    {
        $testimonial = Testimonial::find($id);

        if (!$testimonial) {
            return response()->json([
                'message' => 'Testimonial not found'
            ], 404);
        }

        return new TestimonialResource($testimonial);
    }

    // 3. STORE (create)
    public function store(StoreTestimonialRequest $request)
    {
        $testimonial = Testimonial::create($request->validated());

        return new TestimonialResource($testimonial);
    }

    // 4. UPDATE
    public function update(UpdateTestimonialRequest $request, $id)
    {
        $testimonial = Testimonial::find($id);

        if (!$testimonial) {
            return response()->json([
                'message' => 'Testimonial not found'
            ], 404);
        }

        $testimonial->update($request->validated());

        return new TestimonialResource($testimonial);
    }

    // 5. DELETE
    public function destroy($id)
    {
        $testimonial = Testimonial::find($id);

        if (!$testimonial) {
            return response()->json([
                'message' => 'Testimonial not found'
            ], 404);
        }

        $testimonial->delete();

        return response()->json([
            'message' => 'Testimonial deleted successfully'
        ]);
    }
}

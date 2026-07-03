<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreEventRequest;
use App\Http\Requests\UpdateEventRequest;
use App\Http\Resources\EventResource;
use App\Models\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    // 1. GET ALL (index)
    public function index(Request $request)
    {
        $limit = $request->query('limit');

        $events = Event::latest();

        if ($limit) {
            $events->take($limit);
        }

        return EventResource::collection($events->get());
    }

    // 2. GET ONE (show)
    public function show($id)
    {
        $events = Event::find($id);

        if (!$events) {
            return response()->json([
                'message' => 'Events not found'
            ], 404);
        }

        return new EventResource($events);
    }

    // 3. STORE (create)
    public function store(StoreEventRequest $request)
    {
        $events = Event::create($request->validated());

        return new EventResource($events);
    }

    // 4. UPDATE
    public function update(UpdateEventRequest $request, $id)
    {
        $events = Event::find($id);

        if (!$events) {
            return response()->json([
                'message' => 'Events not found'
            ], 404);
        }

        $events->update($request->validated());

        return new EventResource($events);
    }

    // 5. DELETE
    public function destroy($id)
    {
        $events = Event::find($id);

        if (!$events) {
            return response()->json([
                'message' => 'Events not found'
            ], 404);
        }

        $events->delete();

        return response()->json([
            'message' => 'Events deleted successfully'
        ]);
    }
}

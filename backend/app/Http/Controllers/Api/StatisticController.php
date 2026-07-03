<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreStatisticRequest;
use App\Http\Requests\UpdateStatisticRequest;
use App\Http\Resources\StatisticResource;
use App\Models\Statistic;

class StatisticController extends Controller
{
    // 1. GET ALL (index)
    public function index()
    {
        $statistics = Statistic::latest()->get();

        return StatisticResource::collection($statistics);
    }

    // 2. GET ONE (show)
    public function show($id)
    {
        $statistic = Statistic::find($id);

        if (!$statistic) {
            return response()->json([
                'message' => 'Statistic not found'
            ], 404);
        }

        return new StatisticResource($statistic);
    }

    // 3. STORE (create)
    public function store(StoreStatisticRequest $request)
    {
        $statistic = Statistic::create($request->validated());

        return new StatisticResource($statistic);
    }

    // 4. UPDATE
    public function update(UpdateStatisticRequest $request, $id)
    {
        $statistic = Statistic::find($id);

        if (!$statistic) {
            return response()->json([
                'message' => 'Statistic not found'
            ], 404);
        }

        $statistic->update($request->validated());

        return new StatisticResource($statistic);
    }

    // 5. DELETE
    public function destroy($id)
    {
        $statistic = Statistic::find($id);

        if (!$statistic) {
            return response()->json([
                'message' => 'Statistic not found'
            ], 404);
        }

        $statistic->delete();

        return response()->json([
            'message' => 'Statistic deleted successfully'
        ]);
    }
}

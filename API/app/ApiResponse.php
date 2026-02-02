<?php

namespace App;

use Illuminate\Http\JsonResponse;

trait ApiResponse
{
    protected function success(
        string $message = 'Success',
        $data = null,
        int $statusCode = 200,
    ): JsonResponse {
        return response()->json([
            'status' => true,
            'message' => $message,
            'data' => $data
        ], $statusCode);
    }

    protected function error(
        string $message = 'Something went wrong',
        $errors = null,
        int $statusCode = 400,
    ): JsonResponse {
        return response()->json([
            'status' => true,
            'message' => $message,
            'errors' => $errors
        ], $statusCode);
    }
}

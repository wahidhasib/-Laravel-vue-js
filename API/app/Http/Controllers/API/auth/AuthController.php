<?php

namespace App\Http\Controllers\API\auth;

use App\ApiResponse;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    use ApiResponse;

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email'    => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return $this->error('Validation error!', $validator->errors(), 422);
        }

        if (!Auth::attempt($request->only('email', 'password'))) {
            return $this->error('Invalid email or password', null, 401);
        }

        $user = Auth::user();

        // 2️⃣ Authorize role BEFORE token creation
        if ($user->role !== 'admin') {
            Auth::logout();

            return $this->error(
                'Unauthorized. Admin access only.',
                null,
                403
            );
        }

        $token = $user->createToken('api_token')->plainTextToken;

        return $this->success('Logged in successfully!', ['token' => $token, 'user' => $user]);
    }
}

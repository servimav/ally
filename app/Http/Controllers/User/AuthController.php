<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    /**
     * Constructor
     */
    public function __construct()
    {
        $this->middleware('auth:sanctum')->only(['profile']);
    }
    /**
     * Login
     * @param Request request
     * @return Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => ['required', 'email'],
            'password' => ['required', 'string'],
        ]);
        if ($validator->fails()) {
            return $this->sendErrorReponse($validator->errors());
        }
        $validator = $validator->validate();

        if (Auth::attempt($validator)) {
            $user = auth()->user();
            return $this->authResponse($user);
        }
        return $this->sendErrorReponse('Credenciales incorrectas');
    }

    /**
     * register
     * @param Request request
     * @return Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string'],
            'nick' => ['required', 'string', 'unique:users'],
            'email' => ['required', 'email', 'unique:users'],
            'password' => ['required', 'confirmed', 'string']
        ]);
        if ($validator->fails()) {
            return $this->sendErrorReponse($validator->errors());
        }
        $validator = $validator->validate();
        $validator['password'] = bcrypt($validator['password']);
        $user = new User($validator);
        return $user->save()
            ? $this->authResponse($user)
            : $this->sendErrorReponse();
    }
    /**
     * profile
     */
    public function profile()
    {
        return new UserResource(auth()->user());
    }
    /**
     * authResponse
     * @param User $user
     */
    private function authResponse(User $user)
    {
        $user->role;
        return [
            'profile' => new UserResource($user),
            'token' => $user->createToken('API_TOKEN')->plainTextToken
        ];
    }
}

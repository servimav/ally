<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Http\Traits\HandleImage;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    use HandleImage;
    /**
     * Constructor
     */
    public function __construct()
    {
        $this->middleware('auth:sanctum')->only(['profile', 'updateProfile']);
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
            return $this->sendErrorReponse('Revise los datos enviados');
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
            return $this->sendErrorReponse('El Email o Nick están siendo usados');
        }
        $validator = $validator->validate();
        $validator['password'] = bcrypt($validator['password']);
        $validator['avatar'] = 'avatars/default.svg';
        $user = new User($validator);
        $user->avatar = $this->imageDefault();
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

    public function updateProfile(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => ['nullable', 'string'],
            'email' => ['nullable', 'email'],
            'nick' => ['nullable', 'string'],
            'password' => ['nullable', 'confirmed', 'string'],
            'avatar' => ['nullable', 'file', 'max:1000000']
        ]);
        if ($validator->fails()) {
            return $this->sendErrorReponse('Revise los datos enviados');
        }
        $validator = $validator->validate();
        $user = User::find(auth()->id());
        if (isset($validator['password'])) {
            $validator['password'] = bcrypt($validator['password']);
        } else
            unset($validator['password']);
        if (isset($validator['nick'])) {
            $exists = User::query()->where('nick', $validator['nick'])->first();
            if ($exists && $exists->id !== $user->id)
                return $this->sendErrorReponse('El nick está usado');
        }
        if (isset($validator['email'])) {
            $exists = User::query()->where('email', $validator['email'])->first();
            if ($exists && $exists->id !== $user->id)
                return $this->sendErrorReponse('El email está usado');
        }
        if (isset($validator['avatar'])) {
            $avatarName = 'avatars/avatar_' . time() . $user->id . '.jpg';
            if ($this->imageUpload($request, $avatarName, 'avatar', 320)) {
                $this->imageDelete($user->avatar);
                $validator['avatar'] = $avatarName;
            }
        }
        return $user->update($validator)
            ? $this->authResponse($user)
            : $this->sendErrorReponse();
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

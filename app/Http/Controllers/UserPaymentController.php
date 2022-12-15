<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserPaymentResource;
use App\Models\User;
use App\Models\UserPayment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserPaymentController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:sanctum'])->except(['byNick']);
    }
    /**
     * index
     * @return Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return auth()->user()->payment
            ? new UserPaymentResource(auth()->user()->payment)
            : $this->sendReponse(['id' => 0, 'methods' => []]);
    }
    /**
     * store
     * @param Request request
     * @return Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'methods' => ['nullable', 'array'],
            'methods.*.payment_id' => ['required', 'integer'],
            'methods.*.name' => ['required', 'string'],
            'methods.*.data' => ['required', 'string']
        ]);
        if ($validator->fails()) {
            return $this->sendErrorReponse('Verifique los datos enviados');
        }
        $validator = $validator->validate();
        $model = auth()->user()->payment;
        if ($model) {
            $model->methods = $validator['methods'];
        } else {
            $model = new UserPayment([
                'user_id' => auth()->id(),
                'methods' => $validator['methods']
            ]);
        }
        return $model->save() ? new UserPaymentResource($model) : $this->sendErrorReponse();
    }

    /**
     * byNick
     * @param Request request
     * @return Illuminate\Http\JsonResponse
     */
    public function byNick(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nick' => ['required', 'string']
        ]);
        if ($validator->fails()) {
            return $this->sendErrorReponse('Verifique los datos enviados');
        }
        $validator = $validator->validate();
        $model = User::query()->where('nick', $validator['nick'])->first();
        return $model && $model->payment ?
            new UserPaymentResource($model->payment)
            : $this->sendErrorReponse();
    }
}

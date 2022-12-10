<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserPaymentResource;
use App\Models\UserPayment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserPaymentController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:sanctum']);
    }
    /**
     * index
     * @return Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return auth()->user()->payment
            ? new UserPaymentResource(auth()->user()->payment)
            : $this->sendReponse('No tiene metodos de pago');
    }
    /**
     * store
     * @param Request request
     * @return Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'data' => ['required', 'array'],
            'data.*.payment_id' => ['required', 'integer'],
            'data.*.payment_data' => ['required', 'string']
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors()->toArray(), 400, [], JSON_NUMERIC_CHECK);
        }
        $validator = $validator->validate();
        $model = auth()->user()->payment;
        if ($model) {
            $model->data = $validator['data'];
        } else {
            $model = new UserPayment([
                'user_id' => auth()->id(),
                'data' => $validator['data']
            ]);
        }
        return $model->save() ? new UserPaymentResource($model) : $this->sendErrorReponse();
    }
}

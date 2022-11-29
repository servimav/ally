<?php

namespace App\Http\Controllers;

use App\Http\Resources\QrResource;
use App\Models\Qr;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class QrController extends Controller
{
    /**
     * __construct
     */
    public function __construct()
    {
        $this->middleware('auth:sanctum')->except(['publicQr']);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return QrResource::collection(auth()->user()->qrs);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => ['required', 'string'],
            'data' => ['required', 'string'],
            'description' => ['nullable', 'string'],
            'slug' => ['nullable', 'string'],
            'type' => ['required', 'in:' . implode(',', Qr::$TYPES)],
            'public' => ['nullable', 'boolean'],
        ]);
        if ($validator->fails()) {
            return $this->sendErrorReponse($validator->errors());
        }
        $validator = $validator->validate();
        $validator['user_id'] = auth()->id();
        $model = new Qr($validator);
        return $model->save()
            ? new QrResource($model)
            : $this->sendErrorReponse();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Qr::find($id)
            ? new QrResource(Qr::find($id))
            : $this->sendErrorReponse();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'title' => ['required', 'string'],
            'data' => ['required', 'string'],
            'description' => ['nullable', 'string'],
            'slug' => ['nullable', 'string'],
            'type' => ['required', 'in:' . implode(',', Qr::$TYPES)],
            'public' => ['nullable', 'boolean'],
        ]);
        if ($validator->fails()) {
            return $this->sendErrorReponse($validator->errors());
        }
        $validator = $validator->validate();
        $model = Qr::query()->where([
            ['id', '=', $id],
            ['user_id', '=', auth()->id()]
        ])->first();
        return $model && $model->update($validator)
            ? new QrResource(Qr::find($id))
            : $this->sendErrorReponse();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return Qr::find($id) && Qr::find($id)->delete()
            ? $this->sendReponse($id)
            : $this->sendErrorReponse('No existe');
    }

    /**
     * publicQr
     * @param Request request
     * @return Illuminate\Http\JsonResponse
     */
    public function publicQr(string $name, string $slug)
    {
        $user = User::query()->where('name', str_replace('-', ' ', $name))->first();
        if (!$user) return $this->sendErrorReponse('No existe el usuario');
        $model = $user->qrs()->where([['slug', '=', $slug], ['public', '=', true]])->first();
        return $model
            ? new QrResource($model)
            : $this->sendErrorReponse('No existe el codigo');
    }
}

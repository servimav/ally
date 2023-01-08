<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Http\Resources\UserResource;
use App\Http\Traits\HandleImage;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    use HandleImage;

    public function __construct()
    {
        $this->middleware('auth:sanctum')->except(['byNick']);
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
        $user = User::query()->where('nick', $validator['nick'])->first();
        return $user && $user->products ?
            $this->sendReponse(['products' => ProductResource::collection($user->products), 'user' => new UserResource($user)])
            : $this->sendErrorReponse(json_encode($user->products));
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ProductResource::collection(Product::query()->where([
            ['onsale', true],
            ['user_id', auth()->id()],
        ])->get());
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
            'description' => ['required', 'string'],
            'price' => ['required', 'numeric'],
            'image' => ['nullable', 'image'],
        ]);
        if ($validator->fails()) {
            return $this->sendErrorReponse();
        }
        $validator = $validator->validate();
        $validator['user_id'] = auth()->id();

        if (isset($validator['image'])) {
            $imageName = 'products/product_' . time() . auth()->id() . '.jpg';
            if ($this->imageUpload($request, $imageName, 'image', 320)) {
                $validator['image'] = $imageName;
            }
        } else {
            $validator['image'] = $this->imageDefault();
        }
        $model = new Product($validator);
        return $model->save()
            ? new ProductResource($model)
            : $this->sendErrorReponse('No se pudo guardar el producto');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new ProductResource(Product::find($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(int $id, Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => ['nullable', 'string'],
            'description' => ['nullable', 'string'],
            'price' => ['nullable', 'numeric'],
            'image' => ['nullable', 'image'],
        ]);
        if ($validator->fails()) {
            return $this->sendErrorReponse();
        }
        $validator = $validator->validate();
        $model = Product::find($id);
        if (!$model) return $this->sendErrorReponse('No existe el producto');
        if ($model->user_id !== auth()->id()) return $this->sendErrorReponse('No esta autorizado');

        if (isset($validator['image'])) {
            $imageName = 'products/product_' . time() . auth()->id() . '.jpg';
            if ($this->imageUpload($request, $imageName, 'image', 320)) {
                $this->imageDelete($model->image);
                $validator['image'] = $imageName;
            }
        }
        return $model->update($validator)
            ? new ProductResource(Product::find($id))
            : $this->sendErrorReponse('No se pudo guardar');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $model = Product::find($id);
        if ($model && $model->user_id !== auth()->id()) return $this->sendErrorReponse('No esta autorizado');
        if ($model->image)
            $this->imageDelete($model->image);
        if (!$model) return $this->sendErrorReponse('No existe el producto');
        return $model->delete() ? $this->sendReponse(true) : $this->sendErrorReponse();
    }
}

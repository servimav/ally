<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'image' => $this->image
                ? env('APP_URL', 'http://localhost:8000') . Storage::url($this->image)
                : env('APP_URL', 'http://localhost:8000') . Storage::url('avatars/default.svg'),
            'price' => $this->price
        ];
    }
}

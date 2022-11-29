<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class QrResource extends JsonResource
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
            'type' => $this->type,
            'title' => $this->title,
            'slug' => $this->slug,
            'description' => $this->description,
            'data' => $this->data,
            'public' => $this->public,
        ];
    }
}

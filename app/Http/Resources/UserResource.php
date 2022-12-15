<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class UserResource extends JsonResource
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
            'name' => $this->name,
            'nick' => $this->nick,
            'email' => $this->email,
            'avatar' => $this->avatar
                ? env('APP_URL', 'http://localhost:8000') . Storage::url($this->avatar)
                : env('APP_URL', 'http://localhost:8000') . Storage::url('avatars/default.svg'),
            'role' => $this->role ? $this->role->name : 'user',
        ];
    }
}

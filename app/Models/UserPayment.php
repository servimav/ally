<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserPayment extends Model
{
    use HasFactory;

    protected $table = 'user_payments';
    protected $guarded = ['id'];
    protected $casts = ['data' => 'array'];
    public $timestamps = false;
    /**
     * user
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

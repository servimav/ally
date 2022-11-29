<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Qr extends Model
{
    use HasFactory;
    protected $table = 'qr';
    protected $guarded = ['id'];
    protected $casts = ['public' => 'boolean'];
    /**
     * Available Types
     */
    public static $TYPES = ['TEXT', 'URL', 'VCARD', 'WIFI'];
    /**
     * -----------------------------------------
     *	Relations
     * -----------------------------------------
     */
    /**
     * user
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

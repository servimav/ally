<?php

namespace App\Http\Traits;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image as InterventionImage;

/**
 * HandleImage
 */
trait HandleImage
{
    static public $image_default = 'avatars/default.svg';

    static public function imageDefault()
    {
        // if (!Storage::exists(self::$image_default))
        //     Storage::copy(public_path(self::$image_default), self::$image_default);
        return self::$image_default;
    }

    /**
     * imageDelete
     * @param string $image
     */
    static public function imageDelete(string $image): bool
    {
        return $image === self::$image_default
            ? true
            : Storage::disk('public')->exists($image) && Storage::disk('public')->delete($image);
    }
    /**
     * imageUpload
     * @param string $dir
     * @param Request $request
     * @param string $field
     * @param int $resize
     * @return string|null
     */
    static public function imageUpload(Request $request, string $filename, string $field = 'image', int $resize = 480)
    {
        if ($request->hasFile($field) && $request->file($field)->isValid()) {
            $image = $request->file($field);
            if (!Storage::exists($filename))
                Storage::disk('public')->put($filename, '');
            try {
                InterventionImage::make($image)
                    ->resize($resize, $resize, function ($constraints) {
                        $constraints->aspectRatio();
                    })->save(storage_path('/app/public/' . $filename));
                return true;
            } catch (\Throwable $th) {
                Log::error($th);
            }
        }
        return self::$image_default;
    }
}

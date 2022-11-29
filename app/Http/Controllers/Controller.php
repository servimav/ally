<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * sendErrorReponse
     * @param string $error
     * @param int $status
     * @return JsonResponse
     */
    public function sendErrorReponse($error = 'Ha ocurrido un error', $status = 400)
    {
        return response()->json($error, $status, [], JSON_NUMERIC_CHECK);
    }

    /**
     * sendErrorReponse
     * @param string $data
     * @param int $status
     * @return JsonResponse
     */
    public function sendReponse($data, $status = 200)
    {
        return response()->json($data, $status, [], JSON_NUMERIC_CHECK);
    }
}

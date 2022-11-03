<?php

namespace App\Helpers;

class Response
{
    public static function responseOk(array $data)
    {
        return response()->json([
            'ok' => 'true',
            ...$data
        ], 200);
    }
}

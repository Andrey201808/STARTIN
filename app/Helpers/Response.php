<?php

namespace App\Helpers;

class Response
{
    public static function responseFail(array $data)
    {
        return response()->json([
            'ok' => 'fail',
            ...$data
        ], 500);
    }

    public static function responseOk(array $data)
    {
        return response()->json([
            'ok' => 'true',
            ...$data
        ], 200);
    }
}

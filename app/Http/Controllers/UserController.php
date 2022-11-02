<?php

namespace App\Http\Controllers;

use App\Helpers\Response;
use App\Http\Requests\UserRegistration;
use App\Repositories\UserRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

class UserController extends Controller
{
    public function __construct(private UserRepository $UserRepository)
    {
    }

    public function registration(UserRegistration $request)
    {
        $request->validated();

        $this->UserRepository->registration($request);

        return Response::responseOk([
            'message' => 'Успешная регистрация'
        ]);
    }
}

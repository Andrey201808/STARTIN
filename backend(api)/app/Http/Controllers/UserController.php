<?php

namespace App\Http\Controllers;

use App\Exceptions\ApiException;
use App\Helpers\Response;
use App\Http\Requests\UserFillWorksheet;
use App\Http\Requests\UserLogin;
use App\Http\Requests\UserRegistration;
use App\Models\User;
use App\Repositories\UserRepository;
use Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

class UserController extends Controller
{
    public function __construct(private UserRepository $UserRepository)
    {
    }

    public function user(Request $request)
    {
        return Response::responseOk([
            'data' => [
              'user' => $request->user(),
            ],
        ]);
    }

    public function fillWorksheet(UserFillWorksheet $request)
    {
        $request->validated();

        $user = Auth::user();

        $this->UserRepository->fillWorksheet($request);

        if ($user->status == 'registered') {
            $user->status = 'active';
            $user->save();
        }

        return Response::responseOk([
            'message' => 'Вы успешно обновили настройки профиля',
        ]);
    }

    public function login(UserLogin $request)
    {
        $request->validated();

        $user = $this->UserRepository->login($request);

        return Response::responseOk([
            'message' => 'Успешная авторизация',
            'data' => [
                'token' => $user->createToken($request->ip())->plainTextToken,
            ],
        ]);
    }

    public function registration(UserRegistration $request)
    {
        $request->validated();

        $user = $this->UserRepository->registration($request);

        return Response::responseOk([
            'message' => 'Успешная регистрация',
            'data' => [
                'token' => $user->createToken($request->ip())->plainTextToken,
            ],
        ]);
    }
}

<?php

namespace App\Repositories;

use App\Exceptions\ApiException;
use App\Models\User;
use App\Service\SkillService;
use Auth;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Hash;
use function Symfony\Component\String\b;

class UserRepository
{
    public function __construct(private SkillService $skillService)
    {
    }

    public function login(FormRequest $request)
    {

        $user = User::where('email', $request->get('email'))->first();

        if (! $user || ! Hash::check($request->get('password'), $user->password)) {
            throw (new ApiException('Не верный емейл или пароль !'))->withStatus(500);
        }

        return $user;
    }

    public function fillWorksheet(FormRequest $request)
    {
        $user = Auth::user();

        $this->skillService->updateSkills($request->get('skills'));

        $user->update([
            'birth_date' => $request->get('birth_date'),
            'country' => $request->get('country'),
            'city' => $request->get('city'),
            'sex' => $request->get('sex'),
            'achievements' => $request->get('achievements'),
            'have_team' => $request->get('have_team'),
        ]);
    }

    public function registration(FormRequest $request)
    {
        if (User::where('email', $request->get('email'))->first() !== null) {
            throw (new ApiException('Такой пользователь уже существует !'))->withStatus(500);
        }

        return User::create([
            'email' => $request->get('email'),
            'status' => 'registered',
            'first_name' => $request->get('first_name'),
            'last_name' => $request->get('last_name'),
            'middle_name' => $request->get('middle_name'),
            'phone' => $request->get('phone'),
            'password' => bcrypt($request->get('password')),
        ]);
    }
}

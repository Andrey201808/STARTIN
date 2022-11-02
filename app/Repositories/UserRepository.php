<?php

namespace App\Repositories;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;

class UserRepository
{
    public function registration(FormRequest $request)
    {
//        if (User::where('email', $request->get('email'))->first() == null) {
//            throw new
//        }

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

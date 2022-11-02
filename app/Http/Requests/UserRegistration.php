<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRegistration extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'first_name' => 'string|min:2|max:45|required',
            'last_name' => 'string|min:2|max:45|required',
            'middle_name' => 'string|min:2|max:45|required',
            'email' => 'email|required',
            'phone' => 'min:10|max:20',
            'password' => 'required|min:5|max:100'
        ];
    }
}

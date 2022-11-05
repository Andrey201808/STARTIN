<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserProject extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function userCrew()
    {
        return $this->hasMany(UserCrew::class, 'user_project_id', 'id');
    }
}

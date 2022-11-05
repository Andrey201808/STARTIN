<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserCrew extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function userProject()
    {
        return $this->hasOne(UserProject::class, 'user_project_id');
    }
}

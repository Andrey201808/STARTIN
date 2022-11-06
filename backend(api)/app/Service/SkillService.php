<?php

namespace App\Service;

use App\Models\Skill;
use App\Models\UserSkill;
use Auth;

class SkillService
{
    public function updateSkills(array $skills)
    {
        $userSkills = Auth::user()->skills;

        foreach ($userSkills as $userSkill) {
            $userSkill->delete();
        }

        foreach ($skills as $skill) {
            $skillId = Skill::find($skill);

            if (!$skillId) {
                continue;
            }

            UserSkill::create([
                'user_id' => Auth::id(),
                'skill_id' => $skillId->id,
            ]);
        }
    }
}

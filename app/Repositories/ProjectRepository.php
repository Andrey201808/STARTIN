<?php

namespace App\Repositories;

use App\Exceptions\ApiException;
use App\Models\Project;
use App\Models\UserCrew;
use App\Models\UserProject;
use Illuminate\Foundation\Http\FormRequest;

class ProjectRepository
{
    public function createProject(FormRequest $request)
    {
        $mainProject = $this->getMainProject($request->get('project_id'));

        if (UserCrew::where(['user_id' => $request->user()->id, 'is_creator' => 0])->count() !== 0) {
            throw (new ApiException('Вы не можете создать команду, так как уже участвуете в одной из !'))->withStatus(500);
        }

        UserProject::create([
            'name' => $request->get('name'),
            'description' => $request->get('description'),
            'project_id' => $mainProject->id,
            'status' => 'draft',
            'invite_url' => md5(random_int(100, 100000)),
        ]);

    }

    protected function getMainProject(int $id)
    {
        $mainProject = Project::find($id);

        if (!$mainProject) {
            throw (new ApiException('Такого проекта не существует !'))->withStatus(500);
        }

        return $mainProject;
    }

    protected function getUserProject(mixed $userProjectId, string $table)
    {
        $userProject = UserProject::where($table, $userProjectId)->first();

        if (!$userProject) {
            throw (new ApiException('Такого проекта от пользователя не существует !'))->withStatus(500);
        }

        return $userProject;
    }

    public function joinToProject(FormRequest $request)
    {
        $userProject = $this->getUserProject($request->get('inviteCode'), 'invite_url');

        if (UserCrew::where(['user_id' => $request->user()->id])->count() !== 0) {
            throw (new ApiException('Вы не можете присоединиться к команде, так как уже участвуете в одной из !'))->withStatus(500);
        }

        if ($userProject->status !== 'active'){
            throw (new ApiException('Вы не можете присоединиться к команде !'))->withStatus(500);
        }

        UserCrew::create([
            'user_project_id' => $userProject->id,
            'is_creator' => 0,
            'user_id' => $request->user()->id,
        ]);
    }

    public function publishProject(FormRequest $request)
    {
        $userProject = $this->getUserProject($request->get('user_project_id'), 'id');

        if ($userProject->status !== 'draft') {
            throw (new ApiException('Вы не можете опубликовать проект !'))->withStatus(500);
        }

        $userProject->status = 'published';
        $userProject->save();
    }

    public function deleteProject(FormRequest $request)
    {
        $userProject = $this->getUserProject($request->get('user_project_id'), 'id');

        if (UserCrew::where(['user_project_id' => $userProject->id, 'user_id' => $request->user()->id, 'is_creator' => 1])->count() === 0 || $userProject->status === 'delete') {
            throw (new ApiException('Вы не можете удалить проект !'))->withStatus(500);
        }

        $userProject->status = 'delete';
        $userProject->save();
    }
}

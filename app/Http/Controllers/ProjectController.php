<?php

namespace App\Http\Controllers;

use App\Helpers\Response;
use App\Http\Requests\CreateProject;
use App\Http\Requests\DeleteProject;
use App\Http\Requests\JoinProject;
use App\Http\Requests\PublishProject;
use App\Models\User;
use App\Models\UserProject;
use App\Repositories\ProjectRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProjectController extends Controller
{
    public function __construct(private ProjectRepository $projectRepository)
    {

    }

    public function publishProject(PublishProject $request)
    {
        $request->validated();

        $this->projectRepository->publishProject($request);

        return Response::responseOk([
            'message' => 'Вы успешно опубликовали проект !',
        ]);
    }

    public function deleteProject(DeleteProject $request)
    {
        $request->validated();

        $this->projectRepository->deleteProject($request);

        return Response::responseOk([
            'message' => 'Вы успешно удалили проект !',
        ]);
    }

    public function createProject(CreateProject $request)
    {
        $request->validated();

        $this->projectRepository->createProject($request);

        return Response::responseOk([
            'message' => 'Вы успешно создали проект !',
        ]);
    }

    public function getUserProjects(Request $request)
    {
        $userProjects = [];
        $userProjectsJoin = [];


        foreach ($request->user()->userCrew->where('is_creator', 1) as $userCrew) {
            $userProjects[] = UserProject::where('id', $userCrew->user_project_id)->get();
        }

        foreach ($request->user()->userCrew->where('is_creator', 0) as $userCrew) {
            $userProjectsJoin[] = UserProject::where('id', $userCrew->user_project_id)->get();
        }

        return Response::responseOk([
            'data' => [
              'userProject' => $userProjects,
              'userProjectJoin' => $userProjectsJoin,
            ],
        ]);
    }

    public function joinToProject(JoinProject $request)
    {
        $request->validated();

        $this->projectRepository->joinToProject($request);

        return Response::responseOk([
            'message' => 'Вы успешно присоединились к проекту !'
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AboutController extends Controller
{
    public function index(): Response
    {
        $team = [
            ['nama' => 'John Doe', 'posisi' => 'CEO', 'foto' => 'https://randomuser.me/api/portraits/men/1.jpg'],
            ['nama' => 'Jane Smith', 'posisi' => 'CTO', 'foto' => 'https://randomuser.me/api/portraits/women/2.jpg'],
            ['nama' => 'Mike Johnson', 'posisi' => 'Lead Developer', 'foto' => 'https://randomuser.me/api/portraits/men/3.jpg'],
            ['nama' => 'Emily Davis', 'posisi' => 'UI/UX Designer', 'foto' => 'https://randomuser.me/api/portraits/women/4.jpg']
        ];
        return Inertia::render('About', ['team' => $team]);
    }
}

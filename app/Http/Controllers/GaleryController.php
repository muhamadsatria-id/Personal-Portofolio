<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class GaleryController extends Controller
{
    public function index()
    {
        return Inertia::render('Galery', [
            'galleries' => [
                ['id' => 1, 'title' => 'E-Commerce Platform', 'category' => 'Web App', 'image' => 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600'],
                ['id' => 2, 'title' => 'Finance Dashboard', 'category' => 'UI/UX', 'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600'],
                ['id' => 3, 'title' => 'Mobile App UI', 'category' => 'Mobile', 'image' => 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600'],
                ['id' => 4, 'title' => 'Cloud Infrastructure', 'category' => 'DevOps', 'image' => 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600'],
            ],
        ]);
    }
}

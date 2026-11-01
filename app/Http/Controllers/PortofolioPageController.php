<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PortofolioPageController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('PortofolioPage');
    }

    public function show($id): Response
    {
        $project = [
            'id' => $id,
            'title' => "Alpine Lodge App",
            'subtitle' => "Luxury Resort Booking & Interactive Platform",
            'category' => "Web Development",
            'client' => "Alpine Group Switzerland",
            'year' => "2026",
            'role' => "Full-Stack Engineer",
            'previewUrl' => "https://example.com",
            'githubUrl' => "https://github.com",
            'featuredImage' => "https://cdn.21st.dev/assets/mirror/13/136a9ebd61301d447caa0b36be502f9ee34efbf02d3fc5b486d4e1b58665e325.jpg",
            'gallery' => [
                "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80",
                "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80"
            ],
            'technologies' => ["React", "Laravel", "Inertia.js", "Tailwind CSS", "MySQL"],
            'overview' => "Alpine Lodge App adalah platform booking resort bintang 5 yang dirancang untuk pengalaman pemesanan yang responsif, cepat, dan modern.",
            'challenge' => "Tantangan utamanya adalah menjaga performa pemuatan animasi yang halus tanpa memperlambat first contentful paint pada perangkat mobile.",
            'solution' => "Menggunakan integrasi React + Inertia.js untuk pengiriman prop yang efisien serta optimasi aset gambar secara otomatis."
        ];

        return Inertia::render('PortofolioDetailPage', [
            'project' => $project
        ]);
    }
}
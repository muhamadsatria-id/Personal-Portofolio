<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class BlogPageController extends Controller
{
    /**
     * Menampilkan daftar artikel blog.
     */
    public function index(): Response
    {
        // Jika nanti menggunakan database:
        // $popularPosts = Blog::where('is_popular', true)->get();
        // $recentPosts = Blog::latest()->get();

        return Inertia::render('BlogPage');
    }

    /**
     * Menampilkan detail artikel berdasarkan ID.
     */
    public function show($id): Response
    {
        // Jika nanti menggunakan database:
        // $post = Blog::findOrFail($id);

        // Contoh dummy data artikel berdasarkan ID
        $post = [
            'id' => $id,
            'title' => "Building Modern Web Applications with React & Inertia.js",
            'category' => "Web Development",
            'date' => "AUG 01, 2026",
            'readTime' => "8 min read",
            'views' => "2,180",
            'author' => [
                'name' => "Muhamad Satria",
                'role' => "Full-Stack & AI Engineer",
                'avatar' => "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
            ],
            'featuredImage' => "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80",
            'tags' => ["React", "Inertia.js", "Tailwind CSS", "Laravel"],
            'content' => "Developing modern web applications often comes with the trade-off of complex API layers..."
        ];

        return Inertia::render('BlogDetailPage', [
            'post' => $post
        ]);
    }
}
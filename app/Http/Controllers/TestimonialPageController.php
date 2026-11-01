<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TestimonialPageController extends Controller
{
    public function index(): Response
    {
        $testimonials = [
            ['nama' => 'John Doe', 'perusahaan' => 'ABC Corp', 'testimoni' => 'Sangat puas dengan layanan mereka!', 'foto' => 'https://randomuser.me/api/portraits/men/1.jpg'],
            ['nama' => 'Jane Smith', 'perusahaan' => 'XYZ Inc', 'testimoni' => 'Mereka membantu kami mencapai tujuan kami.', 'foto' => 'https://randomuser.me/api/portraits/women/2.jpg'],
            ['nama' => 'Mike Johnson', 'perusahaan' => 'Tech Solutions', 'testimoni' => 'Profesional dan sangat responsif.', 'foto' => 'https://randomuser.me/api/portraits/men/3.jpg'],
            ['nama' => 'Emily Davis', 'perusahaan' => 'Creative Agency', 'testimoni' => 'Hasilnya luar biasa!', 'foto' => 'https://randomuser.me/api/portraits/women/4.jpg']
        ];

        return Inertia::render('TestimonialPage', ['testimonials' => $testimonials]);
    }
}

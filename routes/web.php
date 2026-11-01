<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\LandingPageController;
use App\Http\Controllers\GaleryController;
use App\Http\Controllers\CertificatesController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\PortofolioPageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\BlogPageController;
// use App\Http\Controllers\TestimonialsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [LandingPageController::class, 'index'])->name('home');
Route::get('/about', [AboutController::class, 'index'])->name('about');
Route::get('/portofolio', [PortofolioPageController::class, 'index'])->name('portofolio.index');
Route::get('/portofolio/{id}', [PortofolioPageController::class, 'show'])->name('portofolio.show');
Route::get('/contact', [ContactController::class, 'index'])->name('contact');
Route::get('/blog', [BlogPageController::class, 'index'])->name('blog.index');
Route::get('/blog/{id}', [BlogPageController::class, 'show'])->name('blog.show');
// Route::get('/testimonials', [TestimonialsController::class, 'index'])->name('testimonials');






















// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

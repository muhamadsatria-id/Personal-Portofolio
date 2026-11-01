import React from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function PortofolioDetailPage({ project }) {
    // Fallback data jika props dari backend belum dikirim
    const defaultProject = {
        id: "01",
        title: "Alpine Lodge App",
        subtitle: "Luxury Resort Booking & Interactive Platform",
        category: "Web Development",
        client: "Alpine Group Switzerland",
        year: "2026",
        role: "Full-Stack Engineer",
        previewUrl: "https://example.com",
        githubUrl: "https://github.com",
        featuredImage: "https://cdn.21st.dev/assets/mirror/13/136a9ebd61301d447caa0b36be502f9ee34efbf02d3fc5b486d4e1b58665e325.jpg",
        gallery: [
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80"
        ],
        technologies: ["React", "Laravel", "Inertia.js", "Tailwind CSS", "MySQL"],
        overview: "Alpine Lodge App adalah platform booking resort bintang 5 yang dirancang untuk pengalaman pemesanan yang responsif, cepat, dan modern.",
        challenge: "Tantangan utamanya adalah menjaga performa pemuatan animasi yang halus tanpa memperlambat first contentful paint pada perangkat mobile.",
        solution: "Menggunakan integrasi React + Inertia.js untuk pengiriman prop yang efisien serta optimasi aset gambar secara otomatis."
    };

    const data = project || defaultProject;

    return (
        <MainLayout>
            <Head title={`${data.title} — Portofolio Detail`} />

            <div className="relative pt-32 pb-24 px-6 lg:px-20 select-none overflow-hidden">
                {/* Background Soft Glow */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
                    <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-[#3c83f6]/10 blur-[120px]"></div>
                    <div className="absolute top-2/3 -right-32 w-[500px] h-[500px] rounded-full bg-[#60a5fa]/12 blur-[120px]"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto space-y-10">
                    {/* Tombol Back */}
                    <div>
                        <Link
                            href="/portofolio"
                            className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-[#3c83f6] transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            <span>Back to Portofolio</span>
                        </Link>
                    </div>

                    {/* Header Section (Judul & Live Preview Button) */}
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                        <div>
                            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#1e3a8a] tracking-tight leading-[1.08]">
                                {data.title}
                            </h1>
                            <p className="mt-3 text-lg sm:text-xl text-slate-600 font-medium">
                                {data.subtitle}
                            </p>
                        </div>

                        {data.previewUrl && (
                            <a
                                href={data.previewUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center space-x-2.5 px-7 py-3.5 rounded-full font-bold text-sm bg-[#3c83f6] text-white hover:bg-blue-600 shadow-md shadow-blue-500/20 active:scale-95 transition-all shrink-0 cursor-pointer"
                            >
                                <span>Live Preview</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        )}
                    </div>

                    {/* Featured Image dengan Header Gaya macOS (Tiga Lingkaran Merah, Kuning, Hijau) */}
                    <div className="rounded-3xl overflow-hidden border border-slate-200/80 shadow-lg bg-white/80 backdrop-blur-md">
                        <div className="flex items-center space-x-2 px-5 py-3.5 bg-slate-100/90 border-b border-slate-200/80">
                            <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm"></div>
                            <div className="w-3 h-3 rounded-full bg-amber-500 shadow-sm"></div>
                            <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-sm"></div>
                            <span className="ml-2 text-xs font-mono font-semibold text-slate-400">preview-window</span>
                        </div>
                        <div className="aspect-video relative overflow-hidden">
                            <img
                                src={data.featuredImage}
                                alt={data.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Content Section: Overview/Deskripsi (Kiri) & Sidebar Gabungan Metadata + Tech (Kanan) */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-4">
                        {/* Deskripsi Proyek */}
                        <div className="lg:col-span-8 space-y-8 text-slate-700 leading-relaxed font-normal">
                            <div>
                                <h2 className="text-2xl font-bold text-[#1e3a8a] mb-3">Project Overview</h2>
                                <p className="text-base text-slate-600 leading-relaxed font-medium">
                                    {data.overview}
                                </p>
                            </div>

                            {data.challenge && (
                                <div>
                                    <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">The Challenge</h3>
                                    <p className="text-base text-slate-600 leading-relaxed font-medium">
                                        {data.challenge}
                                    </p>
                                </div>
                            )}

                            {data.solution && (
                                <div>
                                    <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">The Solution</h3>
                                    <p className="text-base text-slate-600 leading-relaxed font-medium">
                                        {data.solution}
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Sidebar: Gabungan Client, Category, Role, Year, & Technologies Used */}
                        <div className="lg:col-span-4">
                            <div className="p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
                                {/* Header macOS Control Dots di Card Sidebar */}
                                <div className="flex items-center space-x-2 pb-3 border-b border-slate-200/60">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                                    <span className="text-xs font-mono font-medium text-slate-400 ml-1">info</span>
                                </div>

                                {/* Metadata List */}
                                <div className="space-y-4">
                                    <div>
                                        <span className="block text-xs font-bold uppercase tracking-wider text-[#3c83f6]">Client</span>
                                        <span className="text-sm font-bold text-[#1e3a8a] mt-0.5 block">{data.client}</span>
                                    </div>
                                    <div>
                                        <span className="block text-xs font-bold uppercase tracking-wider text-[#3c83f6]">Category</span>
                                        <span className="text-sm font-bold text-[#1e3a8a] mt-0.5 block">{data.category}</span>
                                    </div>
                                    <div>
                                        <span className="block text-xs font-bold uppercase tracking-wider text-[#3c83f6]">Role</span>
                                        <span className="text-sm font-bold text-[#1e3a8a] mt-0.5 block">{data.role}</span>
                                    </div>
                                    <div>
                                        <span className="block text-xs font-bold uppercase tracking-wider text-[#3c83f6]">Year</span>
                                        <span className="text-sm font-bold text-[#1e3a8a] mt-0.5 block">{data.year}</span>
                                    </div>
                                </div>

                                <hr className="border-slate-200/60" />

                                {/* Technologies Used */}
                                <div className="space-y-3">
                                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#3c83f6]">
                                        Technologies Used
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {data.technologies && data.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 rounded-full text-xs font-semibold bg-white border border-slate-200 text-[#1e3a8a] shadow-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Gallery Screenshots (Juga Menggunakan Frame macOS Window) */}
                    {data.gallery && data.gallery.length > 0 && (
                        <div className="space-y-6 pt-6">
                            <h3 className="text-xl font-bold text-[#1e3a8a]">Project Screenshots</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {data.gallery.map((img, idx) => (
                                    <div key={idx} className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm bg-white/80">
                                        <div className="flex items-center space-x-1.5 px-4 py-2.5 bg-slate-100/90 border-b border-slate-200/80">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                                        </div>
                                        <div className="aspect-video">
                                            <img src={img} alt={`Screenshot ${idx + 1}`} className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </MainLayout>
    );
}
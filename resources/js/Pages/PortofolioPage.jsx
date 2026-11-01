import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function PortofolioPage({ projects = [] }) {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = [
        'All',
        'Mobile App',
        'Web Development',
        'AI Integration',
        'Infrastructure & IoT'
    ];

    const defaultProjects = [
        {
            id: "1",
            title: "Alpine Lodge App",
            category: "Web Development",
            location: "Laravel & React",
            src: "https://cdn.21st.dev/assets/mirror/13/136a9ebd61301d447caa0b36be502f9ee34efbf02d3fc5b486d4e1b58665e325.jpg",
            alt: "Alpine Lodge Project",
        },
        {
            id: "2",
            title: "AI Automation Agent",
            category: "AI Integration",
            location: "Python & LangChain",
            src: "https://cdn.21st.dev/assets/mirror/29/2960d6713f067e764e9d6dc6efda70bf3bd5f4565622a172b66e322db6dd2e92.jpg",
            alt: "AI Automation Project",
        },
        {
            id: "3",
            title: "Coastal Villa Platform",
            category: "Mobile App",
            location: "Flutter & Firebase",
            src: "https://cdn.21st.dev/assets/mirror/49/49bbd3006839a54893ff0c73dfe07e05210806d2805413d9440b3d8cc9bcfd95.jpg",
            alt: "Coastal Villa Project",
        },
        {
            id: "4",
            title: "Smart Logistics Dashboard",
            category: "Infrastructure & IoT",
            location: "MikroTik & Node.js",
            src: "https://cdn.21st.dev/assets/mirror/3e/3ec3530692fd0fdaf48ea23992a81be8e1a179245feb0f34962e69967765f861.jpg",
            alt: "Logistics Dashboard Project",
        },
    ];

    const displayProjects = projects.length > 0 ? projects : defaultProjects;

    const filteredProjects = displayProjects.filter((item) => {
        if (selectedCategory === 'All') return true;
        return item.category === selectedCategory;
    });

    return (
        <MainLayout>
            <Head title="Portofolio — Muhamad Satria" />

            <div className="relative pt-32 pb-24 px-6 lg:px-20 select-none overflow-hidden">
                <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
                    <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-[#3c83f6]/10 blur-[120px]"></div>
                    <div className="absolute bottom-10 -left-32 w-[500px] h-[500px] rounded-full bg-[#60a5fa]/12 blur-[120px]"></div>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
                        <div>
                            <span className="text-sm font-semibold tracking-wider text-[#3c83f6] block mb-2">
                                - Portofolio
                            </span>
                            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#1e3a8a] tracking-tight leading-[1.08]">
                                All Showcase Projects
                            </h1>
                        </div>
                        <p className="text-base sm:text-lg text-slate-600 font-medium max-w-md leading-relaxed">
                            A complete showcase of my featured works including full-stack web applications, mobile software, and intelligent AI automation systems.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5 mb-10">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm outline-none cursor-pointer ${
                                    selectedCategory === cat
                                        ? 'bg-[#3c83f6] text-white border border-[#3c83f6] shadow-md scale-105'
                                        : 'bg-white text-slate-700 border border-white hover:border-[#3c83f6]/50 hover:text-[#1e3a8a] hover:-translate-y-0.5'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-col border-t border-b border-slate-200/80 divide-y divide-slate-200/80">
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map((item, index) => {
                                const formattedId = item.id ? String(item.id).padStart(2, '0') : String(index + 1).padStart(2, '0');
                                const targetId = item.id || (index + 1);

                                return (
                                    <Link
                                        key={item.id || index}
                                        href={`/portofolio/${targetId}`}
                                        className="group relative flex w-full cursor-pointer flex-col justify-center overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] h-24 md:hover:h-[380px]"
                                    >
                                        <div className="absolute inset-0 z-0 h-full w-full opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100">
                                            <img
                                                src={item.src || item.image}
                                                alt={item.alt || item.title}
                                                className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-100 scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-slate-950/10" />
                                        </div>

                                        <div className="relative z-10 flex w-full items-center justify-between px-4 sm:px-8 lg:px-10">
                                            <div className="flex items-center gap-6 md:gap-10">
                                                <span className="font-mono text-sm sm:text-base font-bold text-[#3c83f6] transition-colors duration-500 group-hover:text-white/80">
                                                    {formattedId}
                                                </span>

                                                <div className="flex flex-col">
                                                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-[#1e3a8a] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-1 group-hover:text-white">
                                                        {item.title}
                                                    </h3>
                                                    <span className="block text-xs font-semibold uppercase tracking-widest text-slate-500 group-hover:text-white/70 md:hidden mt-1 transition-colors">
                                                        {item.category} • {item.location}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-4 md:gap-8">
                                                <span className="hidden translate-y-6 text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-600 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:text-white group-hover:opacity-100 md:block">
                                                    {item.category} • {item.location}
                                                </span>

                                                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300/80 bg-white/70 backdrop-blur-sm text-slate-700 transition-all duration-500 group-hover:border-[#3c83f6] group-hover:bg-[#3c83f6] group-hover:text-white group-hover:scale-110 shadow-sm">
                                                    <svg className="h-5 w-5 transition-transform duration-500 group-hover:-rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })
                        ) : (
                            <div className="py-16 text-center text-slate-500 font-medium">
                                No projects found for this category.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
import React from 'react';
import { Link } from '@inertiajs/react';

export default function GallerySection({ items = [] }) {
    // Data bawaan jika props items tidak diberikan
    const defaultItems = [
        {
            id: "01",
            title: "Alpine Lodge",
            category: "Switzerland",
            src: "https://cdn.21st.dev/assets/mirror/13/136a9ebd61301d447caa0b36be502f9ee34efbf02d3fc5b486d4e1b58665e325.jpg",
            alt: "Snowy mountains",
        },
        {
            id: "02",
            title: "Desert Oasis",
            category: "Morocco",
            src: "https://cdn.21st.dev/assets/mirror/29/2960d6713f067e764e9d6dc6efda70bf3bd5f4565622a172b66e322db6dd2e92.jpg",
            alt: "Desert dunes",
        },
        {
            id: "03",
            title: "Coastal Villa",
            category: "Amalfi Coast",
            src: "https://cdn.21st.dev/assets/mirror/49/49bbd3006839a54893ff0c73dfe07e05210806d2805413d9440b3d8cc9bcfd95.jpg",
            alt: "Coastal view",
        },
        {
            id: "04",
            title: "Urban Loft",
            category: "New York",
            src: "https://cdn.21st.dev/assets/mirror/3e/3ec3530692fd0fdaf48ea23992a81be8e1a179245feb0f34962e69967765f861.jpg",
            alt: "City skyline",
        },
    ];

    const displayItems = items.length > 0 ? items : defaultItems;

    return (
        <section id="portofolio" className="relative py-20 lg:py-28 px-6 lg:px-20 bg-[#f0f9ff] text-slate-900 overflow-hidden">
            {/* Background Soft Glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-[#3c83f6]/10 blur-[120px]"></div>
                <div className="absolute bottom-10 -left-32 w-[500px] h-[500px] rounded-full bg-[#60a5fa]/12 blur-[120px]"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Header Layout */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <span className="text-sm font-semibold tracking-wider text-[#3c83f6] block mb-2">
                            - Portofolio
                        </span>
                        <h2 className="text-4xl sm:text-6xl font-extrabold text-[#1e3a8a] tracking-tight leading-[1.08]">
                            Selected Works
                        </h2>
                    </div>
                    <p className="text-base text-slate-600 font-medium max-w-md">
                        Explore featured projects showcasing modern web development, mobile apps, and AI integrations.
                    </p>
                </div>

                {/* List Interactive Items */}
                <div className="flex flex-col border-t border-b border-slate-200/80 divide-y divide-slate-200/80">
                    {displayItems.map((item, index) => {
                        const formattedId = item.id || String(index + 1).padStart(2, '0');
                        return (
                            <div
                                key={item.id || index}
                                className="group relative flex w-full cursor-pointer flex-col justify-center overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] h-24 md:hover:h-[380px]"
                            >
                                {/* --- Background Image Layer --- */}
                                <div className="absolute inset-0 z-0 h-full w-full opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100">
                                    <img
                                        src={item.src || item.image}
                                        alt={item.alt || item.title}
                                        className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-100 scale-110"
                                    />
                                    {/* Gradient Overlay untuk keterbacaan teks */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-slate-950/10" />
                                </div>

                                {/* --- Content Layer --- */}
                                <div className="relative z-10 flex w-full items-center justify-between px-4 sm:px-8 lg:px-10">
                                    {/* Left Side: ID & Title */}
                                    <div className="flex items-center gap-6 md:gap-10">
                                        <span className="font-mono text-sm sm:text-base font-bold text-[#3c83f6] transition-colors duration-500 group-hover:text-white/80">
                                            {formattedId}
                                        </span>

                                        <div className="flex flex-col">
                                            <h3 className="text-2xl sm:text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-[#1e3a8a] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-1 group-hover:text-white">
                                                {item.title}
                                            </h3>
                                            {/* Subtitle / Category on Mobile */}
                                            <span className="block text-xs font-semibold uppercase tracking-widest text-slate-500 group-hover:text-white/70 md:hidden mt-1 transition-colors">
                                                {item.category || item.location}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Right Side: Category & Arrow Icon */}
                                    <div className="flex items-center gap-4 md:gap-8">
                                        {/* Category / Location (Slide in on Desktop Hover) */}
                                        <span className="hidden translate-y-6 text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-600 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:text-white group-hover:opacity-100 md:block">
                                            {item.category || item.location}
                                        </span>

                                        {/* Icon Circle */}
                                        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300/80 bg-white/70 backdrop-blur-sm text-slate-700 transition-all duration-500 group-hover:border-[#3c83f6] group-hover:bg-[#3c83f6] group-hover:text-white group-hover:scale-110 shadow-sm">
                                            <svg className="h-5 w-5 transition-transform duration-500 group-hover:-rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Tombol View All Projects */}
                <div className="mt-12 flex justify-center">
                    <Link
                        href="/portofolio"
                        className="group relative inline-flex items-center space-x-3 px-8 py-3.5 rounded-full font-semibold text-sm bg-white/80 text-[#1e3a8a] border border-slate-300/80 hover:border-[#3c83f6] hover:bg-[#3c83f6] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-95"
                    >
                        <span>View All Projects</span>
                        <svg 
                            className="w-4 h-4 text-[#3c83f6] group-hover:text-white transition-all duration-300 group-hover:translate-x-1" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
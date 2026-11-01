import React from 'react';
import { Link } from '@inertiajs/react';

export default function NewBlog({ popularPosts = [] }) {
    const defaultPopular = [
        {
            id: 1,
            title: "Building Modern Web Applications with React",
            category: "Web Development",
            views: "2,180",
            readTime: "8 min read",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1000&q=80",
        },
        {
            id: 2,
            title: "Advanced TypeScript Patterns",
            category: "Programming",
            views: "1,456",
            readTime: "12 min read",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 3,
            title: "Design System Best Practices",
            category: "UI/UX Design",
            views: "987",
            readTime: "6 min read",
            image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
        }
    ];

    const popularList = popularPosts.length > 0 ? popularPosts : defaultPopular;
    const featuredMain = popularList[0];
    const featuredSecondary = popularList.slice(1, 3);

    return (
        <section className="space-y-12">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <span className="text-sm font-semibold tracking-wider text-[#3c83f6] block mb-2">
                        - Featured Insights
                    </span>
                    <h1 className="text-4xl sm:text-6xl font-extrabold text-[#1e3a8a] tracking-tight leading-[1.08]">
                        Our Most Popular <br className="hidden sm:block" /> Articles Of 2026!
                    </h1>
                </div>
                <p className="text-base sm:text-lg text-slate-600 font-medium max-w-md leading-relaxed">
                    Discover the most engaging content from our amazing community of developers and designers.
                </p>
            </div>

            {/* Grid Card Layout (1 Utama Kiri, 2 Bertumpuk Kanan) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                
                {/* Card Utama Besar (Kiri) */}
                {featuredMain && (
                    <Link
                        href={`/blog/${featuredMain.id}`}
                        className="group relative lg:col-span-7 min-h-[380px] sm:min-h-[440px] rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 flex flex-col justify-end p-6 sm:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                    >
                        {/* Gambar & Gradient Backdrop */}
                        <img
                            src={featuredMain.image}
                            alt={featuredMain.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

                        {/* Konten Card */}
                        <div className="relative z-10 space-y-4">
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight group-hover:text-blue-200 transition-colors">
                                {featuredMain.title}
                            </h2>

                            <div>
                                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-white border border-white/20">
                                    {featuredMain.category}
                                </span>
                            </div>

                            <div className="flex items-center justify-between pt-3 text-xs sm:text-sm text-slate-300 font-medium border-t border-white/15">
                                {/* Icon Mata + Jumlah View */}
                                <div className="flex items-center space-x-2 text-white/90">
                                    <svg className="w-4 h-4 text-[#60a5fa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                    <span>{featuredMain.views} Views</span>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <span>{featuredMain.readTime}</span>
                                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#3c83f6] group-hover:text-white transition-all">
                                        <svg className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                )}

                {/* Card Kecil Bertumpuk (Kanan) */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                    {featuredSecondary.map((item) => (
                        <Link
                            key={item.id}
                            href={`/blog/${item.id}`}
                            className="group relative flex-1 min-h-[200px] rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 flex flex-col justify-end p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

                            <div className="relative z-10 space-y-3">
                                <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight group-hover:text-blue-200 transition-colors">
                                    {item.title}
                                </h3>

                                <div>
                                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-white border border-white/20">
                                        {item.category}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between pt-2.5 text-xs text-slate-300 font-medium border-t border-white/15">
                                    {/* Icon Mata + Jumlah View */}
                                    <div className="flex items-center space-x-1.5 text-white/90">
                                        <svg className="w-3.5 h-3.5 text-[#60a5fa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        <span>{item.views} Views</span>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <span>{item.readTime}</span>
                                        <div className="w-7 h-7 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#3c83f6] group-hover:text-white transition-all">
                                            <svg className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
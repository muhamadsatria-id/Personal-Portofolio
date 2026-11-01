import React from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function BlogDetailPage({ post }) {
    // Data contoh jika props dari backend Laravel belum tersedia
    const defaultPost = {
        title: "Building Modern Web Applications with React & Inertia.js",
        category: "Web Development",
        date: "AUG 01, 2026",
        readTime: "8 min read",
        views: "2,180",
        author: {
            name: "Muhamad Satria",
            role: "Full-Stack & AI Engineer",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
        },
        featuredImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80",
        tags: ["React", "Inertia.js", "Tailwind CSS", "Laravel"],
        content: `
            <p className="text-lg text-slate-700 leading-relaxed font-medium">
                Developing modern web applications often comes with the trade-off of complex API layers and state management boilerplate. Inertia.js bridges the gap between traditional server-side routing and modern single-page applications.
            </p>
            
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a8a] mt-10 mb-4">
                Why Inertia.js and React Make a Great Pair
            </h2>
            
            <p className="text-slate-600 leading-relaxed">
                With Inertia.js, you don't need to build a RESTful or GraphQL API. You can simply write standard Laravel controllers, query database data, and render React components directly with props. This drastically speeds up development time while keeping full SPA reactivity.
            </p>
            
            <blockquote className="my-8 p-6 bg-white/70 backdrop-blur-sm border-l-4 border-[#3c83f6] rounded-r-2xl text-slate-700 font-medium italic shadow-sm">
                "Inertia allows you to build single-page React apps without the complexity of modern client-side routing and REST API management."
            </blockquote>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a8a] mt-10 mb-4">
                Structuring Code for Performance
            </h2>

            <p className="text-slate-600 leading-relaxed">
                When building portofolio websites or SaaS platforms, modular component design ensures UI consistency across all pages. Combining custom Tailwind CSS utility classes with React layout components allows seamless color scheme synchronization.
            </p>
        `
    };

    const article = post || defaultPost;

    return (
        <MainLayout>
            <Head title={`${article.title} — Blog`} />

            <article className="relative pt-32 pb-24 px-6 lg:px-20 overflow-hidden">
                {/* Background Soft Glow */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
                    <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-[#3c83f6]/10 blur-[120px]"></div>
                    <div className="absolute top-2/3 -right-32 w-[500px] h-[500px] rounded-full bg-[#60a5fa]/12 blur-[120px]"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto space-y-10">
                    
                    {/* Tombol Kembali ke Halaman Blog */}
                    <div>
                        <Link
                            href="/blog"
                            className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-[#3c83f6] transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            <span>Back to Articles</span>
                        </Link>
                    </div>

                    {/* Metadata & Title */}
                    <header className="space-y-6">
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-[#3c83f6]/15 text-[#3c83f6] border border-[#3c83f6]/20">
                                {article.category}
                            </span>
                            <span className="text-xs font-mono font-medium text-slate-400">•</span>
                            <span className="text-xs font-mono font-medium text-slate-500">{article.date}</span>
                            <span className="text-xs font-mono font-medium text-slate-400">•</span>
                            <span className="text-xs font-mono font-medium text-slate-500">{article.readTime}</span>
                            <span className="text-xs font-mono font-medium text-slate-400">•</span>
                            <div className="flex items-center space-x-1.5 text-xs font-mono font-medium text-slate-500">
                                <svg className="w-3.5 h-3.5 text-[#3c83f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                <span>{article.views} Views</span>
                            </div>
                        </div>

                        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1e3a8a] tracking-tight leading-[1.12]">
                            {article.title}
                        </h1>

                        {/* Author Info */}
                        <div className="flex items-center space-x-4 pt-2 border-t border-slate-200/80">
                            <img
                                src={article.author.avatar}
                                alt={article.author.name}
                                className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-sm shrink-0"
                            />
                            <div>
                                <h3 className="text-sm font-bold text-[#1e3a8a]">
                                    {article.author.name}
                                </h3>
                                <p className="text-xs font-medium text-slate-500">
                                    {article.author.role}
                                </p>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <div className="rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 aspect-video relative">
                        <img
                            src={article.featuredImage}
                            alt={article.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Article Body */}
                    <div className="prose prose-slate max-w-none space-y-6 pt-4 text-slate-700 leading-relaxed font-normal">
                        <p className="text-lg text-slate-700 leading-relaxed font-medium">
                            Developing modern web applications often comes with the trade-off of complex API layers and state management boilerplate. Inertia.js bridges the gap between traditional server-side routing and modern single-page applications.
                        </p>
                        
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a8a] mt-10 mb-4">
                            Why Inertia.js and React Make a Great Pair
                        </h2>
                        
                        <p className="text-slate-600 leading-relaxed">
                            With Inertia.js, you don't need to build a RESTful or GraphQL API. You can simply write standard Laravel controllers, query database data, and render React components directly with props. This drastically speeds up development time while keeping full SPA reactivity.
                        </p>
                        
                        <blockquote className="my-8 p-6 bg-white/70 backdrop-blur-sm border-l-4 border-[#3c83f6] rounded-r-2xl text-slate-700 font-medium italic shadow-sm">
                            "Inertia allows you to build single-page React apps without the complexity of modern client-side routing and REST API management."
                        </blockquote>

                        <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a8a] mt-10 mb-4">
                            Structuring Code for Performance
                        </h2>

                        <p className="text-slate-600 leading-relaxed">
                            When building portofolio websites or SaaS platforms, modular component design ensures UI consistency across all pages. Combining custom Tailwind CSS utility classes with React layout components allows seamless color scheme synchronization.
                        </p>
                    </div>

                    {/* Tags & Footer Bar */}
                    <footer className="pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">
                                Tags:
                            </span>
                            {article.tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-600 shadow-sm"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        {/* Back Link */}
                        <Link
                            href="/blog"
                            className="inline-flex items-center space-x-2 text-xs font-bold text-[#3c83f6] hover:underline"
                        >
                            <span>Explore more articles</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </footer>

                </div>
            </article>
        </MainLayout>
    );
}
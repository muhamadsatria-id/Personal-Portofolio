import React from 'react';
import { Link } from '@inertiajs/react';

export default function BlogList({ articles = [] }) {
    const defaultRecent = [
        {
            id: 1,
            number: "01",
            readTime: "6m",
            title: "Rethinking the render loop",
            subtitle: "Why we moved every hot path off React state.",
            date: "AUG 01",
            active: true
        },
        {
            id: 2,
            number: "02",
            readTime: "4m",
            title: "Tokens all the way down",
            subtitle: "Colors, spacing and motion from one source.",
            date: "JUL 24",
            active: false
        },
        {
            id: 3,
            number: "03",
            readTime: "9m",
            title: "The gate that caught us",
            subtitle: "A postmortem on a clipped popover shipping green.",
            date: "JUL 18",
            active: false
        },
        {
            id: 4,
            number: "04",
            readTime: "3m",
            title: "Reduced motion is not optional",
            subtitle: "A static first frame, every time.",
            date: "JUL 09",
            active: false
        },
        {
            id: 5,
            number: "05",
            readTime: "5m",
            title: "Canvas over CSS, sometimes",
            subtitle: "When a rAF loop earns its keep.",
            date: "JUN 30",
            active: false
        }
    ];

    const articlesList = articles.length > 0 ? articles : defaultRecent;

    return (
        <section className="space-y-10">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <span className="text-sm font-semibold tracking-wider text-[#3c83f6] block mb-2">
                        - All Articles
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1e3a8a] tracking-tight leading-[1.08]">
                        Latest Engineering Thoughts
                    </h2>
                </div>
                <p className="text-base text-slate-600 font-medium max-w-md leading-relaxed">
                    Explorations in software engineering, UI design systems, and state management.
                </p>
            </div>

            {/* List Minimalis Berpembatas Garis (Tanpa Border Card Putih) */}
            <div className="border-t border-b border-slate-200/80 divide-y divide-slate-200/80">
                {articlesList.map((article, index) => (
                    <Link
                        key={article.id || index}
                        href={`/blog/${article.id || index + 1}`}
                        className="group flex flex-col sm:flex-row sm:items-center justify-between py-6 px-4 sm:px-6 gap-4 sm:gap-6 hover:bg-white/40 transition-all duration-300 rounded-2xl"
                    >
                        {/* Bagian Kiri: Nomor & Indicator Waktu */}
                        <div className="flex items-center space-x-6 shrink-0">
                            <span className="font-mono text-sm font-bold text-slate-400 group-hover:text-[#1e3a8a] transition-colors w-6">
                                {article.number}
                            </span>

                            <div className="flex items-center space-x-2 bg-slate-200/60 group-hover:bg-[#3c83f6]/15 px-3 py-1 rounded-full transition-colors">
                                <div className={`h-2.5 w-1.5 rounded-full ${article.active ? 'bg-[#3c83f6]' : 'bg-slate-400 group-hover:bg-[#3c83f6]'}`}></div>
                                <span className="font-mono text-xs font-semibold text-slate-700 group-hover:text-[#1e3a8a]">
                                    {article.readTime}
                                </span>
                            </div>

                            <svg className="w-4 h-4 text-[#3c83f6] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>

                        {/* Bagian Tengah: Judul & Subtitle */}
                        <div className="flex-1 space-y-1">
                            <h3 className="text-lg sm:text-xl font-bold text-[#1e3a8a] group-hover:text-[#3c83f6] transition-colors">
                                {article.title}
                            </h3>
                            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                                {article.subtitle}
                            </p>
                        </div>

                        {/* Bagian Kanan: Tanggal */}
                        <div className="shrink-0 self-start sm:self-center">
                            <span className="font-mono text-xs sm:text-sm font-bold tracking-wider text-slate-400 group-hover:text-[#1e3a8a] transition-colors">
                                {article.date}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
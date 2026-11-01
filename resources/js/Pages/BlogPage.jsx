import React from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import NewBlog from '@/Components/NewBlog';
import BlogList from '@/Components/BlogList';

export default function BlogPage({ popularPosts = [], recentPosts = [] }) {
    return (
        <MainLayout>
            <Head title="Blog — Insights & Articles" />

            <div className="relative pt-32 pb-24 px-6 lg:px-20 select-none overflow-hidden">
                {/* Background Soft Glow (Konsisten dengan Seluruh Halaman) */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
                    <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-[#3c83f6]/10 blur-[120px]"></div>
                    <div className="absolute top-2/3 -right-32 w-[500px] h-[500px] rounded-full bg-[#60a5fa]/12 blur-[120px]"></div>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto space-y-20 lg:space-y-28">
                    {/* Komponen 1: Our Most Popular Articles */}
                    <NewBlog popularPosts={popularPosts} />

                    {/* Komponen 2: Latest Engineering Thoughts */}
                    <BlogList articles={recentPosts} />
                </div>
            </div>
        </MainLayout>
    );
}
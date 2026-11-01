import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const { url } = usePage();

    // Menu navigasi
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Portofolio', href: '/portofolio' },
        { name: 'Blog', href: '/blog' },
    ];

    const isActive = (path) => {
        if (path === '/') return url === '/';
        return url.startsWith(path);
    };

    const isContactActive = isActive('/contact');

    return (
        <header className="fixed top-0 inset-x-0 z-50">
            {/* 1. DESKTOP NAVBAR (Posisikan di ujung kanan dengan justify-end) */}
            <div className="hidden md:flex justify-end pt-5 px-6 lg:px-12 pointer-events-auto">
                <nav className="w-full max-w-fit bg-white/80 backdrop-blur-md border border-slate-200 shadow-lg shadow-slate-900/5 rounded-full px-4 py-2 flex items-center space-x-2 transition-all">
                    <div className="flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                                    isActive(link.href)
                                        ? 'bg-[#3c83f6] text-white shadow-sm font-semibold'
                                        : 'text-slate-600 hover:text-[#3c83f6] hover:bg-slate-100/60'
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Pembatas Garis Tipis */}
                    <div className="h-4 w-[1px] bg-slate-200 mx-1"></div>

                    {/* Button CTA Let's discussion (Desktop) */}
                    <Link
                        href="/contact"
                        className={`text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 shadow-md ${
                            isContactActive
                                ? 'bg-[#3c83f6] text-white ring-2 ring-blue-300'
                                : 'bg-[#3c83f6] text-white hover:bg-blue-600 hover:shadow-blue-500/20 active:scale-95'
                        }`}
                    >
                        Let's discussion
                    </Link>
                </nav>
            </div>

            {/* 2. MOBILE TOGGLE BUTTON */}
            <div className="md:hidden fixed top-5 right-5 z-[60]">
                <button
                    onClick={() => setOpen(!open)}
                    className="p-3.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 shadow-md text-slate-800 active:scale-90 transition-transform duration-200 focus:outline-none"
                    aria-label="Toggle Navigation"
                >
                    {open ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* 3. MOBILE MENU FULLSCREEN OVERLAY */}
            <div
                className={`md:hidden fixed inset-0 z-50 bg-[#f0f9ff]/95 backdrop-blur-2xl flex flex-col justify-center items-center px-8 transition-all duration-300 ease-in-out ${
                    open
                        ? 'opacity-100 pointer-events-auto scale-100'
                        : 'opacity-0 pointer-events-none scale-95'
                }`}
            >
                <div className="flex flex-col items-center space-y-6 w-full max-w-xs text-center">
                    {navLinks.map((link, index) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            style={{ transitionDelay: open ? `${index * 50}ms` : '0ms' }}
                            className={`text-3xl font-extrabold tracking-wide transition-all duration-300 transform ${
                                open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                            } ${
                                isActive(link.href)
                                    ? 'text-[#3c83f6] scale-110'
                                    : 'text-slate-700 hover:text-[#3c83f6] hover:scale-105'
                            }`}
                        >
                            {link.name}
                            {isActive(link.href) && (
                                <div className="h-1 w-8 bg-[#3c83f6] rounded-full mx-auto mt-2"></div>
                            )}
                        </Link>
                    ))}

                    {/* Button CTA Let's discussion (Mobile) */}
                    <div
                        style={{ transitionDelay: open ? `${navLinks.length * 50}ms` : '0ms' }}
                        className={`pt-4 w-full transition-all duration-300 transform ${
                            open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                        }`}
                    >
                        <Link
                            href="/contact"
                            onClick={() => setOpen(false)}
                            className="inline-block w-full py-4 px-6 bg-[#3c83f6] hover:bg-blue-600 text-white font-bold text-lg rounded-full shadow-lg shadow-blue-500/25 active:scale-95 transition-all"
                        >
                            Let's discussion
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
import React from 'react';

export default function Footer() {
    const socialLinks = [
        {
            name: 'LinkedIn',
            href: 'https://linkedin.com/in/muhamadsatria-id',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>
            )
        },
        {
            name: 'GitHub',
            href: 'https://github.com/muhamadsatria-id',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .3a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58v-2.02c-3.34.72-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.08 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .3"/></svg>
            )
        },
        {
            name: 'X (Twitter)',
            href: 'https://x.com/muhamadsatria_id',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            )
        },
        {
            name: 'Instagram',
            href: 'https://instagram.com/muhamadsatria.id',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.95c-3.15 0-3.5.01-4.74.07-.9.04-1.39.19-1.71.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.13.32-.28.81-.32 1.71-.06 1.24-.07 1.59-.07 4.74s.01 3.5.07 4.74c.04.9.19 1.39.32 1.71.17.43.37.74.69 1.06.32.32.63.52 1.06.69.32.13.81.28 1.71.32 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c.9-.04 1.39-.19 1.71-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.13-.32.28-.81.32-1.71.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.04-.9-.19-1.39-.32-1.71a2.85 2.85 0 0 0-.69-1.06 2.85 2.85 0 0 0-1.06-.69c-.32-.13-.81-.28-1.71-.32-1.24-.06-1.59-.07-4.74-.07zm0 3.32a4.57 4.57 0 1 1 0 9.14 4.57 4.57 0 0 1 0-9.14zm0 7.54a2.97 2.97 0 1 0 0-5.94 2.97 2.97 0 0 0 0 5.94zm5.82-7.74a1.07 1.07 0 1 1-2.14 0 1.07 1.07 0 0 1 2.14 0z"/></svg>
            )
        },
        {
            name: 'YouTube',
            href: 'https://youtube.com/@muhamadsatria-id',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg>
            )
        },
        {
            name: 'WhatsApp',
            href: 'https://wa.me/6281234567890',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.763.459 3.486 1.332 5.001L2 22l5.12-1.341c1.464.798 3.116 1.218 4.887 1.219h.005c5.507 0 9.991-4.479 9.992-9.986.001-2.668-1.036-5.176-2.923-7.062A9.924 9.924 0 0 0 12.012 2zm5.787 14.284c-.244.687-1.42 1.312-1.96 1.392-.497.073-1.144.103-3.32-.8-2.784-1.155-4.57-3.987-4.708-4.173-.138-.186-1.127-1.503-1.127-2.866 0-1.363.708-2.033.96-2.308.244-.265.534-.331.713-.331.18 0 .359.002.516.01.166.008.391-.063.612.467.226.541.768 1.874.836 2.011.068.138.114.298.023.48-.091.182-.138.298-.274.461-.137.162-.288.363-.411.488-.137.137-.28.286-.121.558.159.272.706 1.166 1.516 1.887 1.041.927 1.919 1.214 2.191 1.352.272.138.431.114.59-.068.159-.182.684-.796.866-1.069.182-.273.364-.227.612-.137.248.09 1.572.741 1.844.877.272.137.454.205.522.319.068.115.068.666-.176 1.353z"/></svg>
            )
        },
        {
            name: 'Dribbble',
            href: 'https://dribbble.com/muhamadsatria-id',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.1-3.69-.99-7.44-.45.39 1.08.77 2.19 1.11 3.33 3.63-1.22 5.98-2.61 6.33-2.88zM14.07 18.1c-.38-1.24-.81-2.45-1.25-3.62-5.06 1.44-9.66 1.4-10.02 1.4-.04.42-.07.84-.07 1.28 0 4.79 3.32 8.81 7.82 9.77-.12-2.18.5-5.69 3.52-8.83zm-3.32-5.23c-1.39-3.52-2.88-6.37-3.13-6.84-2.83 1.94-4.78 5.09-5.18 8.74.37.01 4.29.02 8.31-1.9zm1.09-2.52c3.78-.63 6.94.25 7.28.35a9.92 9.92 0 0 0-3.36-6.09c-.19.33-1.63 2.76-3.92 5.74zm4.49-6.99c2.37 1.69 4.02 4.3 4.49 7.31-.38-.11-3.08-.88-6.37-.32C15 7.87 15.82 5.38 16.33 3.36z"/></svg>
            )
        }
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-[#f0f9ff] text-slate-900 select-none">
            {/* 1. SVG Wave Layer di Atas (-mb-1 menghilangkan celah garis pixel) */}
            <div className="w-full overflow-hidden leading-none relative z-10 -mb-1">
                <svg
                    className="relative block w-full h-16 sm:h-24 lg:h-32"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,50 L1200,120 L0,120 Z"
                        fill="#3c83f6"
                        fillOpacity="0.25"
                    />
                    <path
                        d="M0,20 C200,80 450,10 700,70 C950,130 1100,30 1200,40 L1200,120 L0,120 Z"
                        fill="#1e3a8a"
                    />
                </svg>
            </div>

            {/* 2. Area Utama Footer Berwarna Biru Tua (#1e3a8a) */}
            <div className="bg-[#1e3a8a] text-white relative z-10 pt-4 pb-12 px-6 lg:px-20">
                <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                    
                    {/* Ikon Media Sosial: Lingkaran Putih Polos & Ikon Biru Tua (#1e3a8a) */}
                    <div className="flex flex-wrap items-center justify-center gap-3.5 mb-8">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                                title={social.name}
                                className="w-10 h-10 rounded-full bg-white text-[#1e3a8a] hover:bg-[#3c83f6] hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-md flex items-center justify-center"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>

                    {/* Tombol Back to Top: Tanpa Border Sama Sekali */}
                    <button
                        onClick={scrollToTop}
                        className="mb-8 inline-flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase text-blue-100 hover:text-white bg-white/10 hover:bg-white/20 border-0 px-5 py-2.5 rounded-full transition-all duration-300 shadow-none cursor-pointer outline-none focus:outline-none"
                    >
                        <span>Back to top</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </button>

                    {/* Teks Hak Cipta */}
                    <p className="text-xs font-medium text-blue-200/75 tracking-wide">
                        © {new Date().getFullYear()} Muhamad Satria | All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}
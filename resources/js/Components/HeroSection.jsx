import React from "react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f0f9ff] text-slate-900 px-6 lg:px-20">

      {/* Decorative Background Layer (soft glow only, no grid) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#3c83f6]/12 blur-[120px] animate-[drift_14s_ease-in-out_infinite]"></div>
        <div className="absolute -bottom-40 -left-40 w-[550px] h-[550px] rounded-full bg-[#60a5fa]/15 blur-[120px] animate-[drift_18s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-white/40 blur-[100px]"></div>
      </div>

      {/* Branding / Nama di Ujung Kiri Atas (Mode Mobile & Desktop) */}
      <div className="absolute top-8 left-6 sm:top-10 sm:left-8 lg:left-12 z-30">
        <span className="text-xl font-bold tracking-tight text-[#1e3a8a]">
          Muhamad Satria
        </span>
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-4xl w-full mx-auto text-center py-20 pb-32">

        {/* Title */}
        <h1 className="anim-1 text-4xl xs:text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight leading-[1.02] text-[#1e3a8a] animate-[fade-in-up_0.8s_ease-out_both]">
          Software Development
        </h1>

        {/* Subtitle */}
        <p className="anim-2 mt-8 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium animate-[fade-in-up_0.8s_ease-out_0.15s_both]">
          Hi, I'm <span className="font-bold text-[#1e3a8a]">Muhamad Satria</span>. Full-Stack Developer, Machine Learning practitioner, and Automation/AI Engineer. Building modern, scalable, and intelligent web systems.
        </p>

        {/* Social Media Icons */}
        <div className="anim-3 mt-8 flex flex-wrap items-center justify-center gap-3 animate-[fade-in-up_0.8s_ease-out_0.3s_both]">
          {/* LinkedIn */}
          <a href="https://linkedin.com/in/muhamadsatria-id" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn — @muhamadsatria-id" className="group relative w-10 h-10 rounded-full border border-slate-300/80 bg-white/40 backdrop-blur-sm flex items-center justify-center text-slate-600 hover:text-white hover:bg-[#1e3a8a] hover:border-[#1e3a8a] hover:-translate-y-0.5 transition-all duration-300">
            <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>
          </a>
          {/* GitHub */}
          <a href="https://github.com/muhamadsatria-id" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub — @muhamadsatria-id" className="group relative w-10 h-10 rounded-full border border-slate-300/80 bg-white/40 backdrop-blur-sm flex items-center justify-center text-slate-600 hover:text-white hover:bg-[#1e3a8a] hover:border-[#1e3a8a] hover:-translate-y-0.5 transition-all duration-300">
            <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .3a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58v-2.02c-3.34.72-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.08 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .3"/></svg>
          </a>
          {/* YouTube */}
          <a href="https://youtube.com/@muhamadsatria-id" target="_blank" rel="noopener noreferrer" aria-label="YouTube" title="YouTube — @muhamadsatria-id" className="group relative w-10 h-10 rounded-full border border-slate-300/80 bg-white/40 backdrop-blur-sm flex items-center justify-center text-slate-600 hover:text-white hover:bg-[#1e3a8a] hover:border-[#1e3a8a] hover:-translate-y-0.5 transition-all duration-300">
            <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg>
          </a>
          {/* Facebook */}
          <a href="https://facebook.com/muhamadsatria.id" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook — @muhamadsatria-id" className="group relative w-10 h-10 rounded-full border border-slate-300/80 bg-white/40 backdrop-blur-sm flex items-center justify-center text-slate-600 hover:text-white hover:bg-[#1e3a8a] hover:border-[#1e3a8a] hover:-translate-y-0.5 transition-all duration-300">
            <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12a12 12 0 1 0-13.87 11.85v-8.38H7.08V12h3.05V9.36c0-3 1.8-4.67 4.53-4.67 1.31 0 2.69.24 2.69.24v2.95h-1.52c-1.49 0-1.96.93-1.96 1.87V12h3.33l-.53 3.47h-2.8v8.38A12 12 0 0 0 24 12z"/></svg>
          </a>
          {/* Instagram */}
          <a href="https://instagram.com/muhamadsatria.id" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram — @muhamadsatria-id" className="group relative w-10 h-10 rounded-full border border-slate-300/80 bg-white/40 backdrop-blur-sm flex items-center justify-center text-slate-600 hover:text-white hover:bg-[#1e3a8a] hover:border-[#1e3a8a] hover:-translate-y-0.5 transition-all duration-300">
            <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.95c-3.15 0-3.5.01-4.74.07-.9.04-1.39.19-1.71.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.13.32-.28.81-.32 1.71-.06 1.24-.07 1.59-.07 4.74s.01 3.5.07 4.74c.04.9.19 1.39.32 1.71.17.43.37.74.69 1.06.32.32.63.52 1.06.69.32.13.81.28 1.71.32 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c.9-.04 1.39-.19 1.71-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.13-.32.28-.81.32-1.71.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.04-.9-.19-1.39-.32-1.71a2.85 2.85 0 0 0-.69-1.06 2.85 2.85 0 0 0-1.06-.69c-.32-.13-.81-.28-1.71-.32-1.24-.06-1.59-.07-4.74-.07zm0 3.32a4.57 4.57 0 1 1 0 9.14 4.57 4.57 0 0 1 0-9.14zm0 7.54a2.97 2.97 0 1 0 0-5.94 2.97 2.97 0 0 0 0 5.94zm5.82-7.74a1.07 1.07 0 1 1-2.14 0 1.07 1.07 0 0 1 2.14 0z"/></svg>
          </a>
          {/* TikTok */}
          <a href="https://tiktok.com/@muhamadsatria.id" target="_blank" rel="noopener noreferrer" aria-label="TikTok" title="TikTok — @muhamadsatria.id" className="group relative w-10 h-10 rounded-full border border-slate-300/80 bg-white/40 backdrop-blur-sm flex items-center justify-center text-slate-600 hover:text-white hover:bg-[#1e3a8a] hover:border-[#1e3a8a] hover:-translate-y-0.5 transition-all duration-300">
            <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.3 0 .6.04.88.13V9.4a6.33 6.33 0 0 0-1-.05A6.34 6.34 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V8.93a8.16 8.16 0 0 0 4.77 1.52V7a4.85 4.85 0 0 1-1.04-.31z"/></svg>
          </a>
          {/* Threads */}
          <a href="https://threads.net/@muhamadsatria.id" target="_blank" rel="noopener noreferrer" aria-label="Threads" title="Threads — @muhamadsatria.id" className="group relative w-10 h-10 rounded-full border border-slate-300/80 bg-white/40 backdrop-blur-sm flex items-center justify-center text-slate-600 hover:text-white hover:bg-[#1e3a8a] hover:border-[#1e3a8a] hover:-translate-y-0.5 transition-all duration-300">
            <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.7 11.16c-.08-.04-.16-.07-.24-.11-.14-2.65-1.58-4.17-4-4.19h-.03c-1.45 0-2.66.62-3.4 1.74l1.33.91c.55-.83 1.41-1.01 2.07-1.01h.02c.8.01 1.4.24 1.79.69.28.33.47.78.57 1.35a13.6 13.6 0 0 0-2.4-.12c-2.42.14-3.97 1.55-3.87 3.5.05 1 .55 1.86 1.4 2.43.72.48 1.65.71 2.62.66 1.28-.07 2.29-.56 3-1.45.53-.67.87-1.54 1.02-2.65.61.37 1.06.85 1.31 1.44.42 1.02.45 2.7-.91 4.05-1.2 1.2-2.64 1.71-4.82 1.73-2.41-.02-4.24-.79-5.42-2.29C5.79 16.5 5.23 14.66 5.21 12c.02-2.66.58-4.5 1.72-5.94C8.11 4.56 9.94 3.79 12.35 3.77c2.43.02 4.28.79 5.5 2.3.6.74 1.05 1.68 1.35 2.79l1.66-.45c-.36-1.38-.93-2.54-1.71-3.5C17.6 2.05 15.34 1.07 12.36 1.05h-.01c-2.98.02-5.21 1-6.63 2.86C4.33 5.66 3.66 7.84 3.64 12v.01c.02 4.17.69 6.35 2.08 8.09 1.42 1.86 3.65 2.84 6.63 2.86h.01c2.65-.02 4.46-.69 5.92-2.15 1.97-1.97 1.91-4.43 1.26-5.96-.47-1.1-1.36-1.99-2.58-2.6zm-4.27 4.96c-1.07.06-2.18-.42-2.23-1.46-.04-.77.55-1.63 2.3-1.73.2-.01.4-.02.59-.02.64 0 1.23.06 1.77.18-.2 2.51-1.39 2.98-2.43 3.03z"/></svg>
          </a>
        </div>

        {/* CTA Button */}
        <div className="anim-4 mt-6 flex flex-wrap items-center justify-center gap-4 animate-[fade-in-up_0.8s_ease-out_0.45s_both]">
          <a
            href="/storage/cv.pdf"
            download
            className="px-8 py-3.5 rounded-xl font-semibold bg-transparent text-[#1e3a8a] border border-[#1e3a8a]/50 hover:bg-[#1e3a8a] hover:text-white hover:border-[#1e3a8a] hover:-translate-y-0.5 transition-all duration-300"
          >
            Download CV
          </a>
        </div>

      </div>

      {/* Satu Gelombang SVG Mulus Tunggal Menuju AboutSection */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none -mb-1">
        <svg
          className="relative block w-full h-16 sm:h-24 lg:h-32"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,50 L1200,120 L0,120 Z"
            fill="#3c83f6"
            fillOpacity="0.18"
          />
          <path
            d="M0,20 C200,80 450,10 700,70 C950,130 1100,30 1200,40 L1200,120 L0,120 Z"
            fill="#1e3a8a"
            fillOpacity="0.08"
          />
        </svg>
      </div>

      {/* Tailwind Keyframe Animations */}
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes drift {
          0%, 100% { transform: translate(0,0); }
          50%      { transform: translate(20px,-15px); }
        }
      `}</style>
    </section>
  );
}
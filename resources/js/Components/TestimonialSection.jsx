import React, { useState } from 'react';

const defaultTestimonials = [
  {
    id: 1,
    quote: "The attention to detail and creative vision transformed our brand identity completely.",
    name: "Sarah Chen",
    role: "Creative Director",
    company: "Studio Forma",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    quote: "Delivered a high-performance, scalable web application on schedule. Highly recommended engineer!",
    name: "Marcus Vance",
    role: "Tech Lead",
    company: "Apex Innovations",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 3,
    quote: "Seamless AI integration and automation that saved our operational team hundreds of hours monthly.",
    name: "Elena Rostova",
    role: "Head of Operations",
    company: "Vanguard Systems",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  },
];

export default function TestimonialSection({ testimonials = [] }) {
  const data = testimonials.length > 0 ? testimonials : defaultTestimonials;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const current = data[currentIndex];
  const formattedNumber = String(currentIndex + 1).padStart(2, '0');
  const totalCount = String(data.length).padStart(2, '0');

  return (
    <section id="testimonials" className="relative pt-20 lg:pt-28 pb-8 px-6 lg:px-20 text-slate-900 select-none">
      
      {/* Glow diletakkan di area atas/tengah agar tidak menyentuh atau terpotong batas bawah */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-10 -left-32 w-[400px] h-[400px] rounded-full bg-[#3c83f6]/10 blur-[100px]"></div>
        <div className="absolute top-20 -right-32 w-[400px] h-[400px] rounded-full bg-[#60a5fa]/10 blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8 mb-16">
          <div>
            <span className="text-sm font-semibold tracking-wider text-[#3c83f6] block mb-2">
              - Testimonials
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-[#1e3a8a] tracking-tight leading-[1.08]">
              What People Say
            </h2>
          </div>
          <p className="text-base sm:text-lg text-slate-600 font-medium max-w-md pb-1 leading-relaxed">
            Feedback and recommendations from clients, partners, and collaborators I've worked with.
          </p>
        </div>

        {/* Testimonial Slider Container */}
        <div className="min-h-[260px] flex flex-col justify-between">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Nomor Besar */}
            <div className="md:col-span-3 lg:col-span-2">
              <span className="text-6xl sm:text-7xl lg:text-8xl font-black text-slate-300/80 tracking-tighter select-none leading-none">
                {formattedNumber}
              </span>
            </div>

            {/* Kutipan & Detail Penulis */}
            <div className="md:col-span-9 lg:col-span-10 pt-2 md:pt-1">
              <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#1e3a8a] leading-relaxed transition-all duration-300">
                "{current.quote}"
              </blockquote>

              <div className="mt-8 flex items-center space-x-4">
                {current.avatar && (
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm shrink-0"
                  />
                )}
                <div>
                  <h4 className="text-base font-bold text-[#1e3a8a]">
                    {current.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">
                    {current.role} {current.company && `/ ${current.company}`}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Controls Bar */}
          <div className="mt-12 pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                {data.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? 'w-10 bg-[#3c83f6]'
                        : 'w-4 bg-slate-300/80 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <span className="font-mono text-sm font-semibold text-slate-500 tracking-wider">
                {formattedNumber} / {totalCount}
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={handlePrev}
                aria-label="Previous Testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300/80 bg-white/70 backdrop-blur-sm text-slate-700 hover:border-[#3c83f6] hover:bg-[#3c83f6] hover:text-white transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={handleNext}
                aria-label="Next Testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300/80 bg-white/70 backdrop-blur-sm text-slate-700 hover:border-[#3c83f6] hover:bg-[#3c83f6] hover:text-white transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
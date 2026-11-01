import React, { useState } from 'react';

export default function ContactSection() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    
    // State untuk kontrol akordeon di mode mobile (default tertutup)
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isScanOpen, setIsScanOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Pesan dari ${form.name} berhasil terkirim!`);
        setForm({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="relative py-20 lg:py-28 px-6 lg:px-20 bg-[#f0f9ff] text-slate-900 overflow-hidden select-none">
            {/* Background Soft Glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-[#3c83f6]/10 blur-[120px]"></div>
                <div className="absolute bottom-10 -right-32 w-[500px] h-[500px] rounded-full bg-[#60a5fa]/12 blur-[120px]"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Header Layout */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8 mb-12">
                    <div>
                        <span className="text-sm font-semibold tracking-wider text-[#3c83f6] block mb-2">
                            - Contact
                        </span>
                        <h2 className="text-4xl sm:text-6xl font-extrabold text-[#1e3a8a] tracking-tight leading-[1.08]">
                            Let's Work <br /> Together
                        </h2>
                    </div>
                    <p className="text-base sm:text-lg text-slate-600 font-medium max-w-md pb-1 leading-relaxed">
                        Have a project in mind or want to discuss automated AI systems? Feel free to leave a message or scan my contact card.
                    </p>
                </div>

                {/* Grid Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
                    
                    {/* KIRI: Send Me a Message (Formulir Pesan) */}
                    <div className={`lg:col-span-7 transition-all duration-300 ${
                        isFormOpen 
                            ? 'bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm' 
                            : 'bg-transparent border-b border-slate-200/80 py-4 px-2 rounded-none shadow-none lg:bg-white/80 lg:backdrop-blur-md lg:border lg:border-slate-200/80 lg:rounded-3xl lg:p-8 lg:shadow-sm'
                    }`}>
                        {/* Header Kategori / Toggle Button untuk Mobile */}
                        <button
                            type="button"
                            onClick={() => setIsFormOpen(!isFormOpen)}
                            className="w-full flex items-center justify-between text-left focus:outline-none cursor-pointer lg:cursor-default"
                        >
                            <div>
                                <h3 className="text-2xl font-bold text-[#1e3a8a]">
                                    Send Me a Message
                                </h3>
                                <p className="text-xs text-slate-500 font-medium mt-1">
                                    Fill out the form below to get in touch.
                                </p>
                            </div>

                            {/* Icon Toggle (Disamakan persis dengan Portofolio Section) */}
                            <div className={`lg:hidden flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-500 shadow-sm shrink-0 ${
                                isFormOpen 
                                    ? 'border-[#3c83f6] bg-[#3c83f6] text-white' 
                                    : 'border-slate-300/80 bg-white/70 backdrop-blur-sm text-slate-700'
                            }`}>
                                <svg 
                                    className={`h-5 w-5 transition-transform duration-500 ${isFormOpen ? 'rotate-90' : 'rotate-0'}`} 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </button>

                        {/* Pembungkus Animasi Gerak Smooth */}
                        <div className={`grid transition-all duration-500 ease-in-out lg:grid-rows-[1fr] lg:opacity-100 ${
                            isFormOpen ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 lg:mt-6'
                        }`}>
                            <div className="overflow-hidden">
                                <form onSubmit={handleSubmit} className="space-y-4 pt-1">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Muhamad Satria"
                                            required
                                            value={form.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200/90 text-slate-800 text-sm font-medium placeholder:text-slate-400 focus:border-[#3c83f6] focus:ring-2 focus:ring-[#3c83f6]/20 outline-none transition-all shadow-sm"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                                            Your Email
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="satria@example.com"
                                            required
                                            value={form.email}
                                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                                            className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200/90 text-slate-800 text-sm font-medium placeholder:text-slate-400 focus:border-[#3c83f6] focus:ring-2 focus:ring-[#3c83f6]/20 outline-none transition-all shadow-sm"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            rows="4"
                                            placeholder="Hi Satria, I'd like to discuss a project..."
                                            required
                                            value={form.message}
                                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                                            className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200/90 text-slate-800 text-sm font-medium placeholder:text-slate-400 focus:border-[#3c83f6] focus:ring-2 focus:ring-[#3c83f6]/20 outline-none transition-all shadow-sm resize-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-4 px-6 rounded-xl bg-[#3c83f6] hover:bg-[#1e3a8a] text-white font-bold text-base shadow-md shadow-[#3c83f6]/20 hover:shadow-lg active:scale-[0.99] transition-all duration-300 flex items-center justify-center space-x-2"
                                    >
                                        <span>Send Message</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* KANAN: Scan Contact Me (QR Code & Info Kontak) */}
                    <div className={`lg:col-span-5 transition-all duration-300 ${
                        isScanOpen 
                            ? 'bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm' 
                            : 'bg-transparent border-b border-slate-200/80 py-4 px-2 rounded-none shadow-none lg:bg-white/80 lg:backdrop-blur-md lg:border lg:border-slate-200/80 lg:rounded-3xl lg:p-8 lg:shadow-sm'
                    }`}>
                        {/* Header Kategori / Toggle Button untuk Mobile */}
                        <button
                            type="button"
                            onClick={() => setIsScanOpen(!isScanOpen)}
                            className="w-full flex items-center justify-between text-left focus:outline-none cursor-pointer lg:cursor-default"
                        >
                            <div>
                                <h3 className="text-2xl font-bold text-[#1e3a8a]">
                                    Scan Contact Me
                                </h3>
                                <p className="text-xs text-slate-500 font-medium mt-1">
                                    Scan to save contact information
                                </p>
                            </div>

                            {/* Icon Toggle (Disamakan persis dengan Portofolio Section) */}
                            <div className={`lg:hidden flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-500 shadow-sm shrink-0 ${
                                isScanOpen 
                                    ? 'border-[#3c83f6] bg-[#3c83f6] text-white' 
                                    : 'border-slate-300/80 bg-white/70 backdrop-blur-sm text-slate-700'
                            }`}>
                                <svg 
                                    className={`h-5 w-5 transition-transform duration-500 ${isScanOpen ? 'rotate-90' : 'rotate-0'}`} 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </button>

                        {/* Pembungkus Animasi Gerak Smooth */}
                        <div className={`grid transition-all duration-500 ease-in-out lg:grid-rows-[1fr] lg:opacity-100 ${
                            isScanOpen ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 lg:mt-6'
                        }`}>
                            <div className="overflow-hidden flex flex-col items-center">
                                {/* Card QR Code */}
                                <div className="p-4 bg-[#f0f9ff] border border-[#3c83f6]/20 rounded-2xl shadow-inner mb-6 transition-transform hover:scale-105 duration-300">
                                    <img
                                        src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://linkedin.com/in/muhamadsatria-id&color=1e3a8a&bgcolor=f0f9ff"
                                        alt="Muhamad Satria Contact QR Code"
                                        className="w-44 h-44 rounded-lg object-contain"
                                    />
                                </div>

                                {/* Detail Kontak Ringkas */}
                                <div className="w-full bg-white border border-slate-200/80 rounded-2xl p-4 text-left space-y-3 text-sm font-semibold text-slate-700 shadow-sm">
                                    <div className="flex items-center space-x-3 text-slate-700">
                                        <svg className="w-4 h-4 text-[#3c83f6] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                        <span className="text-[#1e3a8a]">Muhamad Satria</span>
                                    </div>

                                    <div className="flex items-center space-x-3 text-slate-600">
                                        <svg className="w-4 h-4 text-[#3c83f6] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1.01 1.01 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <span>+62 812-3456-7890</span>
                                    </div>

                                    <div className="flex items-center space-x-3 text-slate-600">
                                        <svg className="w-4 h-4 text-[#3c83f6] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <span className="truncate">contact@muhamadsatria.id</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
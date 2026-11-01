import React from 'react';

export default function AboutSection() {
    const skillCategories = [
        {
            number: "01",
            title: "Mobile App",
            description: "Building modern and performant mobile apps for Android & iOS.",
            icon: (
                <svg className="w-5 h-5 text-[#3c83f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
            skills: ["Android", "iOS", "Flutter", "React", "Figma"]
        },
        {
            number: "02",
            title: "Web Development",
            description: "Creating responsive, scalable, and user-friendly web applications.",
            icon: (
                <svg className="w-5 h-5 text-[#3c83f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
            ),
            skills: ["React", "Next.js", "Tailwind CSS", "Node.js", "Laravel", "PHP", "JavaScript", "MySQL & SQLite"]
        },
        {
            number: "03",
            title: "AI Integration",
            description: "Integrating AI solutions to enhance automation and user experiences.",
            icon: (
                <svg className="w-5 h-5 text-[#3c83f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h-4a2 2 0 01-2-2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            skills: ["OpenAI", "Python", "LangChain", "Machine Learning", "AI Agent Development", "BrowserAutomationStudio (BAS)"]
        },
        {
            number: "04",
            title: "Infrastructure & IoT",
            description: "Designing reliable network setups and smart IoT integrations for automated systems.",
            icon: (
                <svg className="w-5 h-5 text-[#3c83f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
            skills: ["MikroTik MTCNA", "Cisco Networking", "Solar Power Systems", "IoT Automation Controllers"]
        }
    ];

    return (
        <section id="about" className="relative py-20 lg:py-28 px-6 lg:px-20 bg-[#f0f9ff] text-slate-900 overflow-hidden">
            {/* Background Soft Glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] rounded-full bg-[#3c83f6]/10 blur-[120px]"></div>
                <div className="absolute bottom-10 -right-32 w-[500px] h-[500px] rounded-full bg-[#60a5fa]/12 blur-[120px]"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Header Layout (Tanpa Garis Pembatas Bawah) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12 lg:mb-16">
                    {/* Kiri: Label & Nama */}
                    <div className="lg:col-span-6">
                        <span className="text-sm font-semibold tracking-wider text-[#3c83f6] block mb-2">
                            - About Me
                        </span>
                        <h2 className="text-4xl sm:text-6xl font-extrabold text-[#1e3a8a] tracking-tight leading-[1.08]">
                            Muhamad <br /> Satria
                        </h2>
                    </div>

                    {/* Kanan: Deskripsi Singkat */}
                    <div className="lg:col-span-6 lg:pt-8">
                        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                            Computer Science graduate focusing on developing high-quality web and mobile applications, smart automation systems, and integrating artificial intelligence for efficient and scalable digital solutions.
                        </p>
                    </div>
                </div>

                {/* List Keahlian Baris demi Baris */}
                <div className="divide-y divide-slate-200/80">
                    {skillCategories.map((category) => (
                        <div 
                            key={category.number}
                            className="py-8 lg:py-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 transition-all duration-300 hover:bg-white/40 px-4 rounded-2xl"
                        >
                            {/* Bagian Kiri: Nomor, Ikon Box, Judul & Deskripsi */}
                            <div className="flex items-start gap-4 lg:gap-6 max-w-xl">
                                {/* Nomor Besar */}
                                <span className="text-4xl lg:text-5xl font-black text-slate-300/80 tracking-tighter select-none min-w-[3.5rem]">
                                    {category.number}
                                </span>

                                {/* Rounded Box Icon */}
                                <div className="w-10 h-10 rounded-xl bg-[#3c83f6]/15 border border-[#3c83f6]/20 flex items-center justify-center shrink-0 mt-1">
                                    {category.icon}
                                </div>

                                {/* Judul & Deskripsi */}
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#1e3a8a]">
                                        {category.title}
                                    </h3>
                                    <p className="mt-1 text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                                        {category.description}
                                    </p>
                                </div>
                            </div>

                            {/* Bagian Kanan: Pill/Badge Teknologi */}
                            <div className="flex flex-wrap items-center gap-2 lg:justify-end lg:max-w-md pt-2 lg:pt-0 pl-14 lg:pl-0">
                                {category.skills.map((skill, sIdx) => (
                                    <span 
                                        key={sIdx}
                                        className="px-4 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs sm:text-sm font-semibold text-slate-700 shadow-sm hover:border-[#3c83f6]/40 hover:text-[#1e3a8a] transition-all"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
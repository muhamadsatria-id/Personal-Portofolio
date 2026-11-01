import React from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import TechIcon from '@/Components/TechIcons';

// [name, iconKey, brandColor?] — brandColor omitted = dark slate (for black logos)
const techStack = {
    "Mobile App": [
        ["IDE & Editors", [["Android Studio", "androidstudio", "#3ddc84"], ["Xcode", "xcode", "#1575f9"], ["VS Code", "vscode", "#007acc"], ["Cursor", "cursor"]]],
        ["Frameworks & Languages", [["Flutter", "flutter", "#02569b"], ["Dart", "dart", "#0175c2"], ["React Native", "react", "#61dafb"], ["Kotlin", "kotlin", "#7f52ff"], ["Swift", "swift", "#f05138"]]],
        ["Tools & Services", [["Figma", "figma", "#f24e1e"], ["Firebase", "firebase", "#ffca28"], ["iOS / TestFlight", "ios"], ["Git", "git", "#f05032"], ["GitHub", "github"]]],
    ],
    "Web Development": [
        ["IDE & Editors", [["VS Code", "vscode", "#007acc"], ["Cursor", "cursor"], ["PhpStorm", "phpstorm", "#b345f1"], ["Sublime Text", "sublime", "#ff9800"]]],
        ["Local Server", [["Laragon", "laragon", "#0e83cd"], ["XAMPP", "xampp", "#fb7a24"], ["Apache", "apache", "#d22128"], ["Nginx", "nginx", "#009639"], ["Composer", "composer", "#885630"]]],
        ["Frameworks & Languages", [["React", "react", "#61dafb"], ["Next.js", "next"], ["Tailwind CSS", "tailwind", "#06b6d4"], ["Node.js", "node", "#5fa04e"], ["Laravel", "laravel", "#ff2d20"], ["PHP", "php", "#777bb4"], ["JavaScript", "js", "#f7df1e"]]],
        ["Database & Tools", [["MySQL", "mysql", "#4479a1"], ["SQLite", "sqlite", "#0f80cc"], ["DBeaver", "dbeaver", "#382923"], ["Postman", "postman", "#ff6c37"], ["Git", "git", "#f05032"], ["GitHub", "github"], ["npm", "npm", "#cb3837"], ["pnpm", "pnpm", "#f69220"], ["Docker", "docker", "#2496ed"], ["Vercel", "vercel"]]],
    ],
    "AI Integration": [
        ["IDE & Editors", [["VS Code", "vscode", "#007acc"], ["Jupyter", "jupyter", "#f37626"], ["Google Colab", "colab", "#f9ab00"], ["PyCharm", "pycharm", "#21d789"]]],
        ["Languages & Frameworks", [["Python", "python", "#3776ab"], ["LangChain", "langchain", "#1c3c3c"], ["TensorFlow (Machine Learning)", "tf", "#ff6f00"], ["AI Agent", "robot", "#d97757"]]],
        ["Platforms & Tools", [["OpenAI API", "openai", "#10a37f"], ["Browser Automation Studio (BAS)", "cogs", "#0ea5e9"], ["n8n", "n8n", "#ea4b71"], ["Anaconda", "anaconda", "#44a833"], ["Hugging Face", "hf", "#ffbd45"], ["Postman", "postman", "#ff6c37"]]],
    ],
    "Infrastructure & IoT": [
        ["Networking", [["MikroTik MTCNA", "mikrotik", "#293239"], ["WinBox (MikroTik)", "mikrotik", "#293239"], ["Cisco Networking", "cisco", "#049fd9"], ["Cisco Packet Tracer", "cisco", "#049fd9"], ["Wireshark", "wireshark", "#1679a7"]]],
        ["IDE & Firmware", [["Arduino IDE", "arduino", "#00979d"], ["PlatformIO", "platformio", "#f5822a"], ["VS Code", "vscode", "#007acc"]]],
        ["Devices & Protocols", [["ESP32 (Espressif)", "espressif", "#e7352c"], ["Raspberry Pi", "rpi", "#c51a4a"], ["MQTT", "mqtt", "#660066"], ["Node-RED", "nodered", "#8f0000"], ["IoT Automation Controllers", "chip", "#16a34a"], ["Solar Power Systems", "solar", "#f59e0b"]]],
    ],
};

// Connector lines for the tree (mobile: single rail, desktop: 4-column org-chart)
const treeCss = `
.ts-divs{--ic:40px;--gap:40px;--line:#cbd5e1;list-style:none;position:relative;display:grid;gap:var(--gap);padding-top:calc(var(--gap)/2)}
.ts-divs::before{content:"";position:absolute;top:0;bottom:0;left:calc(var(--ic)/2 - 1px);width:2px;background:var(--line)}
.ts-node{position:relative;padding-right:12px}
.ts-head{display:flex;align-items:center;gap:12px}
.ts-ic{flex:none;width:var(--ic);height:var(--ic);border-radius:12px;display:grid;place-items:center;position:relative;border:1px solid rgba(60,131,246,.2);background:linear-gradient(rgba(60,131,246,.15),rgba(60,131,246,.15)),#fff}
.ts-tree,.ts-items{list-style:none;margin:0;padding:0}
.ts-tree{margin:2px 0 0 calc(var(--ic)/2 - 1px);padding-top:10px;border-left:2px solid var(--line)}
.ts-grp{position:relative;padding-left:18px;margin-bottom:10px}
.ts-grp::before,.ts-items li::before{content:"";position:absolute;left:0;width:14px;height:2px;background:var(--line)}
.ts-grp::before{top:9px}
.ts-grp h4{font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#3c83f6;line-height:18px;margin:0}
.ts-items{margin:4px 0 0 4px;border-left:2px solid var(--line)}
.ts-items li{position:relative;display:flex;align-items:center;gap:8px;padding:3px 0 3px 18px;font-size:13px;font-weight:600;line-height:1.3;color:#334155;transition:color .2s}
.ts-items li:hover{color:#1e3a8a}
.ts-items li::before{top:50%;width:12px;transform:translateY(-1px)}
@media (min-width:1024px){
 .ts-divs{grid-template-columns:repeat(4,1fr);gap:0;padding-top:var(--gap)}
 .ts-divs::before{bottom:auto;left:50%;height:calc(var(--gap)/2);transform:translateX(-1px)}
 .ts-divs::after{content:"";position:absolute;top:calc(var(--gap)/2);left:calc(var(--ic)/2);right:calc(25% - var(--ic)/2);height:2px;background:var(--line)}
 .ts-node::before{content:"";position:absolute;top:calc(var(--gap)/-2);left:calc(var(--ic)/2 - 1px);width:2px;height:calc(var(--gap)/2);background:var(--line)}
}`;

export default function About() {
    const highlights = [
        { label: 'Role', value: 'Full-Stack & AI Engineer' },
        { label: 'Focus', value: 'Web, Automation & ML' },
        { label: 'Degree', value: 'Computer Science' },
        { label: 'Location', value: 'Indonesia' },
    ];
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
        <MainLayout>
            <Head title="About Me — Muhamad Satria" />

            <div className="relative pt-32 pb-24 px-6 lg:px-20 select-none overflow-hidden">
                {/* Background Soft Glow */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
                    <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-[#3c83f6]/10 blur-[120px]"></div>
                    <div className="absolute top-1/2 -right-32 w-[500px] h-[500px] rounded-full bg-[#60a5fa]/12 blur-[120px]"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <span className="text-sm font-semibold tracking-wider text-[#3c83f6] block mb-2">
                            - About Me
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1e3a8a] tracking-tight leading-tight">
                            Muhamad Satria
                        </h1>
                        <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
                            Computer Science graduate focusing on developing high-quality web and mobile applications, smart automation systems, and integrating artificial intelligence for scalable digital solutions.
                        </p>
                    </div>
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

                    {/* Tech Stack & Tools — tree structure */}
                    <section className="mt-20" aria-label="Tech Stack and Tools">
                        <style>{treeCss}</style>

                        <div className="text-center max-w-2xl mx-auto">
                            <span className="text-sm font-semibold tracking-wider text-[#3c83f6] block mb-2">
                                - Tech Stack
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e3a8a] tracking-tight leading-tight">
                                Tools &amp; Technologies
                            </h2>
                            <p className="mt-3 text-base text-slate-600 font-medium leading-relaxed">
                                The IDEs, tools, frameworks, and devices I use across each division.
                            </p>
                        </div>

                        <ul className="ts-divs">
                            {skillCategories.map((category) => (
                                <li key={category.number} className="ts-node">
                                    <div className="ts-head">
                                        <div className="ts-ic">{category.icon}</div>
                                        <div>
                                            <h3 className="text-base font-bold text-[#1e3a8a] leading-tight">
                                                {category.title}
                                            </h3>
                                            <p className="mt-0.5 text-xs text-slate-600 font-medium leading-snug">
                                                {category.description}
                                            </p>
                                        </div>
                                    </div>

                                    <ul className="ts-tree">
                                        {techStack[category.title].map(([group, tools]) => (
                                            <li key={group} className="ts-grp">
                                                <h4>{group}</h4>
                                                <ul className="ts-items">
                                                    {tools.map(([name, icon, color]) => (
                                                        <li key={name}>
                                                            <TechIcon
                                                                name={icon}
                                                                color={color || '#0f172a'}
                                                                className="w-5 h-5 shrink-0"
                                                            />
                                                            <span>{name}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Ringkasan Informasi / Highlight Cards */}
                    {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {highlights.map((item, index) => (
                            <div
                                key={index}
                                className="p-5 bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/80 text-center shadow-sm hover:border-[#3c83f6]/40 hover:-translate-y-0.5 transition-all duration-300"
                            >
                                <span className="block text-xs font-bold uppercase tracking-wider text-[#3c83f6] mb-1">
                                    {item.label}
                                </span>
                                <h3 className="text-sm sm:text-base font-bold text-[#1e3a8a]">
                                    {item.value}
                                </h3>
                            </div>
                        ))}
                    </div> */}
                </div>
            </div>
        </MainLayout>
    );
}
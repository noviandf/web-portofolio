"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';
import projectsData from '../data/projects.json';
import Navbar from '@/components/Navbar';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300 relative pt-12">
      {/* Floating Glassmorphism Navbar & Theme Toggle */}
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-20">
        
        {/* HERO / PROFILE SECTION */}
        <section id="profile" className="scroll-mt-28 flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8 pt-4">
          <div className="space-y-5 text-center md:text-left flex-1 md:max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight">Novian Dwi Fernanda</h1>
            <h2 className="text-xl text-gray-600 dark:text-gray-400 font-medium">IT Support Specialist | Internal Tools & Operations</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify md:text-left">
              Praktisi IT Support yang berfokus pada keandalan infrastruktur dan otomatisasi. Memadukan kemampuan troubleshooting jaringan dan server dengan keahlian pengembangan backend untuk membangun sistem operasional yang efisien dan terukur.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2 relative z-10">
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=noviandf10@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative z-10 text-sm bg-black dark:bg-white text-white dark:text-black px-5 py-2.5 rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors font-medium cursor-pointer"
              >
                Email Me
              </a>
              <a 
                href="https://linkedin.com/in/noviandf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative z-10 text-sm border border-gray-300 dark:border-gray-600 px-5 py-2.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium cursor-pointer"
              >
                LinkedIn
              </a>
              <a 
                href="/cv.pdf" 
                download 
                className="relative z-10 text-sm bg-blue-600 text-white px-5 py-2.5 rounded-md hover:bg-blue-700 transition-colors font-medium flex items-center gap-2 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Download CV
              </a>
            </div>
          </div>
          
          <div className="relative w-40 h-40 md:w-56 md:h-56 shrink-0 group">
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse group-hover:animate-none"></div>
            <Image 
              src="/images/profile.webp" 
              alt="Novian Dwi Fernanda" 
              fill 
              className="object-cover rounded-full shadow-lg ring-4 ring-white dark:ring-gray-800 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:shadow-xl"
              sizes="(max-width: 768px) 160px, 224px"
              priority
            />
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="scroll-mt-28 space-y-6">
          <div className="flex items-center gap-3 border-b border-gray-200 dark:border-gray-800 pb-3">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Featured Projects</h3>
          </div>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projectsData.map((project: any) => (
              <div key={project.id} className="border border-gray-200 dark:border-gray-700 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition flex flex-col h-full group">
                <div className="relative w-full h-40 mb-4 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-100 dark:border-gray-700">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105" 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                  />
                </div>
                <h4 className="font-bold text-lg">{project.title}</h4>
                <div className="flex flex-wrap gap-1.5 my-3">
                  {project.tech_stack.map((tech: string) => (
                    <span key={tech} className="text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2.5 py-1 rounded-md">{tech}</span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 flex-grow mb-4">{project.summary}</p>
                
                {/* Tautan Proyek */}
                <div className="flex gap-3 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                  {project.repo_url && (
                    <a href={project.repo_url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      Code
                    </a>
                  )}
                  {project.live_url && (
                    <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WORK EXPERIENCE & EDUCATION SECTION */}
        <section id="background" className="scroll-mt-28 grid md:grid-cols-2 gap-8 lg:gap-12 py-4">
          {/* Kolom Pengalaman Kerja */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-gray-200 dark:border-gray-800 pb-3">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Pengalaman Kerja</h3>
            </div>

            <div className="space-y-4">
              {/* Item 1 */}
              <div className="bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 hover:border-gray-400 dark:hover:border-gray-700 transition-all shadow-sm hover:shadow-md group">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <div>
                    <h4 className="font-bold text-base text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      IT Support
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs font-medium mt-0.5">
                      TGA Solution (Surakarta)
                    </p>
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md border border-gray-200 dark:border-gray-700">
                    Mei 2025 - Sekarang
                  </span>
                </div>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-xs mt-3 space-y-1.5 leading-relaxed">
                  <li>Memelihara perangkat keras, perangkat lunak, dan jaringan kantor.</li>
                  <li>Mengelola aset ±30 perangkat dan menyelesaikan tiket kendala IT.</li>
                  <li>Membangun internal tools: Uptime Kuma, Grafana, web manajemen aset, dan sistem tiket.</li>
                  <li>Mengeksekusi eskalasi insiden kritis ke vendor pihak ketiga dan menyusun laporan eksekutif.</li>
                </ul>
              </div>

              {/* Item 2 */}
              <div className="bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 hover:border-gray-400 dark:hover:border-gray-700 transition-all shadow-sm hover:shadow-md group">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <div>
                    <h4 className="font-bold text-base text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      Media Specialist <span className="text-xs font-normal text-gray-500">(Personal Project)</span>
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs font-medium mt-0.5">
                      Angate Digital (Klaten)
                    </p>
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md border border-gray-200 dark:border-gray-700">
                    Juni 2024 - Jan 2025
                  </span>
                </div>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-xs mt-3 space-y-1.5 leading-relaxed">
                  <li>Merancang rencana konten strategis dan melakukan analisis tren media sosial.</li>
                  <li>Mendevelop landing page perusahaan untuk mendukung kampanye digital.</li>
                </ul>
              </div>

              {/* Item 3 */}
              <div className="bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 hover:border-gray-400 dark:hover:border-gray-700 transition-all shadow-sm hover:shadow-md group">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <div>
                    <h4 className="font-bold text-base text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      IT Support Store
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs font-medium mt-0.5">
                      PT Indomarco Prismatama (Klaten)
                    </p>
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md border border-gray-200 dark:border-gray-700">
                    Apr 2022 - Mei 2024
                  </span>
                </div>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-xs mt-3 space-y-1.5 leading-relaxed">
                  <li>Melaksanakan pemeliharaan rutin hardware, software, & network di 60 toko cabang.</li>
                  <li>Menangani troubleshooting secara remote, pelaporan basis data, dan administrasi sistematis.</li>
                </ul>
              </div>

              {/* Item 4 */}
              <div className="bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 hover:border-gray-400 dark:hover:border-gray-700 transition-all shadow-sm hover:shadow-md group">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <div>
                    <h4 className="font-bold text-base text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      Admin Social Media Intern
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs font-medium mt-0.5">
                      Bakso Tengkleng Mas Bambang (Klaten)
                    </p>
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md border border-gray-200 dark:border-gray-700">
                    Nov 2021 - Des 2021
                  </span>
                </div>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-xs mt-3 space-y-1.5 leading-relaxed">
                  <li>Mengelola akun Facebook untuk beberapa cabang perusahaan.</li>
                  <li>Melakukan optimasi organik pada akun media sosial beberapa cabang.</li>
                  <li>Memposting konten setiap hari.</li>
                </ul>
              </div>

              {/* Item 5 */}
              <div className="bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 hover:border-gray-400 dark:hover:border-gray-700 transition-all shadow-sm hover:shadow-md group">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <div>
                    <h4 className="font-bold text-base text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      IT Support Intern
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs font-medium mt-0.5">
                      Kominfo Klaten
                    </p>
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md border border-gray-200 dark:border-gray-700">
                    Feb 2020 - Apr 2020
                  </span>
                </div>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-xs mt-3 space-y-1.5 leading-relaxed">
                  <li>Membantu instalasi infrastruktur pengkabelan LAN, crimping, dan konfigurasi Access Point.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Kolom Pendidikan */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-gray-200 dark:border-gray-800 pb-3">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Pendidikan</h3>
            </div>

            <div className="space-y-4">
              {/* Edu 1 */}
              <div className="bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 hover:border-gray-400 dark:hover:border-gray-700 transition-all shadow-sm hover:shadow-md group">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <div>
                    <h4 className="font-bold text-base text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      S1 Sistem Informasi
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs font-medium mt-0.5">
                      Universitas Terbuka
                    </p>
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md border border-gray-200 dark:border-gray-700">
                    Jan 2023 - Sekarang
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-xs mt-3 leading-relaxed">
                  Fokus pada rekayasa perangkat lunak dan manajemen basis data. Mengembangkan arsitektur Shift Scheduling & KPI Evaluation System berbasis web dengan Laravel sebagai Capstone Project.
                </p>
              </div>

              {/* Edu 2 */}
              <div className="bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 hover:border-gray-400 dark:hover:border-gray-700 transition-all shadow-sm hover:shadow-md group">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <div>
                    <h4 className="font-bold text-base text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      Kursus Digital Marketing
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs font-medium mt-0.5">
                      LKP Kember
                    </p>
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md border border-gray-200 dark:border-gray-700">
                    Sep 2021 - Des 2021
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-xs mt-3 leading-relaxed">
                  Mempelajari strategi pemasaran digital terintegrasi, mencakup pembuatan landing page, perancangan konten visual & copywriting, eksekusi kampanye Meta & Google Ads, serta analisis data performa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNICAL SKILLS SECTION */}
        <section id="skills" className="scroll-mt-28 space-y-6 py-4">
          <div className="flex items-center gap-3 border-b border-gray-200 dark:border-gray-800 pb-3">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Technical Capabilities</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Infrastructure & DevOps */}
            <div className="bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 hover:border-gray-400 dark:hover:border-gray-700 transition-all shadow-sm">
              <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-3">
                Infrastructure & DevOps
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Debian Linux", "Docker", "MikroTik", "Grafana", "Uptime Kuma", "PowerShell"].map((skill) => (
                  <span 
                    key={skill} 
                    className="text-xs px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-md font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend Development */}
            <div className="bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 hover:border-gray-400 dark:hover:border-gray-700 transition-all shadow-sm">
              <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-3">
                Backend Development
              </h4>
              <div className="flex flex-wrap gap-2">
                {["PHP", "Laravel", "CodeIgniter", "Node.js", "Python"].map((skill) => (
                  <span 
                    key={skill} 
                    className="text-xs px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-md font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases & Architecture */}
            <div className="bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 hover:border-gray-400 dark:hover:border-gray-700 transition-all shadow-sm">
              <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-3">
                Databases & Architecture
              </h4>
              <div className="flex flex-wrap gap-2">
                {["MySQL", "PostgreSQL", "WebSockets", "REST API"].map((skill) => (
                  <span 
                    key={skill} 
                    className="text-xs px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-md font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
      <footer className="border-t border-gray-200 dark:border-gray-800 pt-8 pb-12 text-center text-xs text-gray-500 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Novian Dwi Fernanda. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </main>
  );
}
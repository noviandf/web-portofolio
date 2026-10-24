"use client";

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import projectsData from '../data/projects.json';

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        
        {/* HEADER & TOGGLE */}
        <div className="flex justify-end">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2.5 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-all duration-300 shadow-sm"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          )}
        </div>

        {/* HERO SECTION */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8">
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

     {/* WORK EXPERIENCE & EDUCATION */}
        <section className="grid md:grid-cols-2 gap-12">
          {/* Kolom Pengalaman Kerja */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-700 pb-2">Pengalaman Kerja</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg">IT Support</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">TGA Solution (Surakarta) | Mei 2025 - Sekarang</p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm mt-2 space-y-1">
                  <li>Memelihara perangkat keras, perangkat lunak, dan jaringan kantor.</li>
                  <li>Mengelola aset ±30 perangkat dan menyelesaikan tiket kendala IT.</li>
                  <li>Membangun internal tools: Uptime Kuma, Grafana, web manajemen aset, dan sistem tiket.</li>
                  <li>Mengeksekusi eskalasi insiden kritis ke vendor pihak ketiga dan menyusun laporan eksekutif.</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg">Media Specialist (Personal Project)</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Angate Digital (Klaten) | Juni 2024 - Januari 2025</p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm mt-2 space-y-1">
                  <li>Merancang rencana konten strategis dan melakukan analisis tren media sosial.</li>
                  <li>Mendevelop landing page perusahaan untuk mendukung kampanye digital.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg">IT Support Store</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">PT Indomarco Prismatama (Klaten) | April 2022 - Mei 2024</p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm mt-2 space-y-1">
                  <li>Melaksanakan pemeliharaan rutin hardware, software, & network di 60 toko cabang.</li>
                  <li>Menangani troubleshooting secara remote, pelaporan basis data, dan administrasi sistematis.</li>
                </ul>
              </div>

                <div>
                <h4 className="font-bold text-lg">Admin Social Media</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Bakso Tengkleng Mas Bambang (Klaten) | November 2021 - Desember 2021</p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm mt-2 space-y-1">
                  <li>Mengelola akun Facebook untuk beberapa cabang perusahaan</li>
                  <li>Melakukan optimasi organik pada akun media sosial beberapa cabang</li>
                  <li>Memposting konten setiap hari</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg">IT Support Intern</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Kominfo Klaten | Feb 2020 - Apr 2020</p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm mt-2 space-y-1">
                  <li>Membantu instalasi infrastruktur pengkabelan LAN, crimping, dan konfigurasi Access Point.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Kolom Pendidikan */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-700 pb-2">Pendidikan</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg">S1 Sistem Informasi</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Universitas Terbuka | Jan 2023 - Sekarang</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-2 leading-relaxed">
                  Fokus pada rekayasa perangkat lunak dan manajemen basis data. Mengembangkan arsitektur Shift Scheduling & KPI Evaluation System berbasis web dengan Laravel sebagai Capstone Project.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-lg">Kursus Digital Marketing</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">LKP Kember | Sep 2021 - Des 2021</p>
                 <p className="text-gray-700 dark:text-gray-300 text-sm mt-2 leading-relaxed">
                    Mempelajari strategi pemasaran digital terintegrasi, mencakup pembuatan landing page, perancangan konten visual & copywriting, eksekusi kampanye Meta & Google Ads, serta analisis data performa.x``
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNICAL SKILLS */}
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-700 pb-2">Technical Capabilities</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li><span className="font-semibold text-black dark:text-white">Infrastructure & DevOps:</span> Debian Linux, Docker, MikroTik, Grafana, Uptime Kuma, PowerShell.</li>
            <li><span className="font-semibold text-black dark:text-white">Backend Development:</span> PHP, Laravel, CodeIgniter, Node.js, Python.</li>
            <li><span className="font-semibold text-black dark:text-white">Databases & Architecture:</span> MySQL, PostgreSQL, WebSockets, REST API.</li>
          </ul>
        </section>

        {/* PROJECTS */}
        <section className="space-y-6">
          <h3 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-700 pb-2">Featured Projects</h3>
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
        
      </div>
    </main>
  );
}

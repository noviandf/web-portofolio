'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  // Sync mode saat pertama kali dimuat
  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setDarkMode(true);
    }
  }, []);

  // Toggle Dark / Light mode
  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl">
      <nav className="flex items-center justify-between px-5 py-3 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border border-gray-200/80 dark:border-gray-800/80 rounded-full shadow-lg transition-all">
        {/* Navigasi Link */}
        <div className="flex items-center gap-4 md:gap-6 text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300">
          <a href="#profile" className="hover:text-black dark:hover:text-white transition-colors">
            Profile
          </a>
          <a href="#projects" className="hover:text-black dark:hover:text-white transition-colors">
            Projects
          </a>
          <a href="#background" className="hover:text-black dark:hover:text-white transition-colors">
            Experience
          </a>
          <a href="#skills" className="hover:text-black dark:hover:text-white transition-colors">
            Skills
          </a>
        </div>

        {/* Tombol Dark / Light Mode */}
       <button
  onClick={toggleTheme}
  aria-label="Toggle Theme"
  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:scale-110 transition-transform cursor-pointer"
>
  {darkMode ? (
    /* Icon Sun (Light Mode) */
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ) : (
    /* Icon Moon (Dark Mode) */
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  )}
</button>
      </nav>
    </header>
  );
}
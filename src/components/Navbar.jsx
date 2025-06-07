import React from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

export default function Navbar({ darkMode, setDarkMode, menuOpen, setMenuOpen, activeSection }) {
  const sections = ["services", "projects", "publications", "contact"];

  return (
    <>
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm">
        <h1 className="text-xl font-semibold">thilina01</h1>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 rounded">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div className="hidden md:flex gap-6 items-center">
          {sections.map(section => (
            <a
              key={section}
              href={`#${section}`}
              className={`${activeSection === section ? 'text-blue-500 font-semibold' : 'hover:underline'}`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-slate-200 dark:bg-slate-700 p-2 rounded-full shadow-md hover:shadow-lg transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full z-40 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 shadow-md flex flex-col gap-4 px-6 py-4">
          {sections.map(section => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setMenuOpen(false)}
              className={`${activeSection === section ? 'text-blue-500 font-semibold' : 'hover:underline'}`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
          <button
            onClick={() => {
              setDarkMode(!darkMode);
              setMenuOpen(false);
            }}
            className="bg-slate-200 dark:bg-slate-700 p-2 rounded-full shadow-md w-max"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      )}
    </>
  );
}

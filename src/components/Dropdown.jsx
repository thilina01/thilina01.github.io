import React from "react";
import { Moon, Sun } from "lucide-react";

export default function Dropdown({ sections, activeSection, setMenuOpen, darkMode, setDarkMode }) {
  return (
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
  );
}

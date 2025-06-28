import React from "react";
import { useNavigate } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import site from "../data/site.json";

export default function Dropdown({
  sections,
  activeSection,
  setMenuOpen,
  darkMode,
  setDarkMode,
}) {
  const navigate = useNavigate();

  const handleSectionClick = (section) => {
    setMenuOpen(false);
    navigate("/", { state: { scrollTo: section } });
  };

  return (
    <div className="md:hidden fixed top-16 left-0 w-full z-40 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 shadow-md flex flex-col gap-4 px-6 py-4">
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => handleSectionClick(section)}
          className={`text-left ${
            activeSection === section
              ? "text-blue-500 font-semibold"
              : "hover:underline"
          }`}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </button>
      ))}

      <a
        href={site.cv.url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 hover:bg-blue-600 text-blue-200 font-semibold py-2 px-4 rounded-full shadow-md transition animate-pulse w-fit"
      >
        {site.cv.label}
      </a>

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

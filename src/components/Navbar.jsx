import React from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import site from "../data/site.json";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar({ darkMode, setDarkMode, menuOpen, setMenuOpen, activeSection }) {
  const sections = ["services", "projects", "techstack", "publications", "footer"];
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionClick = (sectionId) => {
    if (location.pathname === "/") {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm">
        <h1 className="text-xl font-semibold cursor-pointer" onClick={() => navigate("/")}>
          {site.title}
        </h1>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 rounded">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div className="hidden md:flex gap-6 items-center">
          {sections.map(section => (
            <button
              key={section}
              onClick={() => handleSectionClick(section)}
              className={`${activeSection === section ? 'text-blue-500 font-semibold' : 'hover:underline'}`}
            >
              {section === "footer" ? "Contact" : section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
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
            <button
              key={section}
              onClick={() => handleSectionClick(section)}
              className={`${activeSection === section ? 'text-blue-500 font-semibold' : 'hover:underline'}`}
            >
              {section === "footer" ? "Contact" : section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
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

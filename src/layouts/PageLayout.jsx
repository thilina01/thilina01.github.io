// src/layouts/PageLayout.jsx
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Dropdown from "../components/Dropdown";
import BackToTopButton from "../components/BackToTopButton";

export default function PageLayout({ children, sectionIdsOff = [] }) {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const sectionIds = ["services", "projects", "techstack", "publications", "contact"];

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-100 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100">
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        activeSection=""
      />
      {menuOpen && (
        <Dropdown
          sections={sectionIds}
          activeSection=""
          setMenuOpen={setMenuOpen}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      )}
      {children}
      <BackToTopButton visible={showScrollTop} />
    </main>
  );
}

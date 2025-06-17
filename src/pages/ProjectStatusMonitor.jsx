import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ContactSection from "../sections/ContactSection";
import ProjectPageLayout from "../components/ProjectPageLayout";
import data from "../data/projects/status-monitor.json";

export default function ProjectStatusMonitor() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-100 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100">
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        menuOpen={false}
        setMenuOpen={() => {}}
        activeSection={""}
      />
      <ProjectPageLayout project={data} />
      <ContactSection />
    </main>
  );
}

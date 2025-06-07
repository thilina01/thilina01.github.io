import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Dropdown from "../components/Dropdown";
import BackToTopButton from "../components/BackToTopButton";
import HeroSection from "../sections/HeroSection";
import Services from "../sections/Services";
import Projects from "../sections/Projects";
import Publications from "../sections/Publications";
import ContactSection from "../sections/ContactSection";

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("services");
  const [showScrollTop, setShowScrollTop] = useState(false);

  const sections = ["services", "projects", "publications", "contact"];

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { threshold: 0.5 }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
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
        activeSection={activeSection}
      />
      {menuOpen && (
        <Dropdown
          sections={sections}
          activeSection={activeSection}
          setMenuOpen={setMenuOpen}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      )}
      <HeroSection />
      <Services />
      <Projects />
      <Publications />
      <ContactSection />
      <BackToTopButton visible={showScrollTop} />
    </main>
  );
}

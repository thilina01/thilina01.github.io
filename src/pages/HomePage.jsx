import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dropdown from "../components/Dropdown";
import BackToTopButton from "../components/BackToTopButton";
import HeroSection from "../sections/HeroSection";
import Services from "../sections/Services";
import Projects from "../sections/Projects";
import Publications from "../sections/Publications";
import ContactSection from "../sections/ContactSection";
import TechStack from "../sections/TechStack";

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("services");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  const sections = ["services", "projects", "techstack", "publications", "contact"];

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle("dark", darkMode);
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
      { 
        threshold: 0.1,
        rootMargin: "0px 0px -50% 0px"
    }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
      setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.state]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-100 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100">
      <Navbar {...{ darkMode, setDarkMode, menuOpen, setMenuOpen, activeSection }} />
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
      <TechStack />
      <Publications />
      <ContactSection />
      <BackToTopButton visible={showScrollTop} />
    </main>
  );
}

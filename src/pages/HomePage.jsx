import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Sun, Moon, Menu, X, ArrowUp } from "lucide-react";

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("services");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  useEffect(() => {
    const sections = ["services", "projects", "publications", "contact"];
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
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm">
        <h1 className="text-xl font-semibold">thilina01</h1>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 rounded">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div className="hidden md:flex gap-6 items-center">
          {['services', 'projects', 'publications', 'contact'].map((section) => (
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

          {['services', 'projects', 'publications', 'contact'].map((section) => (
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

      <section className="text-center px-4 py-12 md:px-16 lg:px-32 mb-20">
        <h1 className="text-5xl font-bold mb-4">
          thilina01: AI-Powered Software Architecture
        </h1>
        <p className="text-xl max-w-2xl mx-auto">
          Building scalable, cloud-native and intelligent systems across Manufacturing, Aviation, and Travel domains.
        </p>
      </section>

      <section id="services" className="grid gap-8 px-4 md:px-16 lg:px-32 md:grid-cols-2 lg:grid-cols-3">
        <Card title="AI & Machine Learning" text="Chatbots (Rasa, LangChain), Transformer models (T5, LoRA), predictive analytics using Ray, DeepHyper." />
        <Card title="Cloud-Native Development" text="Microservices, Kubernetes, CI/CD with GitHub/GitLab Actions, scalable infrastructure on AWS & GCP." />
        <Card title="DevOps & Automation" text="Terraform, Ansible, Docker, Prometheus, Grafana for full lifecycle automation and observability." />
        <Card title="Full-Stack Engineering" text="Spring Boot, Angular, FastAPI, Kotlin for building end-to-end enterprise-grade applications." />
        <Card title="Open Source Leadership" text="Apache NetBeans PMC Member. Contributor to global open source software, mentoring and leading core teams." />
        <Card title="Training & Thought Leadership" text="Speaker and writer on AI, CI/CD, Kubernetes, and developer productivity. 15k+ reads across global platforms." />
      </section>

      <section id="projects" className="px-4 md:px-16 lg:px-32 mt-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <Card title="TravelBox" text="Comprehensive travel management platform using Java, Angular, Kubernetes, GitLab CI/CD." />
          <Card title="CG BE Generator" text="AI-powered Spring Boot code generator reducing manual dev time by 50%." />
          <Card title="AI Review Pipeline" text="Merge Request code reviewer using OpenAI API, integrated into GitLab." />
          <Card title="Production Monitoring System" text="Real-time KPI tracking for manufacturing with Kafka, ELK, Angular." />
        </div>
      </section>

      <section id="publications" className="px-4 md:px-16 lg:px-32 mt-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Publications</h2>
        <ul className="space-y-4 text-lg list-disc list-inside">
          <li>End-to-End CI/CD with Angular & GitHub Actions (Oct 2023)</li>
          <li>Docker Swarm Deployment for Multi-App Hosting (Jul 2023)</li>
          <li>Kubernetes on RHEL - Enterprise Setup Guide (Jun 2023)</li>
          <li>Logging Spring Boot Microservices in Docker (May 2020)</li>
        </ul>
      </section>

      <footer id="contact" className="mt-24 border-t border-slate-200 dark:border-slate-700 pt-10 px-6">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="space-y-2">
            <p className="flex items-center gap-2"><Phone size={18}/> +94 72 466 6666</p>
            <p className="flex items-center gap-2"><Mail size={18}/> thilina01@apache.org</p>
            <p className="flex items-center gap-2"><MapPin size={18}/> Ekala, Sri Lanka</p>
          </div>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/thilina01" target="_blank" rel="noreferrer">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/thilina01" target="_blank" rel="noreferrer">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
        <p className="text-center mt-10 text-xs">© {new Date().getFullYear()} thilina01. All rights reserved.</p>
      </footer>

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </main>
  );
}

function Card({ title, text }) {
  return (
    <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p>{text}</p>
    </div>
  );
}

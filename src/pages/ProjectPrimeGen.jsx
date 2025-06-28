// src/pages/ProjectPrimeGen.jsx
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactSection from "../sections/ContactSection";
import ProjectPageLayout from "../components/ProjectPageLayout";

const data = {
  title: "🧩 Prime Gen VSCode Extension",
  description: `
    [Available on VSCode Marketplace →](https://marketplace.visualstudio.com/items?itemName=thilina01.prime-gen-vscode)

    **Prime Gen** is a productivity-focused VS Code extension that accelerates Angular development by auto-generating styled form and table components based on an existing HTML form. With full integration of **Tailwind CSS** and **PrimeNG**, this tool reduces boilerplate and enforces design consistency across your app.

    Whether you're building admin dashboards, internal tools, or CRUD apps — Prime Gen delivers speed, structure, and style.
  `,
  download: {
    label: "Visit Marketplace",
    url: "https://marketplace.visualstudio.com/items?itemName=thilina01.prime-gen-vscode"
  },
  features: [
    {
      title: "AI-Assisted Field Extraction",
      text: "Parses HTML to identify form fields and relationships."
    },
    {
      title: "Angular Component Scaffolding",
      text: "Creates form + table components instantly."
    },
    {
      title: "Tailwind + PrimeNG Styling",
      text: "Applies modern utility-based and UI-rich styles."
    },
    {
      title: "Modular Architecture",
      text: "Generates model and service files alongside components."
    },
    {
      title: "Automatic Routing Setup",
      text: "Injects routes into apps.routes.ts."
    },
    {
      title: "Menu Snippet Output",
      text: "Suggests entries for app.menu.ts to wire up navigation."
    },
    {
      title: "Live Progress Feedback",
      text: "Displays generation status in the VS Code Output Panel."
    }
  ],
  techStack: [
    { layer: "Extension Host", tech: "VS Code Extension API (TypeScript)" },
    { layer: "DOM Parsing", tech: "Cheerio (HTML extraction)" },
    { layer: "UI Libraries", tech: "Tailwind CSS + PrimeNG" },
    { layer: "Routing", tech: "React Router DOM injection" },
    { layer: "Markdown Rendering", tech: "React Markdown + rehype-raw" }
  ],
  takeaways: [
    "Drastically reduced time spent on Angular CRUD scaffolding",
    "Enforced structural and visual consistency across generated modules",
    "Boosted productivity in enterprise-scale Angular monorepos"
  ],
  sourceAccess: "Extension source is under active development. Clone and run locally from GitHub (link available on request).",
  developer: "Created and maintained by Thilina — VS Code user, OSS advocate, and Angular/Tailwind enthusiast."
};

export default function ProjectPrimeGen() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-100 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} menuOpen={false} setMenuOpen={() => {}} activeSection={""} />
      <ProjectPageLayout project={data} />
      <ContactSection />
      <Footer />
    </main>
  );
}

import React from "react";
import PageLayout from "../layouts/PageLayout";
import ContactSection from "../sections/ContactSection";
import Footer from "../components/Footer";

export default function ProjectPrimeGen() {
  const features = [
    {
      icon: "⚡",
      title: "Instant Angular Scaffolding",
      text: "Generate complete form and table components using PrimeNG + Tailwind in seconds."
    },
    {
      icon: "🧠",
      title: "AI-Powered Field Inference",
      text: "Extract types, labels, and layout automatically from raw HTML using LLM-powered backend."
    },
    {
      icon: "🎨",
      title: "Elegant UI by Default",
      text: "Pre-styled with Tailwind CSS and PrimeNG widgets—no need to adjust layouts manually."
    },
    {
      icon: "📦",
      title: "Modular Code Structure",
      text: "Each module includes form, table, service, model, routing—all separated and clean."
    },
    {
      icon: "🧩",
      title: "Menu & Route Integration",
      text: "Automatically wires lazy-loaded routes and suggests app menu snippets."
    },
    {
      icon: "🚀",
      title: "Boosted Developer Velocity",
      text: "Save 4–6 hours per feature. Build forms in under 30 seconds with consistent quality."
    }
  ];

  const outcomes = [
    { goal: "Reduce Dev Time per Feature", impact: "From 4–6 hrs ➝ under 1 min" },
    { goal: "Ensure Code Consistency", impact: "100% adherence to best practices" },
    { goal: "Improve Maintainability", impact: "Modular, predictable structure" },
    { goal: "Boost Team Velocity", impact: "Faster onboarding and delivery" }
  ];

  const modules = [
    "Angular Form Component",
    "Table Component",
    "Model Interface",
    "Service Layer (BehaviorSubject)",
    "Routes Module",
    "apps.routes.ts Injection",
    "Menu Entry Suggestion"
  ];

  const techSnapshot = {
    "Framework": "Angular 17+",
    "UI Stack": "PrimeNG + Tailwind CSS",
    "Extension Engine": "TypeScript + ts-morph",
    "LLM Backend": "Spring Boot + LangChain + Mistral (via Ollama)",
    "Scaffold Location": "apps/[module]/ (Angular CLI-style)",
    "CI/CD": "GitHub Actions + vsce + Marketplace publishing"
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-500 to-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          🚀 Prime Gen VSCode Extension
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8">
          The fastest way to build enterprise-grade Angular forms with PrimeNG + Tailwind CSS
        </p>
        <p className="mt-4 italic opacity-80">
          Build in seconds what used to take hours.
        </p>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Developers Love Prime Gen
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Proven Developer Impact
        </h2>
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Goal</th>
                <th className="py-2 px-4 border-b">Impact</th>
              </tr>
            </thead>
            <tbody>
              {outcomes.map((o, i) => (
                <tr
                  key={i}
                  className={
                    i % 2 === 0
                      ? "bg-white dark:bg-gray-900"
                      : "bg-gray-50 dark:bg-gray-800"
                  }
                >
                  <td className="py-2 px-4">{o.goal}</td>
                  <td className="py-2 px-4 font-semibold">{o.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Modules */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What Gets Generated</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {modules.map((mod, i) => (
            <div
              key={i}
              className="px-4 py-3 bg-pink-50 dark:bg-purple-900 rounded-lg shadow"
            >
              <span className="text-pink-700 dark:text-pink-200 font-medium">{mod}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Snapshot */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Technical Snapshot
        </h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {Object.entries(techSnapshot).map(([key, val], i) => (
            <div
              key={i}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow"
            >
              <h4 className="font-semibold mb-2">{key}</h4>
              <p className="text-gray-600 dark:text-gray-300">{val}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-pink-600 text-white text-center px-6">
        <h3 className="text-2xl font-bold mb-4">
          Ready to Supercharge Your Angular Workflow?
        </h3>
        <a
          href="https://marketplace.visualstudio.com/items?itemName=thilina01.prime-gen-vscode"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-pink-600 font-semibold py-3 px-8 rounded-lg shadow hover:shadow-lg transition"
        >
          Visit Marketplace
        </a>
        <p className="mt-6 italic opacity-90">
          Open source and community-driven. Contributions welcome.
        </p>
      </section>
      <Footer />
    </PageLayout>
  );
}

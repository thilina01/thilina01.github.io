import React from "react";
import PageLayout from "../layouts/PageLayout";
import ContactSection from "../sections/ContactSection";
import Footer from "../components/Footer";
import ImageCarousel from "../components/ImageCarousel";
import data from "../data/projects/status-monitor.json";

export default function ProjectStatusMonitor() {
  const features = data.features;
  const outcomes = [
    {
      goal: "Catch Failures Early",
      impact: "Proactive alerts reduce downtime",
    },
    { goal: "Minimize Manual Checks", impact: "Auto-refresh saves ops effort" },
    {
      goal: "Improve Reliability",
      impact: "Robust background sync with WorkManager",
    },
    {
      goal: "Enhance Visibility",
      impact: "Full-stack insight for teams on any device",
    },
  ];
  const modules = [
    "Live Dashboard (Grid View)",
    "Smart Notifications",
    "Service Diff Engine",
    "Refresh Config UI",
    "Theme Toggle",
    "Offline-First Architecture",
  ];
  const techSnapshot = Object.fromEntries(
    data.techStack.map(({ layer, tech }) => [layer, tech])
  );

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-green-600 to-teal-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          📱 Status Monitor
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8">
          Real-time system health in your pocket—designed for DevOps and Ops
          teams alike.
        </p>
        <p className="mt-4 italic opacity-80">
          Reactively monitor backend services across devices.
        </p>
      </section>

      {/* Screenshot Carousel */}
      {/* <ImageCarousel images={data.images} /> */}
      {/* Screenshots */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">App Screenshots</h2>
        <div className="flex overflow-x-auto space-x-4 max-w-5xl mx-auto">
          {data.images.map((img, idx) => (
            <div key={idx} className="flex-shrink-0 w-64">
              <img
                src={img.src}
                alt={img.alt}
                className="rounded-lg shadow-md w-full object-contain"
              />
              {img.caption && (
                <p className="mt-2 text-sm text-center text-slate-600 dark:text-slate-400">
                  {img.caption}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Core Capabilities
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Outcomes Table */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Why It Matters</h2>
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Goal</th>
                <th className="py-2 px-4 border-b">Operational Impact</th>
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

      {/* Modules / Components */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What’s Inside</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {modules.map((mod, i) => (
            <div
              key={i}
              className="px-4 py-3 bg-green-50 dark:bg-teal-900 rounded-lg shadow"
            >
              <span className="text-green-700 dark:text-green-200 font-medium">
                {mod}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture Highlights */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          🧱 Architecture Highlights
        </h2>
        <ul className="list-disc list-inside max-w-4xl mx-auto space-y-2 text-lg text-slate-700 dark:text-slate-300">
          {data.architecture.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </section>

      {/* CI/CD */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          📦 CI/CD Pipeline
        </h2>
        <ul className="list-disc list-inside max-w-4xl mx-auto space-y-2 text-lg text-slate-700 dark:text-slate-300">
          {data.cicd.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </section>

      {/* Takeaways */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          💡 Learning Takeaways
        </h2>
        <ul className="list-disc list-inside max-w-4xl mx-auto space-y-2 text-lg text-slate-700 dark:text-slate-300">
          {data.takeaways.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
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
      <section className="py-16 bg-teal-600 text-white text-center px-6">
        <h3 className="text-2xl font-bold mb-4">
          Install Now and Stay Informed
        </h3>
        <a
          href={data.download.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-teal-700 font-semibold py-3 px-8 rounded-lg shadow hover:shadow-lg transition"
        >
          {data.download.label}
        </a>
        <p className="mt-6 italic opacity-90">{data.sourceAccess}</p>
      </section>

      <ContactSection />
      <Footer />
    </PageLayout>
  );
}

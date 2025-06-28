import React from "react";
import PageLayout from "../layouts/PageLayout";
import Footer from "../components/Footer";
import ContactSection from "../sections/ContactSection";
import data from "../data/projects/whizkidz-flashcards.json";

export default function ProjectWhizKidz() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-yellow-400 to-pink-500 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          {data.hero.heading}
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8">
          {data.hero.text}
        </p>
        <a
          href={data.hero.ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-pink-500 font-semibold py-3 px-6 rounded-lg shadow hover:shadow-lg transition"
        >
          {data.hero.ctaText}
        </a>
        <p className="mt-4 italic opacity-80">{data.subtitle}</p>
      </section>

      {/* Screenshots */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">App Screenshots</h2>
        <div className="flex overflow-x-auto space-x-4 max-w-5xl mx-auto">
          {data.screenshots.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Screenshot ${idx + 1}`}
              className="w-64 rounded-lg shadow-md flex-shrink-0"
            />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {data.features.map((f, i) => (
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
          Outcomes You Can Expect
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
              {data.outcomes.map((o, i) => (
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
        <h2 className="text-3xl font-bold text-center mb-8">What’s Inside</h2>
        <ul className="list-disc list-inside max-w-2xl mx-auto space-y-2">
          {data.modules.map((mod, i) => (
            <li key={i} className="text-lg">
              {mod}
            </li>
          ))}
        </ul>
      </section>

      {/* Tech Snapshot */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Tech Snapshot</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {Object.entries(data.techSnapshot).map(([k, v]) => (
            <div key={k} className="space-y-1">
              <h4 className="font-semibold">{k}</h4>
              <p>{v}</p>
            </div>
          ))}
        </div>
      </section>

      <ContactSection />
      <Footer />
    </PageLayout>
  );
}

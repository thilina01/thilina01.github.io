import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ContactSection from "../sections/ContactSection";
import data from "../data/projects/factorypro.json";
import Footer from "../components/Footer";

export default function ProjectFactoryPro() {
  // Dark Mode state persisted in localStorage
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Pass darkMode toggle to Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        activeSection=""
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          {data.hero.heading}
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8">
          {data.hero.text}
        </p>
        {/* <a
          href={data.hero.ctaLink}
          className="inline-block bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg shadow hover:shadow-lg transition"
        >
          {data.hero.ctaText}
        </a> */}
        <p className="mt-4 italic opacity-80">{data.subtitle}</p>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Sets FactoryPro 360™ Apart
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {data.features.map((feat, i) => (
            <div
              key={i}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{feat.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feat.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feat.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Outcomes Table */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Outcomes You Can Expect
        </h2>
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Goal</th>
                <th className="py-2 px-4 border-b">Typical Impact*</th>
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
          <p className="mt-4 text-sm italic">
            *Based on pilot installations in discrete manufacturing plants.
          </p>
        </div>
      </section>

      {/* Modules */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Core Modules Delivered Today
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {data.modules.map((mod, i) => (
            <div
              key={i}
              className="px-4 py-3 bg-blue-50 dark:bg-indigo-900 rounded-lg shadow"
            >
              <span className="text-blue-700 dark:text-blue-300 font-medium">
                {mod}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-16 bg-gradient-to-r from-indigo-700 to-purple-700 text-white px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Hear It from the Floor</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {data.testimonials.map((t, i) => (
            <blockquote key={i} className="italic text-lg">
              “{t.quote}”
              <cite className="block mt-2 font-semibold">— {t.author}</cite>
            </blockquote>
          ))}
        </div>
      </section> */}

      {/* Technical Snapshot */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Technical Snapshot
        </h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {Object.entries(data.techSnapshot).map(([key, val], i) => (
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

      {/* Contact / CTA */}
      <section className="py-16 bg-blue-600 text-white text-center px-6">
        <h3 className="text-2xl font-bold mb-4">
          Ready to turn your factory data into competitive advantage?
        </h3>
        {/* <a
          href={data.hero.ctaLink}
          className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow hover:shadow-lg transition"
        >
          {data.hero.ctaText}
        </a> */}
      </section>

      <Footer />
    </div>
  );
}

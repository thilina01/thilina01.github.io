import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import ContactSection from "../sections/ContactSection";
import Footer from "../components/Footer";
import data from "../data/projects/textbridge.json";

export default function ProjectTextBridge() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );
  const [menuOpen, setMenuOpen] = useState(false);

  // Persist dark mode
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        activeSection=""
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-green-600 to-teal-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          {data.title}
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8 whitespace-pre-line">
          {data.subtitle}
        </p>
        <p className="max-w-3xl mx-auto text-base md:text-lg mb-4">
          {data.description}
        </p>
      </section>

      {/* Why Choose */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose TextBridge?
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {data.features.map((f, i) => (
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

      {/* Benefits Table */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Key Benefits at a Glance
        </h2>
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Benefit</th>
                <th className="py-2 px-4 border-b">Impact</th>
              </tr>
            </thead>
            <tbody>
              {data.benefits.map((b, i) => (
                <tr
                  key={i}
                  className={
                    i % 2 === 0
                      ? "bg-white dark:bg-gray-900"
                      : "bg-gray-50 dark:bg-gray-800"
                  }
                >
                  <td className="py-2 px-4">{b.benefit}</td>
                  <td className="py-2 px-4 font-semibold">{b.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Core Components */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Core Components
        </h2>
        <div className="flex flex-col items-center gap-4 max-w-3xl mx-auto">
          {data.components.map((c, i) => (
            <div key={i} className="text-lg text-gray-700 dark:text-gray-300">
              • {c}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-16 bg-gradient-to-r from-teal-700 to-green-600 text-white px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Hear It from Early Adopters
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {data.testimonials.map((t, i) => (
            <blockquote key={i} className="italic text-lg">
              “{t.quote}”
              <cite className="block mt-2 font-semibold">— {t.author}</cite>
            </blockquote>
          ))}
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-16 bg-green-600 text-white text-center px-6">
        <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
        {/* <div className="space-y-4">
          <a
            href={data.download.url}
            className="inline-block bg-white text-green-600 font-semibold py-3 px-8 rounded-lg shadow hover:shadow-lg transition"
          >
            {data.download.label}
          </a>
          <a
            href={data.demoLink}
            className="inline-block border-2 border-white text-white font-semibold py-3 px-8 rounded-lg shadow hover:bg-white hover:text-green-600 transition"
          >
            {data.scheduleCallText}
          </a>
        </div> */}
        <p className="mt-6 italic opacity-80">{data.footerText}</p>
      </section>

      <Footer />
    </div>
  );
}

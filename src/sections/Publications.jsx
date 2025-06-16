import React from "react";
import { ExternalLink } from "lucide-react";
import publications from "../data/publications.json";

export default function Publications() {
  return (
    <section
      id="publications"
      className="scroll-offset px-4 md:px-16 lg:px-32 mt-20"
    >
      <h2 className="text-3xl font-bold mb-10 text-center">Publications</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {publications.map((pub, idx) => (
          <a
            key={idx}
            href={pub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                {pub.title}
              </h3>
              <ExternalLink size={18} className="shrink-0 text-slate-400" />
            </div>
            {pub.date && (
              <span className="text-xs font-medium inline-block bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 px-2 py-1 rounded">
                {pub.date}
              </span>
            )}
          </a>
        ))}
      </div>
    </section>
  );
}

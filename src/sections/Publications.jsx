import React from "react";
import publications from "../data/publications.json";

export default function Publications() {
  return (
    <section id="publications" className="scroll-offset px-4 md:px-16 lg:px-32 mt-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Publications</h2>
      <ul className="space-y-6 text-lg">
        {publications.map((pub, idx) => (
          <li key={idx}>
            <a
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              {pub.title}
            </a>
            <div className="text-sm text-slate-500 dark:text-slate-400">{pub.date}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}

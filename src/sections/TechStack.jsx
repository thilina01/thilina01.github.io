import React from "react";
import stack from "../data/techstack.json";

export default function TechStack() {
  return (
    <section id="techstack" className="scroll-offset px-4 md:px-16 lg:px-32 mt-16">
      <h2 className="text-3xl font-bold mb-12 text-center">Technology Stack</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(stack).map(([category, tools]) => (
          <div
            key={category}
            className="bg-white dark:bg-slate-900 rounded-2xl shadow-md hover:shadow-lg transition duration-300 border border-slate-200 dark:border-slate-700 p-5"
          >
            <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-slate-100">
              {category}
            </h3>
            <ul className="text-sm flex flex-wrap gap-2 text-slate-700 dark:text-slate-300 list-none pl-0">
              {tools.map((tool, idx) => (
                <li
                  key={idx}
                  className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md text-xs flex items-center gap-2"
                >
                  {tool.icon && <i className={`${tool.icon} text-base`} />}
                  {tool.name || tool}
                </li>

              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
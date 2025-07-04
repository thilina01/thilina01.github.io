import React from "react";
import { ExternalLink } from "lucide-react";

export default function Card({ title, text, isLinked = false }) {
  return (
    <div
      className={`p-6 rounded-2xl transition duration-300 shadow-md ${
        isLinked
          ? "bg-white dark:bg-slate-900 hover:shadow-lg cursor-pointer border border-blue-200 dark:border-blue-700"
          : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700"
      }`}
    >
      <h2 className="text-xl font-semibold mb-2 flex items-center justify-between">
        <span>{title}</span>
        {isLinked && (
          <ExternalLink
            size={18}
            className="text-slate-400 shrink-0"
            title="Has dedicated project page"
          />
        )}
      </h2>
      <p>{text}</p>

      {isLinked && (
        <span className="inline-block mt-3 text-xs font-medium bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 px-2 py-0.5 rounded">
          View Details
        </span>
      )}
    </div>
  );
}

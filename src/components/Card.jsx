import React from "react";

export default function Card({ title, text }) {
  return (
    <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p>{text}</p>
    </div>
  );
}

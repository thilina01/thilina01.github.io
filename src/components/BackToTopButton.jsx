import React from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTopButton({ visible }) {
  if (!visible) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
    >
      <ArrowUp size={20} />
    </button>
  );
}

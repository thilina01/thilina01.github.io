import React from "react";
import hero from "../data/hero.json";

export default function HeroSection() {
  return (
    <section className="text-center px-4 py-12 md:px-16 lg:px-32 mb-20">
      <h1 className="text-5xl font-bold mb-4">{hero.headline}</h1>
      <p className="text-xl max-w-2xl mx-auto">{hero.description}</p>
    </section>
  );
}

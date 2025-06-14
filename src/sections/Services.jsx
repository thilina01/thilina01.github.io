import React from "react";
import Card from "../components/Card";
import services from "../data/services.json";

export default function Services() {
  return (
    <section id="services" className="scroll-offset grid gap-8 px-4 md:px-16 lg:px-32 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <Card key={index} title={service.title} text={service.text} />
      ))}
    </section>
  );
}

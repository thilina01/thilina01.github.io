import React from "react";
import Card from "../components/Card";

export default function Projects() {
  return (
    <section id="projects" className="scroll-offset px-4 md:px-16 lg:px-32 mt-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        <Card title="AI Review Pipeline" text="Auto MR reviewer with OpenAI integration." />
        <Card title="SMS Gateway" text="Robust and secure SMS gateway solution with API support." />
        <Card title="Production Monitoring & KPI" text="End-to-end monitoring of production KPIs with integrated traceability for the manufacturing sector." />
        <Card title="Microservice Status Monitor" text="Mobile dashboard for tracking microservice health with real-time downtime alerts." />
        <Card title="Node.js API Generator" text="Generate a complete and standardized Node.js API based on your MySQL schema." />
        <Card title="Document Workflow Monitor" text="Monitor internal document flow and process status across departments." />
        <Card title="Flashcard Learning App" text="A colorful and engaging flashcard app to help kids learn through play." />
      </div>
    </section>
  );
}

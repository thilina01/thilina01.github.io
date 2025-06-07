import React from "react";
import Card from "../components/Card";

export default function Projects() {
  return (
    <section id="projects" className="px-4 md:px-16 lg:px-32 mt-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        <Card title="TravelBox" text="Travel management platform using Java, Angular, K8s, GitLab CI/CD." />
        <Card title="CG BE Generator" text="AI-generated Spring Boot APIs from specs. 50% dev time saved." />
        <Card title="AI Review Pipeline" text="Auto MR reviewer with OpenAI integration." />
        <Card title="Production Monitoring" text="Realtime KPIs for manufacturing. Kafka, ELK, Angular." />
      </div>
    </section>
  );
}

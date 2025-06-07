import React from "react";

export default function Publications() {
  return (
    <section id="publications" className="px-4 md:px-16 lg:px-32 mt-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Publications</h2>
      <ul className="space-y-4 text-lg list-disc list-inside">
        <li>CI/CD with Angular & GitHub Actions (Oct 2023)</li>
        <li>Multi-App Hosting with Docker Swarm (Jul 2023)</li>
        <li>Kubernetes on RHEL (Jun 2023)</li>
        <li>Spring Boot Logging in Docker (May 2020)</li>
      </ul>
    </section>
  );
}

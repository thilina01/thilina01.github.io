import React from "react";
import FeatureList from "./FeatureList";
import TechStackTable from "./TechStackTable";
import ImageCarousel from "./ImageCarousel";

export default function ProjectPageLayout({ project }) {
  return (
    <main className="px-4 md:px-16 lg:px-32 py-10 max-w-screen-xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-lg mb-8">{project.description}</p>

      {project.images?.length > 0 && <ImageCarousel images={project.images} />}
      {project.download && (
        <div className="my-6">
          <a href={project.download.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline text-lg">
            ▶️ {project.download.label}
          </a>
        </div>
      )}

      {project.features && <FeatureList features={project.features} />}
      {project.techStack && <TechStackTable stack={project.techStack} />}

      {project.architecture && (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">🏗️ Architecture Highlights</h2>
          <ul className="list-disc pl-6 space-y-2">
            {project.architecture.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        </section>
      )}

      {project.cicd && (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">📦 CI/CD Automation</h2>
          <ul className="list-disc pl-6 space-y-2">
            {project.cicd.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        </section>
      )}

      {project.takeaways && (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">💡 Learning Takeaways</h2>
          <ul className="list-disc pl-6 space-y-2">
            {project.takeaways.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        </section>
      )}

      {project.sourceAccess && (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">🔒 Source Access</h2>
          <p className="text-base">{project.sourceAccess}</p>
        </section>
      )}

      {project.developer && (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">👤 About the Developer</h2>
          <p className="text-base">{project.developer}</p>
        </section>
      )}
    </main>
  );
}

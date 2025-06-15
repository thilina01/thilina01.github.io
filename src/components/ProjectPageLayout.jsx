import React from "react";
import FeatureList from "./FeatureList";
import TechStackTable from "./TechStackTable";
import ImageCarousel from "./ImageCarousel";


export default function ProjectPageLayout({ project }) {
  return (
    <main className="px-4 md:px-16 lg:px-32 py-10 max-w-screen-xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-lg mb-8">{project.description}</p>

      {/* {project.images?.map((img, idx) => (
        <div key={idx} className="mb-6">
          <img src={img.src} alt={img.alt} className="rounded-lg shadow-md" />
          <p className="text-sm text-slate-500 mt-1">{img.caption}</p>
        </div>
      ))} */}
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
    </main>
  );
}

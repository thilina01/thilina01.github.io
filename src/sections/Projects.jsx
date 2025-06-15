import React from "react";
import Card from "../components/Card";
import projects from "../data/projects.json";
import { Link } from "react-router-dom";  // ⬅️ Add this

export default function Projects() {
  return (
    <section id="projects" className="scroll-offset px-4 md:px-16 lg:px-32 mt-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          project.link ? (
            <Link to={project.link} key={index}>
            <Card title={project.title} text={project.text} />
            </Link>
          ) : (
            <Card key={index} title={project.title} text={project.text} />
          )
        ))}
      </div>
    </section>
  );
}

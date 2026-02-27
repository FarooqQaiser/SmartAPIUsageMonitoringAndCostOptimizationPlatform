// src/components/Projects/ProjectsList.jsx
import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsList = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;

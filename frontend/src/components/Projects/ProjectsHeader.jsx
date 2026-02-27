// src/components/Projects/ProjectsHeader.jsx
import React from "react";

const ProjectsHeader = ({ onCreate, projects }) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-black dark:text-white">
          Projects
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Manage your monitored applications
        </p>
      </div>

      {projects.length !== 0 && (
        <button
          onClick={onCreate}
          className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 cursor-pointer"
        >
          + New Project
        </button>
      )}
    </div>
  );
};

export default ProjectsHeader;

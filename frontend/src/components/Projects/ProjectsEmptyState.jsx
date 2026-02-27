import React from "react";

const ProjectsEmptyState = ({ onCreate }) => {
  return (
    <div className="border border-dashed rounded-xl p-10 text-center text-black dark:text-white">
      <h3 className="text-lg font-medium">No projects yet</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
        Create your first project to start monitoring API usage.
      </p>
      <button
        onClick={onCreate}
        className="mt-4 px-4 py-2 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 rounded-lg cursor-pointer"
      >
        + Create Project
      </button>
    </div>
  );
};

export default ProjectsEmptyState;

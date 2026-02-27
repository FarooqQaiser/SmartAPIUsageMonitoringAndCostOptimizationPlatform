// src/components/Projects/ProjectCard.jsx
import React from "react";
import ApiKeyField from "./ApiKeyField";

const ProjectCard = ({ project }) => {
  return (
    <div className="border border-gray-300 dark:border-gray-800 rounded-xl p-5 bg-primary dark:bg-primary shadow-sm transition cursor-pointer">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg text-black dark:text-white font-semibold">
            {project.name}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {project.id}
          </p>
        </div>

        <span
          className={`text-xs px-2 py-1 rounded-full ${
            project.status === "active"
              ? "bg-green-100 dark:bg-green-300 text-green-700 dark:text-green-900"
              : "bg-yellow-100 dark:bg-yellow-300 text-yellow-700 dark:text-yellow-900"
          }`}
        >
          {project.status}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.providers.map((p) => (
          <span
            key={p}
            className="text-xs bg-black dark:bg-white text-white dark:text-black px-2 py-1 rounded"
          >
            {p}
          </span>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
        <div>
          <p className="text-gray-600 dark:text-gray-300">Requests</p>
          <p className="font-medium text-gray-700 dark:text-gray-400">
            {project.monthlyRequests.toLocaleString()}
          </p>
        </div>
        <div>
          <p className="text-gray-600 dark:text-gray-300">Monthly Cost</p>
          <p className="font-medium text-gray-700 dark:text-gray-400">
            ${project.estimatedCost}
          </p>
        </div>
        <div>
          <p className="text-gray-600 dark:text-gray-300">API Key</p>
          <ApiKeyField apiKey={project.apiKey} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

// src/pages/Projects/Projects.jsx
import React, { useState } from "react";
import ProjectsHeader from "../components/Projects/ProjectsHeader";
import ProjectsList from "../components/Projects/ProjectsList";
import ProjectsEmptyState from "../components/Projects/ProjectsEmptyState";
import CreateProjectModal from "../components/Projects/CreateProjectModal";

const Projects = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const [projects, setProjects] = useState([
    {
      id: "proj_1",
      name: "Payment Service",
      providers: ["OpenAI", "Stripe"],
      apiKey: "sk_live_123456789",
      monthlyRequests: 125000,
      estimatedCost: 430.75,
      status: "active",
    },
    {
      id: "proj_2",
      name: "Notification Engine",
      providers: ["Twilio", "SendGrid"],
      apiKey: "sk_live_987654321",
      monthlyRequests: 58200,
      estimatedCost: 180.2,
      status: "paused",
    },
  ]);

  const handleCreateProject = (project) => {
    setProjects((prev) => [...prev, project]);
    setShowCreateModal(false);
  };

  return (
    <div className="space-y-6">
      <ProjectsHeader
        onCreate={() => setShowCreateModal(true)}
        projects={projects}
      />

      {projects.length === 0 ? (
        <ProjectsEmptyState onCreate={() => setShowCreateModal(true)} />
      ) : (
        <ProjectsList projects={projects} />
      )}

      {showCreateModal && (
        <CreateProjectModal
          onClose={() => setShowCreateModal(false)}
          onCreate={handleCreateProject}
        />
      )}
    </div>
  );
};

export default Projects;

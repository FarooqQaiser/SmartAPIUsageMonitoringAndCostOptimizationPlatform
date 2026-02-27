// src/components/Projects/CreateProjectModal.jsx
import React, { useState } from "react";

const CreateProjectModal = ({ onClose, onCreate }) => {
  const [name, setName] = useState("");
  const [providers, setProviders] = useState([]);

  const toggleProvider = (p) => {
    setProviders((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]
    );
  };

  const handleSubmit = () => {
    if (!name) return;

    onCreate({
      id: "proj_" + Date.now(),
      name,
      providers,
      apiKey: "sk_live_" + Math.random().toString(36).slice(2, 10),
      monthlyRequests: 0,
      estimatedCost: 0,
      status: "active",
    });
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-primary dark:bg-primary border border-gray-300 dark:border-gray-800 text-black dark:text-white rounded-xl p-6 w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Create Project</h2>

        <input
          className="w-full border rounded px-3 py-2 mb-4 text-gray-600 dark:text-gray-300"
          placeholder="Project name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div className="mb-4">
          <p className="text-sm font-medium mb-2">API Providers</p>
          {["OpenAI", "Stripe", "Twilio", "SendGrid"].map((p) => (
            <label key={p} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={providers.includes(p)}
                onChange={() => toggleProvider(p)}
              />
              <span className="cursor-pointer">{p}</span>
            </label>
          ))}
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm dark:bg-black bg-white dark:text-white text-black dark:hover:bg-gray-800 hover:bg-gray-200 rounded-lg cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 text-sm bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 rounded-lg cursor-pointer"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectModal;

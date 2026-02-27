import React from "react";

export default function SettingsCard({ title, children }) {
  return (
    <div className="bg-primary border border-gray-300 dark:border-gray-800 rounded-2xl p-6 shadow">
      <h3 className="font-semibold text-lg mb-4 text-title-primary">{title}</h3>
      {children}
    </div>
  );
}

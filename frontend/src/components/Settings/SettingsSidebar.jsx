import React from "react";

const sections = [
  { id: "general", label: "General" },
  { id: "notifications", label: "Notifications" },
  { id: "integrations", label: "API Integrations" },
  { id: "cost", label: "Cost & Budget" },
  { id: "security", label: "Security" },
  { id: "account", label: "Account" },
  { id: "preferences", label: "Preferences" },
  { id: "danger", label: "Danger Zone" },
];

export default function SettingsSidebar({ activeSection, setActiveSection }) {
  return (
    <aside className="w-64 bg-primary border border-gray-300 dark:border-gray-800 rounded-2xl p-4 max-w-full">
      <h2 className="text-lg text-title-primary font-bold mb-4">Settings</h2>
      <ul className="space-y-1">
        {sections.map((item) => (
          <li
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden cursor-pointer ${
              activeSection === item.id
                ? "bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                : "text-gray-400 hover:text-black hover:bg-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
            }`}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </aside>
  );
}

import React from "react";

export default function RecommendationFilters({ filter, setFilter }) {
  const filters = [
    { id: "all", label: "All" },
    { id: "cost", label: "Cost" },
    { id: "performance", label: "Performance" },
    { id: "security", label: "Security" },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((f) => (
        <button
          key={f.id}
          onClick={() => setFilter(f.id)}
          className={`px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-800 cursor-pointer ${
            filter === f.id
              ? "bg-primary text-black dark:text-white"
              : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200"
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}

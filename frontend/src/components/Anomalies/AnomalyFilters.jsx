import React from "react";

export default function AnomalyFilters({ filter, setFilter }) {
  const filters = ["All", "High", "Medium", "Low"];

  return (
    <div className="flex gap-3">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-800 cursor-pointer ${
            filter === f
              ? "bg-primary text-black dark:text-white"
              : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}

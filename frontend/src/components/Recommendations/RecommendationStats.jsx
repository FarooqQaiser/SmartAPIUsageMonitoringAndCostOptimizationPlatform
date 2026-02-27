import React from "react";

export default function RecommendationStats({ data }) {
  const total = data.length;
  const cost = data.filter((d) => d.type === "cost").length;
  const performance = data.filter((d) => d.type === "performance").length;
  const security = data.filter((d) => d.type === "security").length;

  const stats = [
    { label: "Total", value: total },
    { label: "Cost", value: cost },
    { label: "Performance", value: performance },
    { label: "Security", value: security },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="bg-primary border border-gray-300 dark:border-gray-800 rounded-xl p-4 shadow"
        >
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {stat.label}
          </p>
          <p className="text-2xl font-bold text-title-primary">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}

import React from "react";

const KPIS = [
  { label: "Total Requests", value: "124,820", trend: "+12%" },
  { label: "Avg Latency", value: "238 ms", trend: "-8%" },
  { label: "Error Rate", value: "1.4%", trend: "-0.3%" },
  { label: "Peak Hour", value: "08:00", trend: "↑" },
];

export default function UsageKpiCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {KPIS.map((kpi) => (
        <div
          key={kpi.label}
          className="bg-primary backdrop-blur-sm rounded-xl p-4 border border-gray-300 dark:border-gray-800"
        >
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {kpi.label}
          </p>
          <p className="text-xl font-bold text-title-primary">{kpi.value}</p>
          <p className="text-sm text-green-500">{kpi.trend}</p>
        </div>
      ))}
    </div>
  );
}

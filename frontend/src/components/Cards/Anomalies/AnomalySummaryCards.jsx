import React from "react";

const Card = ({ title, value }) => (
  <div className="bg-primary rounded-2xl p-5 border border-gray-300 dark:border-gray-800 shadow-lg">
    <p className="text-sm text-title-primary">{title}</p>
    <h3 className="text-2xl text-black dark:text-white font-bold mt-1">
      {value}
    </h3>
  </div>
);

export default function AnomalySummaryCards({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <Card title="Total Anomalies" value={data.length} />
      <Card
        title="High Severity"
        value={data.filter((a) => a.severity === "High").length}
      />
      <Card
        title="Affected APIs"
        value={[...new Set(data.map((a) => a.provider))].length}
      />
      <Card
        title="Estimated Cost Impact"
        value={`$${data.reduce((sum, a) => sum + a.estimatedCostImpact, 0)}`}
      />
    </div>
  );
}

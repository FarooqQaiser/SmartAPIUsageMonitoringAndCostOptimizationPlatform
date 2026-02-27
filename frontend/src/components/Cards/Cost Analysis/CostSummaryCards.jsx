import React from "react";
import StatCard from "./StatCard";

export default function CostSummaryCards({ summary }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <StatCard title="Total Cost" value={`$${summary.totalCost}`} />
      <StatCard title="Avg Daily Cost" value={`$${summary.avgDaily}`} />
      <StatCard title="Highest Cost API" value={summary.highestApi} />
      <StatCard
        title="Cost Change"
        value={`${summary.change}%`}
        extra={
          <span
            className={summary.change > 0 ? "text-red-500" : "text-green-500"}
          >
            vs previous period
          </span>
        }
      />
    </div>
  );
}

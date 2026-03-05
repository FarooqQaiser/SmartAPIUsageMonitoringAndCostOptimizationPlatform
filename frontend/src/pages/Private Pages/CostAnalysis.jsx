import React from "react";
import {
  costSummary,
  distributionData,
  timelineData,
  breakdownTableData,
} from "../../data/costAnalysisMockData";
import CostTable from "../../components/Tables/Cost Analysis/CostTable";
import CostTimeline from "../../components/Charts/Cost Analysis/CostTimeline";
import CostDistribution from "../../components/Charts/Cost Analysis/CostDistribution";
import CostSummaryCards from "../../components/Cards/Cost Analysis/CostSummaryCards";

export default function CostAnalysis() {
  return (
    <div className="p-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-title-primary">Cost Analysis</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-1">
          Monitor, analyze, and optimize API spending
        </p>
      </div>

      <CostSummaryCards summary={costSummary} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CostDistribution data={distributionData} />
        <CostTimeline data={timelineData} />
      </div>

      <CostTable data={breakdownTableData} />
    </div>
  );
}

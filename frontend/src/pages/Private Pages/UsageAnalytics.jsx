import React, { useState } from "react";
import UsageHeader from "../../components/Usage Analytics/UsageHeader";
import UsageKpiCards from "../../components/Usage Analytics/UsageKpiCards";
import RequestsTimeline from "../../components/Charts/Usage Analytics/RequestsTimeline";
import ProviderBreakdown from "../../components/Charts/Usage Analytics/ProviderBreakdown";
import EndpointUsageTable from "../../components/Tables/Usage Analytics/EndpointUsageTable";
import UsageAlerts from "../../components/Alerts/Usage Analytics/UsageAlerts";

export default function UsageAnalytics() {
  const [timeRange, setTimeRange] = useState("24h");

  return (
    <div className="space-y-6">
      <UsageHeader timeRange={timeRange} setTimeRange={setTimeRange} />

      <UsageKpiCards />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RequestsTimeline />
        <ProviderBreakdown />
      </div>

      <EndpointUsageTable />

      <UsageAlerts />
    </div>
  );
}

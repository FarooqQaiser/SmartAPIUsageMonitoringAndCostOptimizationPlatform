import React, { useState } from "react";
import AnomalyDetailsPanel from "../../components/Anomalies/AnomalyDetailsPanel";
import AnomalyTable from "../../components/Tables/Anomalies/AnomalyTable";
import AnomalyTimelineChart from "../../components/Charts/Anomalies/AnomalyTimelineChart";
import AnomalyFilters from "../../components/Anomalies/AnomalyFilters";
import AnomalySummaryCards from "../../components/Cards/Anomalies/AnomalySummaryCards";
import { anomaliesData } from "../../data/anomaliesMockData";

export default function Anomalies() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const filteredData =
    filter === "All"
      ? anomaliesData
      : anomaliesData.filter((a) => a.severity === filter);

  return (
    <div className="p-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-title-primary">Anomalies</h1>
        <p className="dark:text-gray-300 text-gray-600 mt-1">
          Detected abnormal API behavior and risks
        </p>
      </div>

      <AnomalySummaryCards data={anomaliesData} />

      <div className="flex justify-between items-center">
        <AnomalyFilters filter={filter} setFilter={setFilter} />
      </div>

      <AnomalyTable data={filteredData} onSelect={setSelected} />

      <AnomalyTimelineChart />

      <AnomalyDetailsPanel
        anomaly={selected}
        onClose={() => setSelected(null)}
      />
    </div>
  );
}

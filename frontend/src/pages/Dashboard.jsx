import React from "react";
import UsageChart from "../components/Charts/Dashboard/UsageChart";
import CostChart from "../components/Charts/Dashboard/CostChart";
import KPICards from "../components/Cards/KPICards";
import EndpointTable from "../components/Tables/EndpointTable";

export default function Dashboard() {
  const anomalies = [
    {
      id: 1,
      type: "spike",
      severity: "high",
      endpoint: "/v1/chat/completions",
      message: "Traffic spike detected: 340% above baseline",
      time: "2m ago",
    },
    {
      id: 2,
      type: "error",
      severity: "medium",
      endpoint: "/v1/charges",
      message: "Error rate increased to 4.2%",
      time: "15m ago",
    },
    {
      id: 3,
      type: "latency",
      severity: "low",
      endpoint: "/v1/embeddings",
      message: "Latency degradation: +120ms avg",
      time: "1h ago",
    },
  ];

  return (
    <>
      {/* KPI Cards */}
      <KPICards />

      {/* Usage Timeline & Cost */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <UsageChart />
        <CostChart />
      </div>

      {/* Top Endpoints Table */}
      <EndpointTable />

      {/* Anomalies List */}
      <div className="bg-primary backdrop-blur-sm rounded-2xl p-6 border border-gray-300 dark:border-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300">
        <h2 className="text-xl font-bold mb-4 text-title-primary">Anomalies</h2>
        <ul className="space-y-3">
          {anomalies.map((anomaly) => (
            <li
              key={anomaly.id}
              className="p-4 rounded-xl border border-gray-300 dark:border-gray-800 flex justify-between items-center hover:shadow-lg transition-all duration-300"
            >
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {anomaly.message}
                </p>
                <span className="text-xs dark:text-gray-400 text-gray-500">
                  {anomaly.time}
                </span>
              </div>
              <span
                className={`px-2 py-1 rounded-full text-xs font-bold ${
                  anomaly.severity === "high"
                    ? "bg-red-300 text-red-700"
                    : anomaly.severity === "medium"
                    ? "bg-yellow-300 text-yellow-700"
                    : "bg-green-300 text-green-700"
                }`}
              >
                {anomaly.severity}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

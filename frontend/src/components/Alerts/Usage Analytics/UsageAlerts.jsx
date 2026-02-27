import React from "react";

const alerts = [
  {
    id: 1,
    message: "Traffic spike detected on /v1/chat/completions",
    time: "5 min ago",
    severity: "high",
  },
  {
    id: 2,
    message: "Latency increased on /v1/charges",
    time: "18 min ago",
    severity: "medium",
  },
];

export default function UsageAlerts() {
  return (
    <div className="bg-primary rounded-2xl p-6 border border-gray-300 dark:border-gray-800">
      <h2 className="font-semibold mb-4 text-title-primary">
        Recent Usage Alerts
      </h2>

      <div className="space-y-3">
        {alerts.map((alert) => (
          <div key={alert.id} className="flex justify-between text-sm">
            <span className="dark:text-gray-300 text-gray-600">
              {alert.message}
            </span>
            <span className="dark:text-gray-400 text-gray-500">
              {alert.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

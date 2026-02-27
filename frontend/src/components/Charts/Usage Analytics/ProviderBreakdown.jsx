import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "OpenAI", value: 52, color: "#10b981" },
  { name: "Stripe", value: 28, color: "#8b5cf6" },
  { name: "Twilio", value: 12, color: "#f59e0b" },
  { name: "Other", value: 8, color: "#ec4899" },
];

export default function ProviderBreakdown() {
  return (
    <div className="bg-primary rounded-2xl p-6 border border-gray-300 dark:border-gray-800">
      <h2 className="font-semibold mb-4 text-title-primary">Provider Usage</h2>

      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie data={data} dataKey="value" innerRadius={50} outerRadius={80}>
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

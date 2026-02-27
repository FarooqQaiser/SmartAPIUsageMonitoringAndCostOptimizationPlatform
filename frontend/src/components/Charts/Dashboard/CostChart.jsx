import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import CostChartToolTip from "../../Custom Tool Tip/CostChartToolTip";

export default function CostChart() {
  const costData = [
    { name: "OpenAI", value: 2847, color: "#10b981" },
    { name: "Stripe", value: 1234, color: "#8b5cf6" },
    { name: "Twilio", value: 876, color: "#f59e0b" },
    { name: "SendGrid", value: 543, color: "#ec4899" },
  ];

  return (
    <div className="bg-primary dark:bg-primary backdrop-blur-sm rounded-2xl p-6 border border-gray-300 dark:border-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300">
      <h2 className="text-xl font-bold mb-6 text-title-primary dark:text-title-primary">
        Cost Distribution
      </h2>

      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={costData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {costData.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>

          <Tooltip content={<CostChartToolTip />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

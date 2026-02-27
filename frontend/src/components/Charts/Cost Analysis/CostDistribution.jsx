import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import CustomPieTooltip from "../../Custom Tool Tip/Cost Analysis/CustomPieTooltip";

export default function CostDistribution({ data }) {
  return (
    <div className="bg-primary rounded-2xl p-6 border border-gray-300 dark:border-gray-800 shadow-xl">
      <h2 className="text-xl font-bold mb-4 text-title-primary">
        Cost Distribution
      </h2>
      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie data={data} dataKey="value" innerRadius={70} outerRadius={100}>
            {data.map((d, i) => (
              <Cell key={i} fill={d.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomPieTooltip />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

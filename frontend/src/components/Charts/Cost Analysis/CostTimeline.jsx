import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CustomAreaTooltip from "../../Custom Tool Tip/Cost Analysis/CustomAreaTooltip";

export default function CostTimeline({ data }) {
  return (
    <div className="bg-primary rounded-2xl p-6 border border-gray-300 dark:border-gray-800 shadow-xl">
      <h2 className="text-xl text-title-primary font-bold mb-4">
        Cost Over Time
      </h2>
      <ResponsiveContainer width="100%" height={260}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip content={<CustomAreaTooltip />} />
          <Area dataKey="openai" stroke="#10b981" fill="#10b98144" />
          <Area dataKey="stripe" stroke="#8b5cf6" fill="#8b5cf644" />
          <Area dataKey="twilio" stroke="#f59e0b" fill="#f59e0b44" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

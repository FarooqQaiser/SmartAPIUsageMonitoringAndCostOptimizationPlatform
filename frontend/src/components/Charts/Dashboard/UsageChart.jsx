import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import CustomToolTip from "../../Custom Tool Tip/APIUsageToolTip";

export default function UsageChart() {
  const usageData = [
    { time: "00:00", openai: 1200, stripe: 800, other: 400 },
    { time: "04:00", openai: 800, stripe: 400, other: 198 },
    { time: "08:00", openai: 5000, stripe: 3000, other: 1800 },
    { time: "12:00", openai: 2000, stripe: 1200, other: 708 },
    { time: "16:00", openai: 2500, stripe: 1500, other: 800 },
    { time: "20:00", openai: 2000, stripe: 1200, other: 600 },
  ];

  return (
    <div className="lg:col-span-2 bg-primary dark:bg-primary backdrop-blur-md rounded-2xl p-6 border border-gray-300 dark:border-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300">
      <h2 className="text-xl font-bold mb-4 bg-linear-to-r text-title-primary dark:text-title-primary bg-clip-text text-transparent">
        API Usage Timeline
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={usageData}>
          <defs>
            <linearGradient id="openaiGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>

            <linearGradient id="stripeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
            </linearGradient>

            <linearGradient id="otherGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="time" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip content={<CustomToolTip />} />

          <Area
            type="monotone"
            dataKey="openai"
            stackId="1"
            stroke="#10b981"
            fill="url(#openaiGradient)"
          />
          <Area
            type="monotone"
            dataKey="stripe"
            stackId="1"
            stroke="#8b5cf6"
            fill="url(#stripeGradient)"
          />
          <Area
            type="monotone"
            dataKey="other"
            stackId="1"
            stroke="#f59e0b"
            fill="url(#otherGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

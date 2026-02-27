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

const data = [
  { time: "00:00", requests: 2400 },
  { time: "04:00", requests: 1800 },
  { time: "08:00", requests: 5200 },
  { time: "12:00", requests: 3200 },
  { time: "16:00", requests: 4100 },
  { time: "20:00", requests: 3600 },
];

export default function RequestsTimeline() {
  return (
    <div className="lg:col-span-2 bg-primary rounded-2xl p-6 border border-gray-300 dark:border-gray-800">
      <h2 className="font-semibold mb-4 text-title-primary">
        Requests Over Time
      </h2>

      <ResponsiveContainer width="100%" height={260}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="requests"
            stroke="#3b82f6"
            fill="#3b82f6"
            fillOpacity={0.2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

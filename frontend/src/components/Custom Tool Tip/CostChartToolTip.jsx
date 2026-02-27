import React from "react";

export default function CostChartToolTip({ active, payload }) {
  if (!active || !payload || !payload.length) return null;

  const { name, value, payload: raw } = payload[0];

  return (
    <div className="bg-primary dark:bg-primary border border-gray-300 dark:border-gray-800 rounded-xl p-4 shadow-2xl min-w-40">
      <p className="text-xs uppercase text-gray-400 mb-2">Provider</p>

      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: raw.color }}
          />
          <span className="text-sm text-black dark:text-white">{name}</span>
        </div>

        <span className="text-black dark:text-white font-semibold">
          ${value.toLocaleString()}
        </span>
      </div>
    </div>
  );
}

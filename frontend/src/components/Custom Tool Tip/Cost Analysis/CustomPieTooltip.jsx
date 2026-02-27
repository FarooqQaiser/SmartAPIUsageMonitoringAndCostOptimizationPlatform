import React from "react";

export default function CustomPieTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;

  const { name, value } = payload[0].payload;

  return (
    <div className="bg-primary dark:bg-primary border border-gray-300 dark:border-gray-800 rounded-xl p-4 shadow-2xl min-w-40">
      <p className="text-sm text-black dark:text-white">{name}</p>
      <p className="font-semibold text-black dark:text-white mt-1">
        ${value.toLocaleString()}
      </p>
    </div>
  );
}

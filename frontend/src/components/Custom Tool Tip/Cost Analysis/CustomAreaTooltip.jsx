import React from "react";

export default function CustomAreaTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;

  return (
    <div className="bg-primary text-black dark:text-white px-4 py-3 rounded-xl shadow-xl border border-gray-300 dark:border-gray-700">
      <p className="font-semibold mb-1">{label}</p>
      {payload.map((p) => (
        <p key={p.name} className="text-sm">
          {p.name}: ${p.value}
        </p>
      ))}
    </div>
  );
}

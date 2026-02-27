import React from "react";

export default function APIUsageToolTip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null;

  const total = payload.reduce((sum, item) => sum + item.value, 0);

  const labelMap = {
    openai: "OpenAI",
    stripe: "Stripe",
    other: "Other",
  };

  return (
    <div className="bg-primary dark:bg-primary backdrop-blur-md border border-gray-300 dark:border-gray-800 rounded-2xl p-4 shadow-2xl min-w-45">
      <p className="text-xs uppercase tracking-wide text-gray-400 mb-3">
        {label}
      </p>

      <div className="space-y-2">
        {payload.map((item) => (
          <div
            key={item.dataKey}
            className="flex items-center justify-between text-sm"
          >
            <span className="flex items-center gap-2 text-black dark:text-white">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              {labelMap[item.dataKey]}
            </span>
            <span className="font-medium text-black dark:text-white">
              {item.value.toLocaleString()}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-3 pt-3 border-t border-gray-700 flex items-center justify-between text-sm">
        <span className="text-gray-800 dark:text-gray-400">Total</span>
        <span className="text-black dark:text-white font-semibold">
          {total.toLocaleString()}
        </span>
      </div>
    </div>
  );
}

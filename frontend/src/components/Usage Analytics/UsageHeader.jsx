import React from "react";

export default function UsageHeader({ timeRange, setTimeRange }) {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold text-title-primary">Usage Analytics</h1>

      <div className="flex gap-2 bg-[#bdbdbd] dark:bg-[#424242] rounded-xl p-1 transition-colors duration-300">
        {["1h", "24h", "7d", "30d"].map((range) => (
          <button
            key={range}
            onClick={() => setTimeRange(range)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
              timeRange === range
                ? "bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
            }`}
          >
            {range}
          </button>
        ))}
      </div>
    </div>
  );
}

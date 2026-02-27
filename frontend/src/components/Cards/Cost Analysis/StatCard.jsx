import React from "react";

export default function StatCard({ title, value, extra }) {
  return (
    <div className="bg-primary rounded-2xl p-5 border border-gray-300 dark:border-gray-800 shadow-lg">
      <p className="text-sm text-title-primary">{title}</p>
      <h3 className="text-2xl font-bold mt-1 text-black dark:text-white">
        {value}
      </h3>
      {extra && <p className="text-sm mt-1">{extra}</p>}
    </div>
  );
}

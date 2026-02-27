import React from "react";

export default function CostTable({ data }) {
  return (
    <div className="bg-primary rounded-2xl p-6 border shadow-xl">
      <h2 className="text-xl text-title-primary font-bold mb-4">
        Detailed Breakdown
      </h2>

      <table className="w-full text-sm">
        <thead className="border-b border-gray-600 dark:border-gray-300">
          <tr className="text-title-primary">
            <th className="text-left py-3">API</th>
            <th>Requests</th>
            <th>Cost / Req</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row.api}
              className="text-gray-600 dark:text-gray-300 border-b border-gray-600 dark:border-gray-300"
            >
              <td className="py-3 font-medium">{row.api}</td>
              <td className="text-center">{row.requests}</td>
              <td className="text-center">${row.costPerReq}</td>
              <td className="text-center">${row.total}</td>
              <td className="text-center">
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    row.status === "Spike"
                      ? "bg-red-100 dark:bg-red-300 text-red-700 dark:text-red-900"
                      : row.status === "Normal"
                      ? "bg-green-100 dark:bg-green-300 text-green-700 dark:text-green-900"
                      : "bg-yellow-100 dark:bg-yellow-300 text-yellow-700 dark:text-yellow-900"
                  }`}
                >
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import React from "react";

export default function EndpointTable() {
  const endpointData = [
    {
      endpoint: "/v1/chat/completions",
      requests: 45200,
      cost: 1245.8,
      latency: 342,
      errors: 12,
      trend: "up",
    },
    {
      endpoint: "/v1/embeddings",
      requests: 32100,
      cost: 892.5,
      latency: 125,
      errors: 5,
      trend: "down",
    },
    {
      endpoint: "/v1/charges",
      requests: 28900,
      cost: 678.3,
      latency: 234,
      errors: 8,
      trend: "up",
    },
    {
      endpoint: "/v1/messages",
      requests: 21300,
      cost: 456.2,
      latency: 189,
      errors: 3,
      trend: "stable",
    },
  ];

  return (
    <div className="bg-primary backdrop-blur-sm rounded-2xl p-6 border border-gray-300 dark:border-gray-800 shadow-xl mb-8 hover:shadow-2xl transition-all duration-300">
      <h2 className="text-xl font-bold mb-4 text-title-primary">
        Top Endpoints
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-800">
          <thead>
            <tr>
              {["Endpoint", "Requests", "Cost", "Latency", "Errors"].map(
                (head) => (
                  <th
                    key={head}
                    className="px-6 py-3 text-left text-xs font-medium text-title-primary uppercase tracking-wider"
                  >
                    {head}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300 dark:divide-gray-800">
            {endpointData.map((endpoint, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                  {endpoint.endpoint}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                  {endpoint.requests.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                  ${endpoint.cost.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                  {endpoint.latency}ms
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                  {endpoint.errors}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

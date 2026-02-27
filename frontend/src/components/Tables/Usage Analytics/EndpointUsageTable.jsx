import React from "react";

const endpoints = [
  {
    endpoint: "/v1/chat/completions",
    requests: 45200,
    latency: 342,
    errors: "0.8%",
    provider: "OpenAI",
  },
  {
    endpoint: "/v1/embeddings",
    requests: 32100,
    latency: 125,
    errors: "0.2%",
    provider: "OpenAI",
  },
  {
    endpoint: "/v1/charges",
    requests: 28900,
    latency: 234,
    errors: "1.2%",
    provider: "Stripe",
  },
];

export default function EndpointUsageTable() {
  return (
    <div className="bg-primary rounded-2xl p-6 border border-gray-300 dark:border-gray-800">
      <h2 className="font-semibold mb-4 text-title-primary">Endpoint Usage</h2>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-600 dark:text-gray-300">
            <th>Endpoint</th>
            <th>Requests</th>
            <th>Latency</th>
            <th>Error Rate</th>
            <th>Provider</th>
          </tr>
        </thead>
        <tbody>
          {endpoints.map((row) => (
            <tr
              key={row.endpoint}
              className="text-gray-500 dark:text-gray-400 border-t border-gray-300 dark:border-gray-700"
            >
              <td className="py-2">{row.endpoint}</td>
              <td>{row.requests.toLocaleString()}</td>
              <td>{row.latency} ms</td>
              <td>{row.errors}</td>
              <td>{row.provider}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import React from "react";
import AnomalyRow from "../../Anomalies/AnomalyRow";

export default function AnomalyTable({ data, onSelect }) {
  return (
    <div className="bg-primary rounded-2xl p-6 border border-gray-300 dark:border-gray-800 shadow-xl">
      <h2 className="text-xl text-title-primary font-bold mb-4">
        Detected Anomalies
      </h2>

      <table className="w-full text-sm">
        <thead className="border-b text-title-primary">
          <tr>
            <th className="text-left">Type</th>
            <th>Severity</th>
            <th>Provider</th>
            <th>Endpoint</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((a) => (
            <AnomalyRow key={a.id} anomaly={a} onSelect={onSelect} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

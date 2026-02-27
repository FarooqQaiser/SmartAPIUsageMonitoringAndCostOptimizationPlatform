import React from "react";
import SeverityBadge from "./SeverityBadge";
import StatusBadge from "./StatusBadge";

export default function AnomalyRow({ anomaly, onSelect }) {
  return (
    <tr
      className="text-gray-600 dark:text-gray-300 border-b border-gray-300 dark:border-gray-800 cursor-pointer hover:opacity-55"
      onClick={() => onSelect(anomaly)}
    >
      <td className="py-3">{anomaly.type}</td>
      <td>
        <SeverityBadge severity={anomaly.severity} />
      </td>
      <td>{anomaly.provider}</td>
      <td className="font-mono text-sm">{anomaly.endpoint}</td>
      <td>{anomaly.timestamp}</td>
      <td>
        <StatusBadge status={anomaly.status} />
      </td>
    </tr>
  );
}

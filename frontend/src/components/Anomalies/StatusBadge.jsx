import React from "react";
import { statusColor } from "../../utils/anomalyHelpers";

export default function StatusBadge({ status }) {
  return (
    <span className={`font-semibold ${statusColor(status)}`}>{status}</span>
  );
}

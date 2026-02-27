import React from "react";
import { severityColor } from "../../utils/anomalyHelpers";

export default function SeverityBadge({ severity }) {
  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${severityColor(
        severity
      )}`}
    >
      {severity}
    </span>
  );
}

import React from "react";

export default function PriorityBadges({ status, styling }) {
  return (
    <div
      className={`px-2 py-1 rounded-full text-white text-sm font-medium bg-linear-to-r inline-block ${styling}`}
    >
      {status}
    </div>
  );
}

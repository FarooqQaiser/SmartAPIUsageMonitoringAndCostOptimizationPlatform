import React from "react";

export default function RecommendationActions() {
  return (
    <div className="flex gap-2">
      <button className="px-4 py-2 text-sm dark:bg-black bg-white dark:text-white text-black dark:hover:bg-gray-800 hover:bg-gray-200 rounded-lg cursor-pointer">
        Apply
      </button>
      <button className="px-4 py-2 text-sm bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 rounded-lg cursor-pointer">
        Dismiss
      </button>
    </div>
  );
}

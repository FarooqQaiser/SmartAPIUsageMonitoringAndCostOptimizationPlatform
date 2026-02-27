import React from "react";
import RecommendationActions from "../../Recommendations/RecommendationActions";

export default function RecommendationCard({ recommendation }) {
  const badgeColor = {
    cost: "bg-green-100 text-green-700",
    performance: "bg-blue-100 text-blue-700",
    security: "bg-red-100 text-red-700",
  };

  return (
    <div className="bg-primary border border-gray-300 dark:border-gray-800 rounded-xl p-5 shadow hover:shadow-lg transition">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-semibold text-title-primary">
          {recommendation.title}
        </h3>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            badgeColor[recommendation.type]
          }`}
        >
          {recommendation.type}
        </span>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
        {recommendation.description}
      </p>

      <RecommendationActions />
    </div>
  );
}

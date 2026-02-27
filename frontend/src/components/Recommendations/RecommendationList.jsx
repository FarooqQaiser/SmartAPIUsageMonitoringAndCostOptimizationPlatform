import React from "react";
import RecommendationCard from "../Cards/Recommendations/RecommendationCard";

export default function RecommendationList({ data }) {
  if (!data.length) {
    return (
      <div className="text-center py-10 text-gray-500">
        No recommendations available
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {data.map((item) => (
        <RecommendationCard key={item.id} recommendation={item} />
      ))}
    </div>
  );
}

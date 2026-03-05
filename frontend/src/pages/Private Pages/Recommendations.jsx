import React, { useState } from "react";
import RecommendationStats from "../../components/Recommendations/RecommendationStats";
import RecommendationFilters from "../../components/Recommendations/RecommendationFilters";
import RecommendationList from "../../components/Recommendations/RecommendationList";
import recommendationsData from "../../data/recommendationsData";

export default function RecommendationsPage() {
  const [filter, setFilter] = useState("all");

  const filteredRecommendations =
    filter === "all"
      ? recommendationsData
      : recommendationsData.filter((item) => item.type === filter);

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-title-primary">
          Recommendations
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          AI-powered suggestions to optimize cost, performance, and reliability
        </p>
      </div>

      <RecommendationStats data={recommendationsData} />

      <RecommendationFilters filter={filter} setFilter={setFilter} />

      <RecommendationList data={filteredRecommendations} />
    </div>
  );
}

import React from "react";
import { X } from "lucide-react";

export default function AnomalyDetailsPanel({ anomaly, onClose }) {
  if (!anomaly) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="fixed right-0 top-16 h-full w-105 bg-primary border-l border-gray-300 dark:border-gray-800 shadow-2xl p-6">
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg transition-all duration-300 cursor-pointer"
        >
          <X className="w-6 h-6 text-gray-900 dark:text-white" />
        </button>

        <h2 className="text-xl text-title-primary font-bold mb-2">
          {anomaly.type}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {anomaly.description}
        </p>

        <div className="space-y-2 text-sm text-black dark:text-white">
          <p>
            <strong>Provider:</strong> {anomaly.provider}
          </p>
          <p>
            <strong>Endpoint:</strong> {anomaly.endpoint}
          </p>
          <p>
            <strong>Baseline:</strong> {anomaly.baseline}
          </p>
          <p>
            <strong>Current:</strong> {anomaly.current}
          </p>
          <p>
            <strong>Deviation:</strong> {anomaly.deviation}%
          </p>
          <p className="text-red-500">
            Estimated Cost Impact: ${anomaly.estimatedCostImpact}
          </p>
        </div>
      </div>
    </div>
  );
}

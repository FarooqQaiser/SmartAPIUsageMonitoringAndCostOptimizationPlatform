import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

export default function KPI({
  title,
  value,
  change,
  gradient,
  delay,
  icon: Icon,
}) {
  return (
    <div
      className={`cursor-pointer relative overflow-hidden rounded-2xl bg-linear-to-r ${gradient} p-6 shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-slideUp opacity-0`}
      style={{
        transitionDelay: `${delay}ms`,
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards",
      }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16 animate-pulse"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-white opacity-20 rounded-xl backdrop-blur-sm">
            {Icon && <Icon className="w-6 h-6 text-black" />}
          </div>
          {change !== undefined && (
            <div
              className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold ${
                change > 0
                  ? "bg-green-500 bg-opacity-20 text-green-100"
                  : "bg-red-500 bg-opacity-20 text-red-100"
              }`}
            >
              {change > 0 ? (
                <TrendingUp className="w-4 h-4" />
              ) : (
                <TrendingDown className="w-4 h-4" />
              )}
              {Math.abs(change)}%
            </div>
          )}
        </div>
        <h3 className="text-white text-opacity-80 text-sm font-medium mb-2">
          {title}
        </h3>
        <p className="text-white text-3xl font-bold tracking-tight">{value}</p>
      </div>
    </div>
  );
}

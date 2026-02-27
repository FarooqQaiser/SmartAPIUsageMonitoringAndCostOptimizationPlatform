import React from "react";
import { DollarSign, Zap, AlertTriangle, Activity } from "lucide-react";
import KPI from "../Cards/KPI";

export default function KPICards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <KPI
        title="Total API Requests"
        value="1.2M"
        change={12.5}
        icon={Activity}
        gradient="from-blue-600 to-cyan-600"
        delay={0}
      />
      <KPI
        title="Estimated Cost"
        value="$5,500"
        change={-3.2}
        icon={DollarSign}
        gradient="from-purple-600 to-pink-600"
        delay={100}
      />
      <KPI
        title="Error Rate"
        value="0.8%"
        change={-15.3}
        icon={AlertTriangle}
        gradient="from-orange-600 to-red-600"
        delay={200}
      />
      <KPI
        title="Avg Latency"
        value="245ms"
        change={5.1}
        icon={Zap}
        gradient="from-green-600 to-emerald-600"
        delay={300}
      />
    </div>
  );
}

import { AlertTriangle, DollarSign, Activity, Settings } from "lucide-react";

export default function NotificationIcon({ type, severity }) {
  const color =
    severity === "critical"
      ? "text-red-500"
      : severity === "warning"
      ? "text-yellow-500"
      : "text-blue-500";

  const Icon =
    type === "cost"
      ? DollarSign
      : type === "anomaly"
      ? AlertTriangle
      : type === "usage"
      ? Activity
      : Settings;

  return <Icon className={`w-5 h-5 ${color}`} />;
}

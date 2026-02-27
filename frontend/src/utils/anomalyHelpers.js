export const severityColor = (severity) => {
  switch (severity) {
    case "Critical":
      return "text-red-600 bg-red-100";
    case "High":
      return "text-red-500 bg-red-50";
    case "Medium":
      return "text-yellow-500 bg-yellow-50";
    case "Low":
      return "text-green-500 bg-green-50";
    default:
      return "text-gray-400 bg-gray-50";
  }
};

export const statusColor = (status) => {
  switch (status) {
    case "New":
      return "text-red-500";
    case "Acknowledged":
      return "text-yellow-500";
    case "Resolved":
      return "text-green-500";
    default:
      return "text-gray-400";
  }
};

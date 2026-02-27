export const notificationsData = [
  {
    id: 1,
    type: "cost",
    severity: "critical",
    title: "Cost spike detected",
    message: "OpenAI API cost increased by 32% in the last hour.",
    isRead: false,
    createdAt: "2 min ago",
  },
  {
    id: 2,
    type: "anomaly",
    severity: "warning",
    title: "Traffic anomaly",
    message: "Unusual traffic detected on /v1/chat/completions.",
    isRead: false,
    createdAt: "15 min ago",
  },
  {
    id: 3,
    type: "system",
    severity: "info",
    title: "API key rotated",
    message: "Your API key was rotated successfully.",
    isRead: true,
    createdAt: "1 hour ago",
  },
];

export const costSummary = {
  totalCost: 5500,
  avgDaily: 183,
  highestApi: "OpenAI",
  change: 12.4,
};

export const distributionData = [
  { name: "OpenAI", value: 2847, color: "#10b981" },
  { name: "Stripe", value: 1234, color: "#8b5cf6" },
  { name: "Twilio", value: 876, color: "#f59e0b" },
  { name: "SendGrid", value: 543, color: "#ec4899" },
];

export const timelineData = [
  { date: "Mon", openai: 420, stripe: 180, twilio: 90 },
  { date: "Tue", openai: 480, stripe: 200, twilio: 110 },
  { date: "Wed", openai: 600, stripe: 260, twilio: 130 },
  { date: "Thu", openai: 520, stripe: 210, twilio: 100 },
  { date: "Fri", openai: 720, stripe: 300, twilio: 160 },
  { date: "Sat", openai: 680, stripe: 270, twilio: 140 },
  { date: "Sun", openai: 740, stripe: 310, twilio: 170 },
];

export const breakdownTableData = [
  {
    api: "OpenAI",
    requests: 14200,
    costPerReq: 0.2,
    total: 2847,
    status: "Spike",
  },
  {
    api: "Stripe",
    requests: 8200,
    costPerReq: 0.15,
    total: 1234,
    status: "Normal",
  },
  {
    api: "Twilio",
    requests: 5400,
    costPerReq: 0.16,
    total: 876,
    status: "Normal",
  },
  {
    api: "SendGrid",
    requests: 3100,
    costPerReq: 0.17,
    total: 543,
    status: "Low",
  },
];

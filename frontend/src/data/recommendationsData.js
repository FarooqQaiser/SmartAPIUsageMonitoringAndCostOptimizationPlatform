const recommendationsData = [
  {
    id: 1,
    title: "Reduce OpenAI Token Usage",
    description:
      "Optimize prompt length and reuse embeddings to lower monthly OpenAI costs.",
    type: "cost",
  },
  {
    id: 2,
    title: "Enable Response Caching",
    description:
      "Cache repeated API responses to improve performance and reduce latency.",
    type: "performance",
  },
  {
    id: 3,
    title: "Rotate API Keys",
    description:
      "Your API keys are older than 90 days. Rotate them to improve security.",
    type: "security",
  },
  {
    id: 4,
    title: "Downgrade Unused Services",
    description:
      "Some services show near-zero usage. Consider downgrading the plan.",
    type: "cost",
  },
];

export default recommendationsData;

import React, { useState } from "react";
import IntegrationsRegistryHeader from "./IntegrationsRegistryHeader";
import IntegrationsRegistryAccordions from "./IntegrationsRegistryAccordions";

export default function IntegrationsRegistry() {
  const [integrationsRegistery, setIntegrationsRegistry] = useState([
    {
      id: "openai",
      displayName: "OpenAI",
      enabled: false,
      category: "AI",
      auth: {
        type: "apiKey",
        keyName: "OPENAI_API_KEY",
        masked: true,
        lastRotatedAt: "2026-01-15T10:30:00Z",
      },
      endPoints: {
        enabled: true,
        monitored: true,
        rateLimit: {
          maxRequestsPerMinute: 3000,
          burstLimit: 500,
        },
      },
      costTracking: {
        enabled: true,
        costModel: "usage_based",
        currency: [
          { label: "USD", value: "USD" },
          { label: "EUR", value: "EUR" },
          { label: "GBP", value: "GBP" },
          { label: "PKR", value: "PKR" },
        ],
        budget: {
          daily: 20,
          monthly: 200,
          hardLimit: false,
        },
      },
      alerts: {
        enabled: true,
        onFailure: true,
        onHighLatency: true,
        onCostSpike: true,
      },
      health: {
        status: "healthy",
        lastCheckedAt: "2026-01-16T09:45:00Z",
        uptimePercent: 99.98,
        isHealthCheckRunning: false,
      },
    },
    {
      id: "stripe",
      displayName: "Stripe",
      enabled: false,
      category: "Payments",
      auth: { type: "apiKey", keyName: "STRIPE_SECRET_KEY", masked: true },
      endPoints: { enabled: true, monitored: true },
      costTracking: {
        enabled: true,
        costModel: "per_transaction",
        currency: [
          { label: "USD", value: "USD" },
          { label: "EUR", value: "EUR" },
          { label: "GBP", value: "GBP" },
          { label: "PKR", value: "PKR" },
        ],
      },
      alerts: { enabled: true, onFailure: true, onWebhookFailure: true },
      health: {
        status: "healthy",
        lastCheckedAt: "2026-01-16T09:50:00Z",
        isHealthCheckRunning: false,
      },
    },
  ]);

  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="text-gray-700 dark:text-gray-400 text-lg font-semibold">
          Integrations Registry
        </h3>
      </div>
      <hr className="border-gray-300 dark:border-gray-700" />
      {integrationsRegistery &&
        integrationsRegistery.map((integration) => (
          <>
            <div className="w-full pl-10 flex flex-col text-black dark:text-white">
              <IntegrationsRegistryHeader
                integrationsRegistery={integration}
                setIntegrationsRegistry={setIntegrationsRegistry}
              />
              {integration.enabled && (
                <IntegrationsRegistryAccordions
                  integrationsRegistery={integration}
                  setIntegrationsRegistry={setIntegrationsRegistry}
                />
              )}
            </div>
          </>
        ))}
    </>
  );
}

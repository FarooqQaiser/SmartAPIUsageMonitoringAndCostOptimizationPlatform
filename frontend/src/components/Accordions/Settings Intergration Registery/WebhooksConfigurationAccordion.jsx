import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { ArrowDown } from "lucide-react";
import React from "react";
import SettingsToggle from "../../Settings/SettingsToggle";

export default function WebhooksConfigurationAccordion({
  integrationsRegistery,
  setIntegrationsRegistry,
  expandedAccordion,
  handleAccordionChange,
}) {
  const webhookEndpoints = [
    {
      id: "billing-events",
      endpointId: "billing-events",
      url: "https://api.example.com/webhooks/billing",
      events: [
        "invoice.created",
        "invoice.payment_failed",
        "payment.succeeded",
      ],
      status: "active", // active | paused | failed
      lastDelivery: {
        status: "success", // success | failed | pending
        timestamp: "2026-01-15T18:22:00Z",
        responseCode: 200,
        latencyMs: 182,
      },
      actions: {
        canTest: true,
        canEdit: true,
        canDisable: true,
      },
    },

    {
      id: "usage-alerts",
      endpointId: "usage-alerts",
      url: "https://hooks.myapp.io/api-usage",
      events: ["usage.threshold_exceeded", "cost.spike_detected"],
      status: "paused",
      lastDelivery: {
        status: "failed",
        timestamp: "2026-01-14T09:10:41Z",
        responseCode: 500,
        latencyMs: 640,
      },
      actions: {
        canTest: true,
        canEdit: true,
        canDisable: false,
      },
    },

    {
      id: "security-events",
      endpointId: "security-events",
      url: "https://security.example.net/webhooks",
      events: ["auth.failure", "api.key.rotated", "suspicious.activity"],
      status: "active",
      lastDelivery: {
        status: "pending",
        timestamp: "2026-01-16T11:05:12Z",
        responseCode: null,
        latencyMs: null,
      },
      actions: {
        canTest: true,
        canEdit: false,
        canDisable: true,
      },
    },
  ];

  return (
    <Accordion
      expanded={expandedAccordion === "webhooks"}
      onChange={handleAccordionChange("webhooks")}
      sx={{
        backgroundColor: "var(--primary)",
        color: "gray",
        ".dark &": {
          color: "lightgray",
        },
        boxShadow: "none",
      }}
    >
      <AccordionSummary
        expandIcon={<ArrowDown className="text-black dark:text-white" />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography component="span">Webhooks Configuration</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="flex flex-col space-y-2">
          <div className="pl-10">
            {/* Scroll container */}
            <div className="relative max-h-90 overflow-auto rounded-lg border border-gray-300 dark:border-gray-800">
              <table className="min-w-225 w-full divide-y divide-gray-300 dark:divide-gray-800">
                <thead className="sticky top-0 bg-(--primary) z-10">
                  <tr>
                    {[
                      "Endpoint ID",
                      "URL",
                      "Events",
                      "Status",
                      "Last Delivery",
                      "Actions",
                    ].map((head) => (
                      <th
                        key={head}
                        className="px-6 py-3 text-left text-xs font-medium text-title-primary uppercase tracking-wider"
                      >
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-300 dark:divide-gray-800">
                  {webhookEndpoints?.map((endpoint, idx) => (
                    <tr key={idx}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                        {endpoint.endpointId}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                        {endpoint.url}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                        {endpoint.events.join(", ")}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                        {endpoint.lastDelivery.status}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                        {endpoint.lastDelivery.latencyMs}ms
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex flex-col gap-2">
                          <div className="flex justify-between items-center gap-2">
                            <span>Enable Webhooks</span>
                            <SettingsToggle
                              value={
                                integrationsRegistery.webhooks.enableWebhooks
                              }
                              onChange={() =>
                                setIntegrationsRegistry((prev) => ({
                                  ...prev,
                                  openai: {
                                    ...prev.openai,
                                    webhooks: {
                                      ...prev.openai.webhooks,
                                      enableWebhooks:
                                        !prev.openai.webhooks.enableWebhooks,
                                    },
                                  },
                                }))
                              }
                            />
                          </div>

                          <div className="flex justify-between items-center gap-2">
                            <span>Retry Failed</span>
                            <SettingsToggle
                              value={
                                integrationsRegistery.webhooks
                                  .retryFailedDeliveries
                              }
                              onChange={() =>
                                setIntegrationsRegistry((prev) => ({
                                  ...prev,
                                  openai: {
                                    ...prev.openai,
                                    webhooks: {
                                      ...prev.openai.webhooks,
                                      retryFailedDeliveries:
                                        !prev.openai.webhooks
                                          .retryFailedDeliveries,
                                    },
                                  },
                                }))
                              }
                            />
                          </div>

                          <button className="mt-2 px-3 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-80">
                            Add Webhook
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

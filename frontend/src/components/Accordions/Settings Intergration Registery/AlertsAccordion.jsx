import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { ArrowDown } from "lucide-react";
import React from "react";
import SettingsToggle from "../../Settings/SettingsToggle";

export default function AlertsAccordion({
  integrationsRegistery,
  setIntegrationsRegistry,
  expandedAccordion,
  handleAccordionChange,
}) {
  return (
    <Accordion
      expanded={expandedAccordion === "alerts"}
      onChange={handleAccordionChange("alerts")}
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
        <Typography component="span">Alerts</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="flex flex-col space-y-2">
          <div className="pl-10 grid grid-cols-[6fr_1fr] items-center justify-between gap-4">
            <p className="text-black dark:text-white">Alerts: </p>
            <SettingsToggle
              value={integrationsRegistery.alerts.enabled}
              onChange={() =>
                setIntegrationsRegistry((prev) =>
                  prev.map((item) =>
                    item.id === integrationsRegistery.id
                      ? {
                          ...item,
                          alerts: {
                            ...item.alerts,
                            enabled: !item.alerts.enabled,
                          },
                        }
                      : item,
                  ),
                )
              }
            />
          </div>
          {integrationsRegistery.alerts.enabled && (
            <>
              {integrationsRegistery.alerts.onFailure !== undefined && (
                <div className="pl-10 grid grid-cols-[6fr_1fr] items-center justify-between gap-4">
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={integrationsRegistery.alerts.onFailure}
                      onChange={() =>
                        setIntegrationsRegistry((prev) =>
                          prev.map((item) =>
                            item.id === integrationsRegistery.id
                              ? {
                                  ...item,
                                  alerts: {
                                    ...item.alerts,
                                    onFailure: !item.alerts.onFailure,
                                  },
                                }
                              : item,
                          ),
                        )
                      }
                    />
                    <span className="cursor-pointer">Alerts on Failure</span>
                  </label>
                </div>
              )}
              {integrationsRegistery.alerts.onHighLatency !== undefined && (
                <div className="pl-10 grid grid-cols-[6fr_1fr] items-center justify-between gap-4">
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={integrationsRegistery.alerts.onHighLatency}
                      onChange={() =>
                        setIntegrationsRegistry((prev) =>
                          prev.map((item) =>
                            item.id === integrationsRegistery.id
                              ? {
                                  ...item,
                                  alerts: {
                                    ...item.alerts,
                                    onHighLatency: !item.alerts.onHighLatency,
                                  },
                                }
                              : item,
                          ),
                        )
                      }
                    />
                    <span className="cursor-pointer">
                      Alerts on High Latency
                    </span>
                  </label>
                </div>
              )}
              {integrationsRegistery.alerts.onCostSpike !== undefined && (
                <div className="pl-10 grid grid-cols-[6fr_1fr] items-center justify-between gap-4">
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={integrationsRegistery.alerts.onCostSpike}
                      onChange={() =>
                        setIntegrationsRegistry((prev) =>
                          prev.map((item) =>
                            item.id === integrationsRegistery.id
                              ? {
                                  ...item,
                                  alerts: {
                                    ...item.alerts,
                                    onCostSpike: !item.alerts.onCostSpike,
                                  },
                                }
                              : item,
                          ),
                        )
                      }
                    />
                    <span className="cursor-pointer">Alerts on Cost Spike</span>
                  </label>
                </div>
              )}
              {integrationsRegistery.alerts.onWebhookFailure !== undefined && (
                <div className="pl-10 grid grid-cols-[6fr_1fr] items-center justify-between gap-4">
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={integrationsRegistery.alerts.onWebhookFailure}
                      onChange={() =>
                        setIntegrationsRegistry((prev) =>
                          prev.map((item) =>
                            item.id === integrationsRegistery.id
                              ? {
                                  ...item,
                                  alerts: {
                                    ...item.alerts,
                                    onWebhookFailure:
                                      !item.alerts.onWebhookFailure,
                                  },
                                }
                              : item,
                          ),
                        )
                      }
                    />
                    <span className="cursor-pointer">
                      Alerts on Webhook Failure
                    </span>
                  </label>
                </div>
              )}
            </>
          )}
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

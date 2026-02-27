import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { ArrowDown } from "lucide-react";
import SettingsToggle from "../../Settings/SettingsToggle";
import SettingsInput from "../../Settings/SettingsInput";

export default function UsageAndLimitsAccordion({
  integrationsRegistery,
  setIntegrationsRegistry,
  expandedAccordion,
  handleAccordionChange,
}) {
  return (
    <Accordion
      expanded={expandedAccordion === "usage"}
      onChange={handleAccordionChange("usage")}
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
        <Typography component="span">Usage & Limits</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="flex flex-col space-y-2">
          <div className="pl-10 grid grid-cols-[6fr_1fr] items-center justify-between gap-4">
            <p className="text-black dark:text-white">EndPoints: </p>
            <SettingsToggle
              value={integrationsRegistery.endPoints.enabled}
              onChange={() =>
                setIntegrationsRegistry((prev) =>
                  prev.map((item) =>
                    item.id === integrationsRegistery.id
                      ? {
                          ...item,
                          endPoints: {
                            ...item.endPoints,
                            enabled: !item.endPoints.enabled,
                          },
                        }
                      : item,
                  ),
                )
              }
            />
          </div>
          {integrationsRegistery.endPoints.enabled && (
            <>
              {integrationsRegistery.endPoints.monitored !== undefined && (
                <div className="pl-10 grid grid-cols-[6fr_1fr] items-center justify-between gap-4">
                  <p className="text-black dark:text-white">
                    Monitor endPoints:{" "}
                  </p>
                  <SettingsToggle
                    value={integrationsRegistery.endPoints.monitoring}
                    onChange={() =>
                      setIntegrationsRegistry((prev) =>
                        prev.map((item) =>
                          item.id === integrationsRegistery.id
                            ? {
                                ...item,
                                endPoints: {
                                  ...item.endPoints,
                                  monitoring: !item.endPoints.monitoring,
                                },
                              }
                            : item,
                        ),
                      )
                    }
                  />
                </div>
              )}
              {integrationsRegistery.endPoints.rateLimit.burstLimit !==
                undefined && (
                <div className="pl-10 grid grid-cols-[6fr_1fr] items-center justify-between gap-4">
                  <p className="text-black dark:text-white">
                    Endpoint Burst limit:{" "}
                  </p>
                  <SettingsInput
                    value={integrationsRegistery.endPoints.rateLimit.burstLimit}
                    onChange={(value) =>
                      setIntegrationsRegistry((prev) =>
                        prev.map((item) =>
                          item.id === integrationsRegistery.id
                            ? {
                                ...item,
                                endPoints: {
                                  ...item.endPoints,
                                  rateLimit: {
                                    ...item.endPoints.rateLimit,
                                    burstLimit: value,
                                  },
                                },
                              }
                            : item,
                        ),
                      )
                    }
                    type="number"
                  />
                </div>
              )}
              {integrationsRegistery.endPoints.rateLimit
                .maxRequestsPerMinute !== undefined && (
                <div className="pl-10 grid grid-cols-[6fr_1fr] items-center justify-between gap-4">
                  <p className="text-black dark:text-white">
                    Endpoint Minimum Requests:{" "}
                  </p>
                  <SettingsInput
                    value={
                      integrationsRegistery.endPoints.rateLimit
                        .maxRequestsPerMinute
                    }
                    onChange={(value) =>
                      setIntegrationsRegistry((prev) =>
                        prev.map((item) =>
                          item.id === integrationsRegistery.id
                            ? {
                                ...item,
                                endPoints: {
                                  ...item.endPoints,
                                  rateLimit: {
                                    ...item.endPoints.rateLimit,
                                    maxRequestsPerMinute: value,
                                  },
                                },
                              }
                            : item,
                        ),
                      )
                    }
                    type="number"
                  />
                </div>
              )}
            </>
          )}
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

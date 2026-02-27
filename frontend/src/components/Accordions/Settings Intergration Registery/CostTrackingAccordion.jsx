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
import DropDown from "../../Drop Down/DropDown";

export default function CostTrackingAccordion({
  integrationsRegistery,
  expandedAccordion,
  handleAccordionChange,
  setIntegrationsRegistry,
}) {
  return (
    <Accordion
      expanded={expandedAccordion === "cost"}
      onChange={handleAccordionChange("cost")}
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
        <Typography component="span">Cost Tracking</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="flex flex-col space-y-2">
          <div className="pl-10 grid grid-cols-[6fr_1fr] items-center justify-between gap-4">
            <p className="text-black dark:text-white">Enable Cost Tracking: </p>
            <SettingsToggle
              value={integrationsRegistery.costTracking.enabled}
              onChange={() =>
                setIntegrationsRegistry((prev) =>
                  prev.map((item) =>
                    item.id === integrationsRegistery.id
                      ? {
                          ...item,
                          costTracking: {
                            ...item.costTracking,
                            enabled: !item.costTracking.enabled,
                          },
                        }
                      : item,
                  ),
                )
              }
            />
          </div>
          {integrationsRegistery.costTracking.enabled && (
            <>
              {integrationsRegistery.costTracking.costModel !== undefined && (
                <div className="pl-10 grid grid-cols-[6fr_1fr] items-center justify-between gap-4">
                  <p className="text-black dark:text-white">
                    Cost Model Type:{" "}
                  </p>
                  <SettingsInput
                    value={integrationsRegistery.costTracking.costModel}
                    onChange={(value) =>
                      setIntegrationsRegistry((prev) =>
                        prev.map((item) =>
                          item.id === integrationsRegistery.id
                            ? {
                                ...item,
                                costTracking: {
                                  ...item.costTracking,
                                  costModel: value,
                                },
                              }
                            : item,
                        ),
                      )
                    }
                    readOnly={true}
                  />
                </div>
              )}
              {integrationsRegistery.costTracking.currency !== undefined && (
                <div className="pl-10 grid grid-cols-[6fr_1fr] items-center justify-between gap-4">
                  <p className="text-black dark:text-white">Currency: </p>
                  <DropDown
                    options={integrationsRegistery.costTracking.currency}
                  />
                </div>
              )}
              {integrationsRegistery.costTracking.budget !== undefined && (
                <div className="pl-10 grid grid-cols-[6fr_1fr_1fr] items-center justify-between gap-4">
                  <p className="text-black dark:text-white">Budget: </p>
                  <SettingsInput
                    value={integrationsRegistery.costTracking.budget.daily}
                    onChange={(value) =>
                      setIntegrationsRegistry((prev) =>
                        prev.map((item) =>
                          item.id === integrationsRegistery.id
                            ? {
                                ...item,
                                costTracking: {
                                  ...item.costTracking,
                                  budget: {
                                    ...item.costTracking.budget,
                                    daily: value,
                                  },
                                },
                              }
                            : item,
                        ),
                      )
                    }
                    type="number"
                    label={"Daily Budget Limit"}
                  />
                  <SettingsInput
                    value={integrationsRegistery.costTracking.budget.monthly}
                    onChange={(value) =>
                      setIntegrationsRegistry((prev) =>
                        prev.map((item) =>
                          item.id === integrationsRegistery.id
                            ? {
                                ...item,
                                costTracking: {
                                  ...item.costTracking,
                                  budget: {
                                    ...item.costTracking.budget,
                                    monthly: value,
                                  },
                                },
                              }
                            : item,
                        ),
                      )
                    }
                    type="number"
                    label={"Monthly Budget Limit"}
                  />
                  <p className="text-black dark:text-white">Hard Limit: </p>
                  <SettingsToggle
                    value={integrationsRegistery.costTracking.budget.hardLimit}
                    onChange={() =>
                      setIntegrationsRegistry((prev) =>
                        prev.map((item) =>
                          item.id === integrationsRegistery.id
                            ? {
                                ...item,
                                costTracking: {
                                  ...item.costTracking,
                                  budget: {
                                    ...item.costTracking.budget,
                                    hardLimit:
                                      !item.costTracking.budget.hardLimit,
                                  },
                                },
                              }
                            : item,
                        ),
                      )
                    }
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

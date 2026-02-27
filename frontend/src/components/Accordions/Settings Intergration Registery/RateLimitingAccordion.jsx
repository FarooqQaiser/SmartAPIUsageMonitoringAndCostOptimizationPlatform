import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { ArrowDown } from "lucide-react";
import React from "react";
import SettingsInput from "../../Settings/SettingsInput";

export default function RateLimitingAccordion({
  integrationsRegistery,
  expandedAccordion,
  handleAccordionChange,
  setIntegrationsRegistry,
}) {
  return (
    <Accordion
      expanded={expandedAccordion === "rateLimit"}
      onChange={handleAccordionChange("rateLimit")}
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
        <Typography component="span">Rate Limiting</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="flex flex-col space-y-2">
          <div className="pl-10 grid grid-cols-[6fr_1fr] items-center justify-between gap-4">
            <p className="text-black dark:text-white">Global limit: </p>
            <SettingsInput
              value={integrationsRegistery.rateLimiting.globalLimit}
              onChange={(value) =>
                setIntegrationsRegistry((prev) => ({
                  ...prev,
                  openai: {
                    ...prev.openai,
                    rateLimiting: {
                      ...prev.openai.rateLimiting,
                      globalLimit: value,
                    },
                  },
                }))
              }
              type="number"
            />
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

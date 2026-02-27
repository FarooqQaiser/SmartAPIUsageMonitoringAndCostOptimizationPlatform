import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { ArrowDown } from "lucide-react";
import React from "react";
import SettingsToggle from "../../Settings/SettingsToggle";
import DropDown from "../../Drop Down/DropDown";
import SettingsInput from "../../Settings/SettingsInput";

export default function LoggingAndMonitoringAccordion({
  integrationsRegistery,
  setIntegrationsRegistry,
  expandedAccordion,
  handleAccordionChange,
}) {
  return (
    <Accordion
      expanded={expandedAccordion === "logging"}
      onChange={handleAccordionChange("logging")}
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
        <Typography component="span">Logging & Monitoring</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="flex flex-col space-y-2">
          <div className="pl-10 grid grid-cols-[6fr_1fr] items-center justify-between gap-4">
            <p className="text-black dark:text-white">Enable logging: </p>
            <SettingsToggle
              value={integrationsRegistery.logging.enableLogging}
              onChange={() =>
                setIntegrationsRegistry((prev) => ({
                  ...prev,
                  openai: {
                    ...prev.openai,
                    logging: {
                      ...prev.openai.logging,
                      enableLogging: !prev.openai.logging.enableLogging,
                    },
                  },
                }))
              }
            />
          </div>
          <div className="pl-10 grid grid-cols-[6fr_1fr] items-center justify-between gap-4">
            <p className="text-black dark:text-white">Log level: </p>
            <DropDown options={integrationsRegistery.logging.logLevel} />
          </div>
          <div className="pl-10 grid grid-cols-[6fr_1fr] items-center justify-between gap-4">
            <p className="text-black dark:text-white">Retention days: </p>
            <SettingsInput
              value={integrationsRegistery.logging.retentionDays}
              onChange={(value) =>
                setIntegrationsRegistry((prev) => ({
                  ...prev,
                  openai: {
                    ...prev.openai,
                    logging: {
                      ...prev.openai.logging,
                      retentionDays: value,
                    },
                  },
                }))
              }
              type="number"
            />
          </div>
          <div className="pl-10 grid grid-cols-[6fr_1fr] items-center justify-between gap-4">
            <p className="text-black dark:text-white">Redact secrets: </p>
            <SettingsToggle
              value={integrationsRegistery.logging.redactSecrets}
              onChange={() =>
                setIntegrationsRegistry((prev) => ({
                  ...prev,
                  openai: {
                    ...prev.openai,
                    logging: {
                      ...prev.openai.logging,
                      redactSecrets: !prev.openai.logging.redactSecrets,
                    },
                  },
                }))
              }
            />
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

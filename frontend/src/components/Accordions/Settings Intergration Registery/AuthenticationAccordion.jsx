import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { ArrowDown } from "lucide-react";
import SettingsInput from "../../Settings/SettingsInput";

export default function AuthenticationAccordion({
  integrationsRegistery,
  setIntegrationsRegistry,
  expandedAccordion,
  handleAccordionChange,
}) {
  return (
    <Accordion
      expanded={expandedAccordion === "authentication"}
      onChange={handleAccordionChange("authentication")}
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
        <Typography component="span">Authentication</Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          marginLeft: "20px",
        }}
      >
        <div className="pl-10 flex items-center justify-between gap-4">
          <p className="text-black dark:text-white">
            {integrationsRegistery.displayName} API Key
          </p>
          <SettingsInput
            value={integrationsRegistery.auth.keyName}
            onChange={(value) =>
              setIntegrationsRegistry((prev) =>
                prev.map((item) =>
                  item.id === integrationsRegistery.id
                    ? {
                        ...item,
                        auth: {
                          ...item.auth,
                          keyName: value,
                        },
                      }
                    : item,
                ),
              )
            }
            type={integrationsRegistery.auth.masked ? "password" : "text"}
            readOnly={true}
          />
          <button
            className="cursor-pointer"
            onClick={() =>
              setIntegrationsRegistry((prev) =>
                prev.map((item) =>
                  item.id === integrationsRegistery.id
                    ? {
                        ...item,
                        auth: {
                          ...item.auth,
                          masked: !item.auth.masked,
                        },
                      }
                    : item,
                ),
              )
            }
          >
            {integrationsRegistery.auth.masked ? "Show" : "Hide"}
          </button>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

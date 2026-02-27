import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { ArrowDown } from "lucide-react";
import React, { useState } from "react";
import SettingsToggle from "../../Settings/SettingsToggle";
import SettingsInput from "../../Settings/SettingsInput";

export default function SecurityControlsAccordion({
  integrationsRegistery,
  setIntegrationsRegistry,
  expandedAccordion,
  handleAccordionChange,
}) {
  const [ipInput, setIpInput] = useState("");

  return (
    <Accordion
      expanded={expandedAccordion === "security"}
      onChange={handleAccordionChange("security")}
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
        <Typography component="span">Security Controls</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="flex flex-col space-y-2">
          <div className="pl-10 grid grid-cols-[6fr_1fr] items-center justify-between gap-4">
            <p className="text-black dark:text-white">Restrict IPs: </p>
            <SettingsToggle
              value={integrationsRegistery.securityControls.restrictIpAddresses}
              onChange={() =>
                setIntegrationsRegistry((prev) => ({
                  ...prev,
                  openai: {
                    ...prev.openai,
                    securityControls: {
                      ...prev.openai.securityControls,
                      restrictIpAddresses:
                        !prev.openai.securityControls.restrictIpAddresses,
                    },
                  },
                }))
              }
            />
          </div>
          <div className="pl-10 grid grid-cols-[6fr_1fr_1fr] items-center justify-between gap-4">
            <p className="text-black dark:text-white">Allowed IPs: </p>
            <SettingsInput
              value={ipInput}
              onChange={(value) => setIpInput(value)}
              placeholder="e.g. 192.168.1.1"
              type="text"
            />
            <button
              className="px-3 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg cursor-pointer"
              onClick={() => {
                if (!ipInput.trim()) return;

                setIntegrationsRegistry((prev) => ({
                  ...prev,
                  openai: {
                    ...prev.openai.securityControls,
                    securityControls: {
                      ...prev.openai.securityControls,
                      allowedIpAddresses: [
                        ...prev.openai.securityControls.allowedIpAddresses,
                        ipInput.trim(),
                      ],
                    },
                  },
                }));

                setIpInput("");
              }}
            >
              Add
            </button>
          </div>
          <div className="pl-10 flex flex-wrap gap-2 mt-2">
            {integrationsRegistery.securityControls.allowedIpAddresses.map(
              (ip, index) => (
                <span
                  key={index}
                  className="flex items-center gap-2 px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
                >
                  {ip}
                  <button
                    className="text-red-500 font-bold cursor-pointer"
                    onClick={() =>
                      setIntegrationsRegistry((prev) => ({
                        ...prev,
                        openai: {
                          ...prev.openai,
                          securityControls: {
                            ...prev.openai.securityControls,
                            allowedIpAddresses:
                              prev.openai.securityControls.allowedIpAddresses.filter(
                                (_, i) => i !== index,
                              ),
                          },
                        },
                      }))
                    }
                  >
                    ✕
                  </button>
                </span>
              ),
            )}
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

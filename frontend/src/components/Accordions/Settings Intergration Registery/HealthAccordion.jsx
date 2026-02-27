import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { ArrowDown } from "lucide-react";
import React from "react";
import { FiRefreshCw } from "react-icons/fi";

export default function HealthAccordion({
  integrationsRegistery,
  setIntegrationsRegistry,
  expandedAccordion,
  handleAccordionChange,
}) {
  return (
    <Accordion
      expanded={expandedAccordion === "health"}
      onChange={handleAccordionChange("health")}
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
        <Typography component="span">Health</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="flex flex-col space-y-2">
          <div className="pl-10 grid grid-cols-[6fr_1fr] items-center justify-between gap-4">
            <p className="">Run health check</p>
            <button
              className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 cursor-pointer"
              onClick={() => {
                setIntegrationsRegistry((prev) =>
                  prev.map((item) => {
                    if (item.id === integrationsRegistery.id) {
                      return {
                        ...item,
                        health: {
                          ...item.health,
                          isHealthCheckRunning:
                            !item.health.isHealthCheckRunning,
                        },
                      };
                    }
                    return item;
                  }),
                );
              }}
            >
              <FiRefreshCw
                className={`${integrationsRegistery.health.isHealthCheckRunning ? "animate-spin" : ""}`}
              />
            </button>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

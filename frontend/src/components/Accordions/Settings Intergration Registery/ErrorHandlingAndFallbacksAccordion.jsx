import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { ArrowDown } from "lucide-react";
import React from "react";
import DropDown from "../../Drop Down/DropDown";

export default function ErrorHandlingAndFallbacksAccordion({
  integrationsRegistery,
  expandedAccordion,
  handleAccordionChange,
}) {
  return (
    <Accordion
      expanded={expandedAccordion === "errorHandling"}
      onChange={handleAccordionChange("errorHandling")}
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
        <Typography component="span">Error Handling & Fallbacks</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="flex flex-col space-y-2">
          <div className="pl-10 grid grid-cols-[6fr_1fr] items-center justify-between gap-4">
            <p className="text-black dark:text-white">On Timeout: </p>
            <DropDown options={integrationsRegistery.errorHandling.onTimeOut} />
          </div>
          <div className="pl-10 grid grid-cols-[6fr_1fr] items-center justify-between gap-4">
            <p className="text-black dark:text-white">On Auth Failure: </p>
            <DropDown
              options={integrationsRegistery.errorHandling.onAuthFailure}
            />
          </div>
          <div className="pl-10 grid grid-cols-[6fr_1fr] items-center justify-between gap-4">
            <p className="text-black dark:text-white">On Rate Limit: </p>
            <DropDown
              options={integrationsRegistery.errorHandling.onRateLimiting}
            />
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

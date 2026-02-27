import React, { useState } from "react";
import AuthenticationAccordion from "../../../Accordions/Settings Intergration Registery/AuthenticationAccordion";
import UsageAndLimitsAccordion from "../../../Accordions/Settings Intergration Registery/UsageAndLimitsAccordion";
import CostTrackingAccordion from "../../../Accordions/Settings Intergration Registery/CostTrackingAccordion";
import AlertsAccordion from "../../../Accordions/Settings Intergration Registery/AlertsAccordion";
import HealthAccordion from "../../../Accordions/Settings Intergration Registery/HealthAccordion";
import WebhooksConfigurationAccordion from "../../../Accordions/Settings Intergration Registery/WebhooksConfigurationAccordion";
import RateLimitingAccordion from "../../../Accordions/Settings Intergration Registery/RateLimitingAccordion";
import ErrorHandlingAndFallbacksAccordion from "../../../Accordions/Settings Intergration Registery/ErrorHandlingAndFallbacksAccordion";
import LoggingAndMonitoringAccordion from "../../../Accordions/Settings Intergration Registery/LoggingAndMonitoringAccordion";
import SecurityControlsAccordion from "../../../Accordions/Settings Intergration Registery/SecurityControlsAccordion";

export default function IntegrationsRegistryAccordions({
  integrationsRegistery,
  setIntegrationsRegistry,
}) {
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  const handleAccordionChange = (panel) => (_, isExpanded) => {
    setExpandedAccordion(isExpanded ? panel : null);
  };

  return (
    <>
      <AuthenticationAccordion
        integrationsRegistery={integrationsRegistery}
        setIntegrationsRegistry={setIntegrationsRegistry}
        expandedAccordion={expandedAccordion}
        handleAccordionChange={handleAccordionChange}
      />
      <UsageAndLimitsAccordion
        integrationsRegistery={integrationsRegistery}
        setIntegrationsRegistry={setIntegrationsRegistry}
        expandedAccordion={expandedAccordion}
        handleAccordionChange={handleAccordionChange}
      />
      <CostTrackingAccordion
        integrationsRegistery={integrationsRegistery}
        setIntegrationsRegistry={setIntegrationsRegistry}
        expandedAccordion={expandedAccordion}
        handleAccordionChange={handleAccordionChange}
      />
      <AlertsAccordion
        integrationsRegistery={integrationsRegistery}
        setIntegrationsRegistry={setIntegrationsRegistry}
        expandedAccordion={expandedAccordion}
        handleAccordionChange={handleAccordionChange}
      />
      <HealthAccordion
        integrationsRegistery={integrationsRegistery}
        setIntegrationsRegistry={setIntegrationsRegistry}
        expandedAccordion={expandedAccordion}
        handleAccordionChange={handleAccordionChange}
      />
      {/* <WebhooksConfigurationAccordion
        integrationsRegistery={integrationsRegistery}
        setIntegrationsRegistry={setIntegrationsRegistry}
        expandedAccordion={expandedAccordion}
        handleAccordionChange={handleAccordionChange}
      /> */}
      {/* <RateLimitingAccordion
        integrationsRegistery={integrationsRegistery}
        setIntegrationsRegistry={setIntegrationsRegistry}
        expandedAccordion={expandedAccordion}
        handleAccordionChange={handleAccordionChange}
      /> */}
      {/* <ErrorHandlingAndFallbacksAccordion
        integrationsRegistery={integrationsRegistery}
        expandedAccordion={expandedAccordion}
        handleAccordionChange={handleAccordionChange}
      /> */}
      {/* <LoggingAndMonitoringAccordion
        integrationsRegistery={integrationsRegistery}
        setIntegrationsRegistry={setIntegrationsRegistry}
        expandedAccordion={expandedAccordion}
        handleAccordionChange={handleAccordionChange}
      /> */}
      {/* <SecurityControlsAccordion
        integrationsRegistery={integrationsRegistery}
        setIntegrationsRegistry={setIntegrationsRegistry}
        expandedAccordion={expandedAccordion}
        handleAccordionChange={handleAccordionChange}
      /> */}
    </>
  );
}

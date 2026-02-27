import React from "react";
import SettingsCard from "../SettingsCard";
import GlobalBehavior from "../API Integrations/GlobalBehavior";
import IntegrationsRegistry from "../API Integrations/Integrations Registry/IntegrationsRegistry.jsx";

export default function ApiIntegrationsSettings() {
  return (
    <SettingsCard title="API Integrations">
      <div className="flex flex-col space-y-4 transition-all duration-300">
        <GlobalBehavior />
        <IntegrationsRegistry />
      </div>
    </SettingsCard>
  );
}

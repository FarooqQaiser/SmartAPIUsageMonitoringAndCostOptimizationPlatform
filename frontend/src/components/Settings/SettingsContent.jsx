import React from "react";
import GeneralSettings from "./sections/GeneralSettings";
import NotificationSettings from "./sections/NotificationSettings";
import ApiIntegrationsSettings from "./sections/ApiIntegrationsSettings";
import CostBudgetSettings from "./sections/CostBudgetSettings";
import SecuritySettings from "./sections/SecuritySettings";
import AccountSettings from "./sections/AccountSettings";
import PreferencesSettings from "./sections/PreferencesSettings";
import DangerZone from "./sections/DangerZone";

export default function SettingsContent({ activeSection }) {
  return (
    <div className="flex-1 space-y-6 overflow-x-hidden">
      {activeSection === "general" && <GeneralSettings />}
      {activeSection === "notifications" && <NotificationSettings />}
      {activeSection === "integrations" && <ApiIntegrationsSettings />}
      {activeSection === "cost" && <CostBudgetSettings />}
      {activeSection === "security" && <SecuritySettings />}
      {activeSection === "account" && <AccountSettings />}
      {activeSection === "preferences" && <PreferencesSettings />}
      {activeSection === "danger" && <DangerZone />}
    </div>
  );
}

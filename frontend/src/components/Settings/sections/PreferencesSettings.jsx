import React, { useState } from "react";
import SettingsCard from "../SettingsCard";
import SettingsToggle from "../SettingsToggle";

export default function PreferencesSettings() {
  const [autoRefresh, setAutoRefresh] = useState(true);

  return (
    <SettingsCard title="Preferences">
      <div className="flex items-center justify-between">
        <p className="text-black dark:text-white">Auto Refresh Dashboard</p>
        <SettingsToggle value={autoRefresh} onChange={setAutoRefresh} />
      </div>
    </SettingsCard>
  );
}

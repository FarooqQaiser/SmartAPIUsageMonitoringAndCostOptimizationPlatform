import React from "react";
import SettingsCard from "../SettingsCard";

export default function SecuritySettings() {
  return (
    <SettingsCard title="Security Settings">
      <button className="text-red-500 font-medium">Rotate API Keys</button>
    </SettingsCard>
  );
}

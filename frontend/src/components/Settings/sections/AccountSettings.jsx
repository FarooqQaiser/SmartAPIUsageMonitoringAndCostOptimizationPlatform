import React from "react";
import SettingsCard from "../SettingsCard";

export default function AccountSettings() {
  return (
    <SettingsCard title="Account">
      <p className="text-black dark:text-white">Email: user@example.com</p>
    </SettingsCard>
  );
}

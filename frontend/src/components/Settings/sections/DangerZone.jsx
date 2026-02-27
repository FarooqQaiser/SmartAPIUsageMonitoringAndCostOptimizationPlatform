import React from "react";
import SettingsCard from "../SettingsCard";

export default function DangerZone() {
  return (
    <SettingsCard title="Danger Zone">
      <button className="text-red-600 font-semibold">Delete Account</button>
    </SettingsCard>
  );
}

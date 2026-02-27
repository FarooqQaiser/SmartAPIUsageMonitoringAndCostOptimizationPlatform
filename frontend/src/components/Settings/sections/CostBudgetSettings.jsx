import React, { useState } from "react";
import SettingsCard from "../SettingsCard";
import SettingsInput from "../SettingsInput";

export default function CostBudgetSettings() {
  const [budget, setBudget] = useState(5000);

  return (
    <SettingsCard title="Cost & Budget">
      <SettingsInput
        label="Monthly Budget ($)"
        type="number"
        value={budget}
        onChange={setBudget}
      />
    </SettingsCard>
  );
}

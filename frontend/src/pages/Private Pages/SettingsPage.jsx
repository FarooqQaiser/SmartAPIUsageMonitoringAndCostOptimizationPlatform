import React, { useState } from "react";
import SettingsSidebar from "../../components/Settings/SettingsSidebar";
import SettingsContent from "../../components/Settings/SettingsContent";

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState("general");

  return (
    <div className="flex gap-8 animate-slideUp max-w-screen">
      <SettingsSidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <SettingsContent activeSection={activeSection} />
    </div>
  );
}

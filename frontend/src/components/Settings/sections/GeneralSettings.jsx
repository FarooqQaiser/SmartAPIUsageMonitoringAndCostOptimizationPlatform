import React, { useState } from "react";
import SettingsCard from "../SettingsCard";
import SettingsToggle from "../SettingsToggle";
import DropDown from "../../Drop Down/DropDown";

export default function GeneralSettings() {
  const [darkMode, setDarkMode] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(false);

  const timezoneDropDown = [
    { value: "UTC", label: "UTC" },
    { value: "Asia/Karachi", label: "Asia/Karachi" },
    { value: "America/New_York", label: "America/New_York" },
    { value: "Europe/London", label: "Europe/London" },
    { value: "Asia/Tokyo", label: "Asia/Tokyo" },
  ];

  const dateFormatDropDown = [
    { value: "MM/DD/YYYY", label: "MM/DD/YYYY" },
    { value: "DD/MM/YYYY", label: "DD/MM/YYYY" },
    { value: "YYYY-MM-DD", label: "YYYY-MM-DD" },
  ];

  const timeFormatDropDown = [
    { value: "12-hour", label: "12-hour" },
    { value: "24-hour", label: "24-hour" },
  ];

  const timeRangeDropDown = [
    { value: "Last 1 hour", label: "Last 1 hour" },
    { value: "Last 24 hours", label: "Last 24 hours" },
    { value: "Last 7 days", label: "Last 7 days" },
    { value: "Last 30 days", label: "Last 30 days" },
  ];

  const curencyDropDown = [
    { value: "USD", label: "USD" },
    { value: "PKR", label: "PKR" },
  ];

  const numberFormatDropDown = [{ value: "en-US", label: "en-US" }];

  const refreshIntervalsDropDown = [
    { value: "30 seconds", label: "30 seconds" },
    { value: "1 minute", label: "1 minute" },
    { value: "5 minutes", label: "5 minutes" },
    { value: "10 minutes", label: "10 minutes" },
    { value: "30 minutes", label: "30 minutes" },
  ];

  return (
    <SettingsCard title="General Settings">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-black dark:text-white">Enable Dark Mode</p>
          <SettingsToggle value={darkMode} onChange={setDarkMode} />
        </div>
        <div className="grid grid-cols-[6fr_1fr] gap-4 items-center">
          <p className="text-black dark:text-white">Time zone: </p>
          <DropDown options={timezoneDropDown} />
        </div>
        <div className="grid grid-cols-[6fr_1fr_1fr] gap-4 items-center">
          <p className="text-black dark:text-white">Date and Time format: </p>
          <DropDown options={dateFormatDropDown} />
          <DropDown options={timeFormatDropDown} />
        </div>
        <div className="grid grid-cols-[6fr_1fr] gap-4 items-center">
          <p className="text-black dark:text-white">Default time range: </p>
          <DropDown options={timeRangeDropDown} />
        </div>
        <div className="grid grid-cols-[6fr_1fr_1fr] gap-4 items-center">
          <p className="text-black dark:text-white">Default time range: </p>
          <DropDown options={curencyDropDown} />
          <DropDown options={numberFormatDropDown} />
        </div>
        <div
          className={`${
            autoRefresh
              ? "grid grid-cols-[6fr_1fr_1fr] gap-4 items-center"
              : "flex items-center justify-between"
          }`}
        >
          <p className="text-black dark:text-white">Auto Refresh Dashboard</p>
          <SettingsToggle value={autoRefresh} onChange={setAutoRefresh} />
          {autoRefresh && <DropDown options={refreshIntervalsDropDown} />}
        </div>
      </div>
    </SettingsCard>
  );
}

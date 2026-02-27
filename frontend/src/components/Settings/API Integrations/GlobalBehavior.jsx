import React, { useState } from "react";
import SettingsToggle from "../SettingsToggle";
import SettingsInput from "../SettingsInput";
import DropDown from "../../Drop Down/DropDown";

export default function GlobalBehavior() {
  const [globalBehavior, setGlobalBehavior] = useState({
    enabled: false,
    autoRetry: false,
    maxEnteries: 0,
    RetryBackoff: "",
    timeout: 0,
    concurrencyLimit: 0,
  });

  const retryBackOffs = [
    { value: "Fixed", label: "Fixed" },
    { value: "Linear", label: "Linear" },
    { value: "Exponential", label: "Exponential" },
  ];

  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="text-gray-700 dark:text-gray-400 text-lg font-semibold">
          Global Behavior
        </h3>
      </div>
      <hr className="border-gray-300 dark:border-gray-700" />
      <div className="flex flex-col space-y-4">
        <div className="pl-10 flex items-center justify-between">
          <p className="text-black dark:text-white">Auto Retry</p>
          <SettingsToggle
            value={globalBehavior.autoRetry}
            onChange={() =>
              setGlobalBehavior((prev) => ({
                ...prev,
                autoRetry: !prev.autoRetry,
              }))
            }
          />
        </div>
        <div className="pl-10 flex items-center justify-between gap-4">
          <p className="text-black dark:text-white">Max Retries</p>
          <SettingsInput
            type="number"
            value={globalBehavior.maxEnteries}
            onChange={(value) =>
              setGlobalBehavior((prev) => ({
                ...prev,
                maxEnteries: value,
              }))
            }
          />
        </div>
        <div className="pl-10 grid grid-cols-[6fr_1fr] items-center justify-between gap-4">
          <p className="text-black dark:text-white">Retry Backoff: </p>
          <DropDown options={retryBackOffs} />
        </div>
        <div className="pl-10 flex items-center justify-between gap-4">
          <p className="text-black dark:text-white">Timeout</p>
          <SettingsInput
            type="number"
            value={globalBehavior.timeout}
            onChange={(value) =>
              setGlobalBehavior((prev) => ({
                ...prev,
                timeout: value,
              }))
            }
          />
        </div>
        <div className="pl-10 flex items-center justify-between gap-4">
          <p className="text-black dark:text-white">Concurrency Limit</p>
          <SettingsInput
            type="number"
            value={globalBehavior.concurrencyLimit}
            onChange={(value) =>
              setGlobalBehavior((prev) => ({
                ...prev,
                concurrencyLimit: value,
              }))
            }
          />
        </div>
      </div>
    </>
  );
}

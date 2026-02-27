import React from "react";
import { AiFillOpenAI } from "react-icons/ai";
import { FaCcStripe } from "react-icons/fa6";
import SettingsToggle from "../../SettingsToggle";

export default function IntegrationsRegistryHeader({
  integrationsRegistery,
  setIntegrationsRegistry,
}) {
  return (
    <div className="flex-1 w-full flex items-center justify-between">
      <div className="flex gap-3 items-center">
        <span className="">{integrationsRegistery.displayName}</span>
        {integrationsRegistery.id === "openai" ? (
          <AiFillOpenAI className="text-4xl" />
        ) : integrationsRegistery.id === "stripe" ? (
          <FaCcStripe className="text-4xl" />
        ) : null}
      </div>
      <div>
        <p className="flex gap-3 items-center">
          Category:{" "}
          <span className="text-sm p-1 font-semibold flex items-center justify-center bg-gray-700 text-white dark:bg-gray-300 dark:text-black rounded-full">
            {integrationsRegistery?.category}
          </span>
        </p>
      </div>
      <div className="relative">
        <p className="mr-6">
          Health:
          <span
            className={`absolute top-1 right-0 w-4 h-4 rounded-full bg-linear-to-br from-${integrationsRegistery.health.status === "healthy" ? "green" : "red"}-400 via-${integrationsRegistery.health.status === "healthy" ? "green" : "red"}-600 to-${integrationsRegistery.health.status === "healthy" ? "emerald" : "red"}-800`}
          ></span>
        </p>
      </div>
      <SettingsToggle
        value={integrationsRegistery.enabled}
        onChange={() => {
          setIntegrationsRegistry((prevState) =>
            prevState.map((item) =>
              item.id === integrationsRegistery.id
                ? { ...item, enabled: !item.enabled }
                : item,
            ),
          );
        }}
      />
    </div>
  );
}

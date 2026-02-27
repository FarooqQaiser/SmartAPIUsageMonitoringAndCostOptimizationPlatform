import React from "react";

export default function SettingsInput({
  label,
  value,
  onChange,
  type = "text",
  readOnly,
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-black dark:text-white">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 text-gray-700 dark:text-gray-200 rounded-lg border border-gray-300 dark:border-gray-700 "
        readOnly={readOnly}
      />
    </div>
  );
}

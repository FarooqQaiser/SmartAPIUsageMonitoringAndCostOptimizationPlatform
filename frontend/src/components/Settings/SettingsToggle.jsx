import React from "react";

export default function SettingsToggle({ value, onChange, disabled }) {
  return (
    <button
      onClick={() => onChange(!value)}
      className={`w-12 h-6 rounded-full transition ${
        value
          ? "bg-linear-to-r from-purple-600 to-pink-600"
          : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-700"
      } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
      disabled={disabled}
    >
      <span
        className={`block w-5 h-5 bg-white rounded-full transform transition ${
          value ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
}

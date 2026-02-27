import React from "react";

export default function DropDown({ options }) {
  return (
    <select className="w-full px-4 py-2 text-gray-700 dark:text-gray-400 rounded-lg border border-gray-300 dark:border-gray-700 cursor-pointer">
      {options &&
        options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="cursor-pointer"
          >
            {option.label}
          </option>
        ))}
    </select>
  );
}

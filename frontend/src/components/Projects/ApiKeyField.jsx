// src/components/Projects/ApiKeyField.jsx
import React, { useState } from "react";

const ApiKeyField = ({ apiKey }) => {
  const [visible, setVisible] = useState(false);

  const maskedKey = apiKey.slice(0, 6) + "••••••••";

  return (
    <div className="flex items-center gap-2">
      <span className="font-mono text-xs text-gray-700 dark:text-gray-400">
        {visible ? apiKey : maskedKey}
      </span>
      <button
        onClick={() => setVisible(!visible)}
        className="text-xs text-blue-600 dark:text-blue-300 hover:underline cursor-pointer"
      >
        {visible ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default ApiKeyField;

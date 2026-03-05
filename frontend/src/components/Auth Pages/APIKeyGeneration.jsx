import { CheckCircle } from "lucide-react";

export default function APIKeyGeneration() {
  return (
    <div className="mt-6 p-4 bg-green-900 bg-opacity-20 border border-green-500 border-opacity-30 rounded-xl">
      <div className="flex items-start gap-3">
        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
        <div>
          <p className="text-sm text-green-400 font-semibold mb-1">
            API Key Auto-Generated
          </p>
          <p className="text-xs text-gray-400">
            Your unique API key will be generated upon account creation.
          </p>
        </div>
      </div>
    </div>
  );
}

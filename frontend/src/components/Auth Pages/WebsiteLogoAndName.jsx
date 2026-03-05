import { Sparkles } from "lucide-react";

export default function WebsiteLogoAndName({ isLogin }) {
  return (
    <div className="text-center mb-8">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-purple-600 to-pink-600 rounded-2xl shadow-2xl mb-4 animate-float">
        <Sparkles className="w-8 h-8 text-white" />
      </div>
      <h1 className="text-4xl font-bold bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-2">
        API Observatory
      </h1>
      <p className="text-gray-400 text-sm">
        {isLogin
          ? "Welcome back! Monitor your APIs effortlessly."
          : "Start monitoring your API usage and costs today."}
      </p>
    </div>
  );
}

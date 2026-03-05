import { Sparkles } from "lucide-react";

export default function BackgroundSparkles() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute top-20 left-20 text-purple-500 opacity-20 animate-float">
        <Sparkles className="w-8 h-8" />
      </div>
      <div
        className="absolute top-40 right-32 text-pink-500 opacity-20 animate-float"
        style={{ animationDelay: "1s" }}
      >
        <Sparkles className="w-6 h-6" />
      </div>
      <div
        className="absolute bottom-32 left-40 text-blue-500 opacity-20 animate-float"
        style={{ animationDelay: "2s" }}
      >
        <Sparkles className="w-10 h-10" />
      </div>
      <div
        className="absolute bottom-20 right-20 text-purple-500 opacity-20 animate-float"
        style={{ animationDelay: "3s" }}
      >
        <Sparkles className="w-7 h-7" />
      </div>
    </div>
  );
}

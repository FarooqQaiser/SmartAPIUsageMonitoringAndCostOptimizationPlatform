import { Chrome, Github } from "lucide-react";

export default function GoogleAndGithub() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <button className="flex items-center justify-center gap-2 py-3 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-xl hover:bg-gray-700 transition-all duration-300 group cursor-pointer">
        <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
        <span className="text-gray-400 group-hover:text-white transition-colors">
          GitHub
        </span>
      </button>
      <button className="flex items-center justify-center gap-2 py-3 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-xl hover:bg-gray-700 transition-all duration-300 group cursor-pointer">
        <Chrome className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
        <span className="text-gray-400 group-hover:text-white transition-colors">
          Google
        </span>
      </button>
    </div>
  );
}

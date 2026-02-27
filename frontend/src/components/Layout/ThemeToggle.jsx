import { Sun, Moon } from "lucide-react";
import { useThemeStore } from "../../store/useThemeStore";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 transition-transform duration-300" />
      ) : (
        <Moon className="h-5 w-5 transition-transform duration-300" />
      )}
    </button>
  );
}

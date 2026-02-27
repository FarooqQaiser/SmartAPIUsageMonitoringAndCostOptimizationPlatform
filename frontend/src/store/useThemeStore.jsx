import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useThemeStore = create(
  persist(
    (set) => ({
      theme: "dark",

      setTheme: (theme) => {
        if (theme !== "light" && theme !== "dark") return;
        set({ theme });
      },

      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "dark" ? "light" : "dark",
        })),
    }),
    {
      name: "app-theme", // ✅ unique key
      partialize: (state) => ({ theme: state.theme }), // ✅ ONLY persist theme
    },
  ),
);

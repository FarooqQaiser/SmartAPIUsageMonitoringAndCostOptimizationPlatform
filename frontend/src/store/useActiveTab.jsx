import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useActiveTab = create(
  persist(
    (set) => ({
      activeTab: "dashboard",

      changeActiveTab: (newState) => set(() => ({ activeTab: newState })),

      setActiveTab: (tab) => set({ activeTab: tab }),
    }),
    {
      name: "activeTab",
      getStorage: () => localStorage,
    }
  )
);

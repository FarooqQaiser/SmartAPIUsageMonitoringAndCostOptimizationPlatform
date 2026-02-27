import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useSidebarStatus = create(
  persist(
    (set) => ({
      sidebarStatus: true,

      toggleSidebar: () =>
        set((state) => ({ sidebarStatus: !state.sidebarStatus })),

      setStatus: (status) => set({ sidebarStatus: status }),
    }),
    {
      name: "sidebar-status",
      getStorage: () => localStorage,
    }
  )
);

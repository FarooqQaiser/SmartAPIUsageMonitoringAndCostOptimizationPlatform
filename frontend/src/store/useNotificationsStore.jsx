import { create } from "zustand";
import { notificationsData } from "../data/notificationsData";

export const useNotificationsStore = create((set) => ({
  notifications: notificationsData,
  filter: "all",

  setFilter: (filter) => set({ filter }),

  markAsRead: (id) =>
    set((state) => ({
      notifications: state.notifications.map((n) =>
        n.id === id ? { ...n, isRead: true } : n
      ),
    })),

  markAllAsRead: () =>
    set((state) => ({
      notifications: state.notifications.map((n) => ({
        ...n,
        isRead: true,
      })),
    })),
}));

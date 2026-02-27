import React from "react";
import { useNotificationsStore } from "../../store/useNotificationsStore";
import NotificationsEmpty from "./NotificationsEmpty";
import NotificationCard from "../Cards/Notifications/NotificationCard";

export default function NotificationsList() {
  const { notifications, filter, markAsRead } = useNotificationsStore();

  const filtered = notifications.filter((n) => {
    if (filter === "all") return true;
    if (filter === "unread") return !n.isRead;
    return n.type === filter;
  });

  if (!filtered.length) return <NotificationsEmpty />;

  return (
    <div className="space-y-3">
      {filtered.map((n) => (
        <NotificationCard
          key={n.id}
          notification={n}
          onRead={() => markAsRead(n.id)}
        />
      ))}
    </div>
  );
}

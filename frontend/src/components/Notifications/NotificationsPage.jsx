import React from "react";
import NotificationsHeader from "./NotificationsHeader";
import NotificationsFilters from "./NotificationsFilters";
import NotificationsList from "./NotificationsList";

export default function NotificationsPage() {
  return (
    <div className="space-y-6 animate-slideUp">
      <NotificationsHeader />
      <NotificationsFilters />
      <NotificationsList />
    </div>
  );
}

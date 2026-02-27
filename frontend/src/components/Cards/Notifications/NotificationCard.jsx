import React from "react";
import NotificationIcon from "../../Notifications/NotificationIcon";

export default function NotificationCard({ notification, onRead }) {
  return (
    <div
      className={`flex items-start gap-4 p-4 rounded-xl border transition ${
        notification.isRead
          ? "bg-primary border-gray-300 dark:border-gray-800"
          : "bg-primary border-blue-400"
      }`}
    >
      <NotificationIcon
        type={notification.type}
        severity={notification.severity}
      />

      <div className="flex-1">
        <div className="flex justify-between items-center">
          <h4 className="font-semibold text-sm text-title-primary">
            {notification.title}
          </h4>
          <span className="text-xs text-gray-400">
            {notification.createdAt}
          </span>
        </div>

        <p className="text-sm text-gray-500 mt-1">{notification.message}</p>

        {!notification.isRead && (
          <button
            onClick={onRead}
            className="mt-2 text-xs text-blue-500 hover:underline cursor-pointer"
          >
            Mark as read
          </button>
        )}
      </div>
    </div>
  );
}

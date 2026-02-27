import { useNotificationsStore } from "../../store/useNotificationsStore";

export default function NotificationsHeader() {
  const { markAllAsRead } = useNotificationsStore();

  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold text-title-primary">Notifications</h1>

      <button
        onClick={markAllAsRead}
        className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 cursor-pointer"
      >
        Mark all as read
      </button>
    </div>
  );
}

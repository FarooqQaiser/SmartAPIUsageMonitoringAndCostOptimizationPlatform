import { useNotificationsStore } from "../../store/useNotificationsStore";

export default function NotificationsFilters() {
  const { filter, setFilter } = useNotificationsStore();

  const filters = ["all", "unread", "cost", "anomaly", "system"];

  return (
    <div className="flex gap-2 flex-wrap">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-800 cursor-pointer transition ${
            filter === f
              ? "bg-primary text-black dark:text-white"
              : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200"
          }`}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
}

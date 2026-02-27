import React from "react";
import { Bell, Settings, Menu, X, Sparkles } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useNavigate } from "react-router-dom";
import { useActiveTab } from "../../store/useActiveTab";

const Popup = ({ title }) => (
  <div className="absolute top-12 right-0 w-80 bg-primary dark:bg-primary backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-[#1F2937] animate-slideUp z-50">
    <h2 className="text-lg font-bold mb-4 text-black dark:text-white">
      {title}
    </h2>
    <p className="text-gray-500 dark:text-gray-400">
      This {title.toLowerCase()} UI will be implemented here.
    </p>
  </div>
);

export default function Header({ sidebarStatus, toggleSidebar }) {
  const { activeTab, changeActiveTab } = useActiveTab();
  const isNotificationActive = activeTab === "notifications";
  const isSettingsActive = activeTab === "settings";
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-primary dark:bg-primary border-gray-200 dark:border-gray-800 shadow-2xl transition-colors duration-300">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => toggleSidebar(!sidebarStatus)}
            className="p-2 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg transition-all duration-300 cursor-pointer"
          >
            {sidebarStatus ? (
              <X className="w-6 h-6 text-gray-900 dark:text-white" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900 dark:text-white" />
            )}
          </button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-linear-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                API Observatory
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Production Dashboard
              </p>
            </div>
          </div>
        </div>

        <ThemeToggle />

        <div className="flex items-center gap-4">
          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => {
                navigate("notifications");
                changeActiveTab("notifications");
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden cursor-pointer
        ${
          isNotificationActive
            ? "bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg"
            : "text-gray-400 hover:text-black hover:bg-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
        }`}
            >
              {isNotificationActive && (
                <div className="absolute inset-0 bg-primary dark:bg-primary opacity-20 animate-pulse rounded-xl"></div>
              )}
              <Bell className="w-5 h-5 relative z-10" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>

          {/* Settings */}
          <div className="relative">
            <button
              onClick={() => {
                navigate("settings");
                changeActiveTab("settings");
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden cursor-pointer
        ${
          isSettingsActive
            ? "bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg"
            : "text-gray-400 hover:text-black hover:bg-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
        }`}
            >
              {isSettingsActive && (
                <div className="absolute inset-0 bg-primary dark:bg-primary opacity-20 animate-pulse rounded-xl"></div>
              )}
              <Settings className="w-5 h-5 relative z-10" />
            </button>
          </div>

          <div className="w-10 h-10 bg-linear-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300">
            <span className="text-sm font-bold text-white">JD</span>
          </div>
        </div>
      </div>
    </header>
  );
}

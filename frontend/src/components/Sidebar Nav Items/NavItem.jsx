import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavItem({
  sidebarStatus,
  label,
  id,
  badge,
  activeTab,
  changeActiveTab,
  icon: Icon,
}) {
  const navigate = useNavigate();

  const isActive = activeTab === id;

  return (
    <button
      onClick={() => {
        navigate(id);
        changeActiveTab(id);
      }}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden cursor-pointer
        ${
          isActive
            ? "bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg"
            : "text-gray-400 hover:text-black hover:bg-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
        }`}
    >
      {isActive && (
        <div className="absolute inset-0 bg-primary dark:bg-primary opacity-20 animate-pulse rounded-xl"></div>
      )}

      {Icon && <Icon className="w-5 h-5 relative z-10" />}

      {sidebarStatus && (
        <>
          <span className="font-medium relative z-10">{label}</span>
          {badge && (
            <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full relative z-10">
              {badge}
            </span>
          )}
        </>
      )}
    </button>
  );
}

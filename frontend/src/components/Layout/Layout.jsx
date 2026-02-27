import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useSidebarStatus } from "../../store/useSidebarStatus";

export default function Layout() {
  const { sidebarStatus, toggleSidebar } = useSidebarStatus();

  return (
    <div className="min-h-screen bg-background-primary dark:bg-background-primary">
      <style>{`
          @keyframes slideUp {
            from { transform: translateY(2rem); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          .animate-slideUp { animation: slideUp 0.5s ease-out; }
        `}</style>

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <Header sidebarStatus={sidebarStatus} toggleSidebar={toggleSidebar} />

      <Sidebar sidebarStatus={sidebarStatus} />
      <div
        className={`flex relative z-10 ${
          sidebarStatus ? "ml-65" : "ml-22"
        } transition-all duration-300`}
      >
        <main className="flex-1 py-8 px-2 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

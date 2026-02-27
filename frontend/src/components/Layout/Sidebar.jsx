import React from "react";
import {
  AlertTriangle,
  BarChart3,
  DollarSign,
  Flame,
  Layers,
  Target,
  Activity,
} from "lucide-react";
import NavItem from "../Sidebar Nav Items/NavItem";
import { useActiveTab } from "../../store/useActiveTab";

export default function Sidebar({ sidebarStatus }) {
  const { activeTab, changeActiveTab } = useActiveTab();

  return (
    <aside
      className={`${
        sidebarStatus ? "w-64" : "w-20"
      } fixed top-16 left-0 transition-all duration-300 bg-primary dark:bg-primary border-r border-gray-200 dark:border-gray-800 min-h-screen p-4 backdrop-blur-sm overflow-y-hidden z-50`}
    >
      <nav className="space-y-2 mt-4">
        <NavItem
          sidebarStatus={sidebarStatus}
          icon={BarChart3}
          label="Dashboard"
          id="dashboard"
          activeTab={activeTab}
          changeActiveTab={changeActiveTab}
        />
        <NavItem
          sidebarStatus={sidebarStatus}
          icon={Layers}
          label="Projects"
          id="projects"
          activeTab={activeTab}
          changeActiveTab={changeActiveTab}
        />
        <NavItem
          sidebarStatus={sidebarStatus}
          icon={Activity}
          label="Usage Analytics"
          id="usage-analytics"
          activeTab={activeTab}
          changeActiveTab={changeActiveTab}
        />
        <NavItem
          sidebarStatus={sidebarStatus}
          icon={DollarSign}
          label="Cost Analysis"
          id="cost-analysis"
          activeTab={activeTab}
          changeActiveTab={changeActiveTab}
        />
        <NavItem
          sidebarStatus={sidebarStatus}
          icon={AlertTriangle}
          label="Anomalies"
          id="anomalies"
          badge="3"
          activeTab={activeTab}
          changeActiveTab={changeActiveTab}
        />
        <NavItem
          sidebarStatus={sidebarStatus}
          icon={Target}
          label="Recommendations"
          id="recommendations"
          badge="5"
          activeTab={activeTab}
          changeActiveTab={changeActiveTab}
        />
        <NavItem
          sidebarStatus={sidebarStatus}
          icon={Flame}
          label="Alerts"
          id="alerts"
          activeTab={activeTab}
          changeActiveTab={changeActiveTab}
        />
      </nav>
    </aside>
  );
}

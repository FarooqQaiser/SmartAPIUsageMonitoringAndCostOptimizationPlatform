// App.jsx
import React, { useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { useThemeStore } from "./store/useThemeStore";
import Projects from "./pages/Projects";
import UsageAnalytics from "./pages/UsageAnalytics";
import CostAnalysis from "./pages/CostAnalysis";
import Anomalies from "./pages/Anomalies";
import Recommendations from "./pages/Recommendations";
import NotificationsPage from "./components/Notifications/NotificationsPage";
import SettingsPage from "./pages/SettingsPage";

const App = () => {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route
            path="usage-analytics"
            element={<UsageAnalytics title="Usage Analytics" />}
          />
          <Route
            path="cost-analysis"
            element={<CostAnalysis title="Cost Analysis" />}
          />
          <Route path="anomalies" element={<Anomalies title="Anomalies" />} />
          <Route
            path="recommendations"
            element={<Recommendations title="Recommendations" />}
          />
          <Route path="alerts" element={<Placeholder title="Alerts" />} />

          {/* Header nav routes */}
          <Route path="notifications" element={<NotificationsPage />} />
          <Route path="settings" element={<SettingsPage />} />

          {/* Redirect any unknown route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

// Placeholder component for pages without real UI yet
const Placeholder = ({ title }) => (
  <div className="bg-gray-200 dark:bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-2xl p-6 border border-gray-300 dark:border-gray-800 shadow-xl transition-all duration-300 flex items-center justify-center text-black dark:text-white text-2xl font-bold">
    {title} Page UI Coming Soon
  </div>
);

export default App;

// App.jsx
import { useEffect } from "react";
import Dashboard from "./pages/Private Pages/Dashboard";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { useThemeStore } from "./store/useThemeStore";
import Projects from "./pages/Private Pages/Projects";
import UsageAnalytics from "./pages/Private Pages/UsageAnalytics";
import CostAnalysis from "./pages/Private Pages/CostAnalysis";
import Anomalies from "./pages/Private Pages/Anomalies";
import Recommendations from "./pages/Private Pages/Recommendations";
import NotificationsPage from "./components/Notifications/NotificationsPage";
import SettingsPage from "./pages/Private Pages/SettingsPage";
import AuthPages from "./pages/Public Pages/AuthPages";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

export default function App() {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/usage-analytics" element={<UsageAnalytics />} />
            <Route path="/cost-analysis" element={<CostAnalysis />} />
            <Route path="/anomalies" element={<Anomalies />} />
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Route>
        </Route>

        <Route element={<PublicRoute />}>
          <Route path="/auth" element={<AuthPages />} />
        </Route>

        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

// Placeholder component for pages without real UI yet
const Placeholder = ({ title }) => (
  <div className="bg-gray-200 dark:bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-2xl p-6 border border-gray-300 dark:border-gray-800 shadow-xl transition-all duration-300 flex items-center justify-center text-black dark:text-white text-2xl font-bold">
    {title} Page UI Coming Soon
  </div>
);

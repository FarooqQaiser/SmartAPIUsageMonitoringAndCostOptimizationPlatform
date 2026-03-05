import { Navigate, Outlet } from "react-router-dom";

export default function PublicRoute() {
  const email = JSON.parse(localStorage.getItem("user"))?.email;

  if (email) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}

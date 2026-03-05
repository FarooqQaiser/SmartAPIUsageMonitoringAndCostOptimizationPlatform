import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const email = JSON.parse(localStorage.getItem("user"))?.email;

  if (!email) {
    return <Navigate to="/auth" replace />;
  }

  return <Outlet />;
}

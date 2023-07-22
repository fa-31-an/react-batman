import { Outlet , Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export const ProtectedRoute = () => {
  const { currentSession } = useAuth();

  return currentSession ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
}
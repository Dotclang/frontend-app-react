import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Spinner from "../components/Spinner";

const ProtectedRoute = () => {
  const { isLoading, isAuthenticated } = useAuth();

  if (isLoading) {
    return <Spinner text="Loading..." />;
  }

  return !isAuthenticated ? <Navigate to="/login" replace /> : <Outlet />;
};

export default ProtectedRoute;

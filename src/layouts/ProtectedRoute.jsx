import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Spinner from "../components/Spinner";

const ProtectedRoute = () => {
  const { isLoading, isAuthChecked } = useAuth();

  if (isLoading) {
    return <Spinner text="Loading..." />;
  }

  return isAuthChecked ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;

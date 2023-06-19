import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Spinner from "../components/Spinner";

const ProtectedRoute = () => {
  const { isLoading, isAuthChecked, user } = useAuth();

  if (isLoading) {
    return <Spinner text="Loading..." />;
  }

  return isAuthChecked && user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;

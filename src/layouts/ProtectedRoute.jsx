import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Spinner from "../components/Spinner";

const ProtectedRoute = ({ children, ...rest }) => {
  const { user, isAuthChecked } = useAuth();

  if (!isAuthChecked) {
    // Render a loading spinner or any other UI indication while the authentication status is being checked
    return <Spinner />;
  }
  console.log(rest);

  return user ? (
    // <Route {...rest} element={children} />
    <>{children}</>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;

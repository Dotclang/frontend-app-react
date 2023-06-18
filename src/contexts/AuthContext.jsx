import React, { createContext, useState, useEffect } from "react";
import apiBackend from "../lib/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [isAuthChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    // Check if the user is already authenticated when the component mounts
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const response = await apiBackend.get("/api/user");

      if (response.status === 200) {
        const { data } = response;
        const user = data;
        setUser(user);
      }
    } catch (err) {
      setError(err.message);
      console.log("Login failed:", err);
    } finally {
      setAuthChecked(true);
    }
  };

  const csrfToken = () => apiBackend.get("/sanctum/csrf-cookie");

  const login = async (email, password, remember) => {
    try {
      await csrfToken();
      const response = await apiBackend.post("/login", {
        email,
        password,
        remember,
      });

      if (response.status === 200) {
        const { data } = response;
        const user = { username: data.name };
        setUser(user);
        setAuthChecked(true);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const logout = async () => {
    try {
      const response = await apiBackend.post("/logout");

      if (response.status === 204) {
        setUser(null);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError(err.message);
      console.log("Logout failed:", err);
    }
  };

  const value = {
    user,
    login,
    logout,
    error,
    checkAuthStatus,
    isAuthChecked,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => React.useContext(AuthContext);

export default AuthContext;

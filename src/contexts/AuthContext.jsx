import React, { createContext, useState, useEffect } from "react";
import apiBackend from "../lib/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [isAuthChecked, setAuthChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    checkAuthStatus();
  }, [isAuthChecked]);

  const csrfToken = () => apiBackend.get("/sanctum/csrf-cookie");

  const login = async ({ email, password, remember }) => {
    setIsLoading(true);
    await csrfToken();
    await apiBackend
      .post("/login", { email, password, remember })
      .then((res) => {
        setAuthChecked(true);
      })
      .catch((err) => {
        setError(err.response.data);
        console.log("Login failed:", err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const logout = async () => {
    setIsLoading(true);
    await apiBackend
      .post("/logout")
      .then((res) => {
        setUser(null);
        setAuthChecked(false);
      })
      .catch((err) => {
        setError(err.response.data);
        console.log("Logout failed:", err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const registerUser = async ({
    email,
    password,
    name,
    password_confirmation,
  }) => {
    setIsLoading(true);
    await apiBackend
      .post("/register", { email, password, name, password_confirmation })
      .then((res) => {
        setAuthChecked(true);
      })
      .catch((err) => {
        setError(err.response.data);
        console.log("Register failed:", err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const forgotPassword = async ({ email }) => {
    setIsLoading(true);
    setStatus(null);
    await apiBackend
      .post("/forgot-password", { email })
      .then((res) => {
        setStatus(res.data.status);
      })
      .catch((err) => {
        setError(err.response.data);
        console.log("Forgot password failed:", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const resetPassword = async ({
    token,
    email,
    password,
    password_confirmation,
  }) => {
    setIsLoading(true);
    setStatus(null);
    await apiBackend
      .post("/reset-password", {
        token,
        email,
        password,
        password_confirmation,
      })
      .then((res) => {
        setStatus(res.data.status);
        console.log(res);
      })
      .catch((err) => {
        setError(err.response.data);
        console.log("Forgot password failed:", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const checkAuthStatus = async () => {
    setIsLoading(true);
    await apiBackend
      .get("/api/user")
      .then((res) => {
        setUser(res.data);
        setAuthChecked(true);
      })
      .catch((err) => {
        console.log("Check Auth Failed:", err.response.data.message);
        setUser(null);
        setAuthChecked(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const value = {
    user,
    error,
    isLoading,
    isAuthChecked,
    status,
    login,
    logout,
    forgotPassword,
    checkAuthStatus,
    registerUser,
    resetPassword,
    setIsLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => React.useContext(AuthContext);

export default AuthContext;

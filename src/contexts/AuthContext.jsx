import React, { createContext, useState, useEffect } from "react";
import axios from "../lib/axiosConfig";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    console.count("useEffect rendered!");

    const controller = new AbortController();

    const fetchUser = async () => {
      try {
        setIsLoading(true);

        const response = await axios.get("/api/user", {
          signal: controller.signal,
        });
        setUser(response.data);
        setIsAuthenticated(true);
      } catch (err) {
        if (err.name == "CanceledError") console.log("Cancelled!");
        else console.log("Fetch user failed!:", err.message);
        setUser({});
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();

    return () => {
      controller.abort();
    };
  }, [user.id, user.name]);

  const csrfToken = () => axios.get("/sanctum/csrf-cookie");

  const login = async ({ email, password, remember }) => {
    setIsLoading(true);
    await csrfToken();
    await axios
      .post("/login", { email, password, remember })
      .then((res) => {
        setIsAuthenticated(true);
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
    await axios
      .post("/logout")
      .then((res) => {
        console.log("Logout success!");
      })
      .catch((err) => {
        console.log("Logout failed:", err.message);
      })
      .finally(() => {
        setUser({});
        setIsAuthenticated(false);
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
    await axios
      .post("/register", { email, password, name, password_confirmation })
      .then((res) => {
        setIsAuthenticated(true);
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
    await axios
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
    await axios
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

  const value = {
    user,
    error,
    isLoading,
    isAuthenticated,
    status,
    login,
    logout,
    forgotPassword,
    registerUser,
    resetPassword,
    setIsLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => React.useContext(AuthContext);

export default AuthContext;

import React, { createContext, useState, useEffect } from "react";
import axios from "../lib/axiosConfig";
import {
  signInWithGoogle,
  userStateListener,
  SignOutUser,
} from "../lib/firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState(null);

  const fetchUser = (controller) => {
    setIsLoading(true);

    axios
      .get("/api/user", {
        signal: controller.signal,
      })
      .then((res) => {
        setUser(res.data);
        setIsAuthenticated(true);
      })
      .catch((err) => {
        if (err.name == "CanceledError") console.log("Cancelled!");
        else console.log("Fetch user failed!:", err.message);
        setUser(null);
        setIsAuthenticated(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const csrfToken = () => axios.get("/sanctum/csrf-cookie");

  const login = async ({ email, password, remember }) => {
    setIsLoading(true);
    const xsrfToken = document.cookie
      .split("; ")
      .find((cookie) => cookie.startsWith("XSRF-TOKEN"))
      ?.split("=")[1];

    if (!xsrfToken) {
      await csrfToken();
    }

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
    await SignOutUser();
    await axios
      .post("/logout")
      .then((res) => {
        console.log("Logout success!");
        setUser(null);
        setIsAuthenticated(false);
      })
      .catch((err) => {
        console.log("Logout failed:", err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const loginBackend = async ({ accessToken, remember }) => {
    setIsLoading(true);
    await axios
      .post("/callback", { accessToken, remember })
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
        console.log("Forgot password failed:", err.message);
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
        console.log("Forgot password failed:", err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const controller = new AbortController();

    fetchUser(controller);

    return () => {
      controller.abort();
    };
  }, [isAuthenticated]);

  const value = {
    user,
    error,
    isLoading,
    isAuthenticated,
    status,
    login,
    logout,
    csrfToken,
    loginBackend,
    forgotPassword,
    userStateListener,
    registerUser,
    resetPassword,
    setIsLoading,
    signInWithGoogle,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => React.useContext(AuthContext);

export default AuthContext;

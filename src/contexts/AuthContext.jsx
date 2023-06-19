import React, { createContext, useState, useEffect } from "react";
import apiBackend from "../lib/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [isAuthChecked, setAuthChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const csrfToken = () => apiBackend.get("/sanctum/csrf-cookie");

  const login = async (email, password, remember) => {
    setIsLoading(true);
    await csrfToken();
    await apiBackend
      .post("/login", { email, password, remember })
      .then((res) => {
        console.log(res.data);
        setAuthChecked(true);
      })
      .catch((err) => {
        console.log(err.response.data);
        if (err.response) {
          setError(err.response.data);
        } else if (err.request) {
          console.log(err.request); // Request object
        } else {
          console.log("Login failed:", err.message);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const logout = async () => {
    setIsLoading(true);
    await csrfToken();
    await apiBackend
      .post("/logout")
      .then((res) => {
        setUser(null);
        setAuthChecked(false);
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data);
        } else if (err.request) {
          console.log(err.request); // Request object
        } else {
          console.log("Logout failed:", err.message);
        }
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
    await apiBackend
      .post("/register", { email, password, name, password_confirmation })
      .then((res) => {
        setAuthChecked(true);
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data);
        } else if (err.request) {
          console.log(err.request); // Request object
        } else {
          console.log("Login failed:", err.message);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const checkAuthStatus = async () => {
    await apiBackend
      .get("/api/user")
      .then((res) => {
        const { data } = res;
        const user = data;
        setUser(user);
        setAuthChecked(true);
      })
      .catch((err) => {
        if (err.response) {
          console.log("Check Auth Failed:", err.response.data.message);
        } else if (err.request) {
          console.log(err.request); // Request object
        } else {
          console.log("Login failed:", err.message);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });

    // try {
    //   setIsLoading(true);
    //   const response = await apiBackend.get("/api/user");
    //   console.log(response);
    //   if (response.status === 200) {
    //     const { data } = response;
    //     const user = data;
    //     setUser(user);
    //     setAuthChecked(true);
    //   }
    // } catch (err) {
    //   setAuthChecked(false);
    //   console.log("Check Auth failed:", err.message);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  useEffect(() => {
    // Check if the user is already authenticated when the component mounts
    checkAuthStatus();
  }, []);

  const value = {
    user,
    error,
    isLoading,
    isAuthChecked,
    login,
    logout,
    checkAuthStatus,
    registerUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => React.useContext(AuthContext);

export default AuthContext;

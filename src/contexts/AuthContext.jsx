import React, { createContext, useState, useEffect } from "react";
import axios from "../lib/axiosConfig";
import {
  signInWithGoogle,
  userStateListener,
  signOutUser,
} from "../lib/firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFirebase, setIsFirebase] = useState(false);
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
  const xsrfToken = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith("XSRF-TOKEN"))
    ?.split("=")[1];

  const login = async ({ email, password, remember }) => {
    setIsLoading(true);

    if (!xsrfToken) {
      await csrfToken();
    }

    await axios
      .post("/login", { email, password, remember })
      .then(() => {
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
      .then(() => {
        console.log("Logout success!");
        signOutUser();
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

  const loginBackend = async ({ accessToken, remember = false }) => {
    setIsLoading(true);
    await axios
      .post("/callback", { accessToken, remember })
      .then(() => {
        setIsAuthenticated(true);
      })
      .catch((err) => {
        setError(err.response.data);
        console.log("Login backend failed:", err.message);
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
      .then(() => {
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

  const signInWithGooglePopUp = async () => {
    try {
      const res = await signInWithGoogle();

      if (res.user?.accessToken) {
        setIsFirebase(true);
        const data = {
          accessToken: res.user?.accessToken,
          remember: false,
        };
        await loginBackend(data);
      }
      console.log(res.user);
    } catch (error) {
      console.error(error);
    }
  };

  // const unsubscribe = userStateListener((user) => {
  //   if (user) {
  //     user
  //       .getIdToken()
  //       .then(async (accessToken) => {
  //         if (!xsrfToken) {
  //           await csrfToken();
  //         }
  //         const res = await loginBackend(accessToken, false);
  //         console.log(res.data);
  //       })
  //       .catch((err) => {
  //         console.error("Listener", err);
  //       })
  //       .finally(() => {
  //         setIsLoading(false);
  //       });
  //   }
  // });

  useEffect(() => {
    const controller = new AbortController();

    fetchUser(controller);

    // Clean up the observer when component unmounts
    return () => {
      controller.abort();
      // if (isFirebase) unsubscribe();
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
    loginBackend,
    forgotPassword,
    registerUser,
    resetPassword,
    setIsLoading,
    signInWithGooglePopUp,
    // unsubscribe,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => React.useContext(AuthContext);

export default AuthContext;

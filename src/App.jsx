import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./layouts/ProtectedRoute";
import GuestRoute from "./layouts/GuestRoute";
import Home from "./pages/Home";
import Login from "./auth/Login";
import ForgotPassword from "./auth/ForgotPassword";
import ResetPassword from "./auth/ResetPassword";
import Register from "./auth/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./auth/Profile";
import NotFound from "./pages/errors/NotFound";
import "./App.css";

const canResetPassword = import.meta.env.VITE_APP_CAN_RESET_PASSWORD === "true";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<GuestRoute />}>
            <Route
              path="/login"
              element={<Login canResetPassword={canResetPassword} />}
            />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/password-reset/:token" element={<ResetPassword />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<NotFound />} />{" "}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

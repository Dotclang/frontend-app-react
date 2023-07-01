import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Spinner from "./components/Spinner";
import ProtectedRoute from "./layouts/ProtectedRoute";
import GuestRoute from "./layouts/GuestRoute";
import Welcome from "./pages/Welcome";
import NotFound from "./pages/errors/NotFound";
import "./App.css";

const canResetPassword = import.meta.env.VITE_APP_CAN_RESET_PASSWORD === "true";

const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"));
const ResetPassword = lazy(() => import("./pages/auth/ResetPassword"));
const Profile = lazy(() => import("./pages/auth/Profile"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route element={<GuestRoute />}>
          <Route
            path="/login"
            element={
              <Suspense fallback={<Spinner text="Loading..." />}>
                <Login canResetPassword={canResetPassword} />
              </Suspense>
            }
          />
          <Route
            path="/register"
            element={
              <Suspense fallback={<Spinner text="Loading..." />}>
                <Register />
              </Suspense>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <Suspense fallback={<Spinner text="Loading..." />}>
                <ForgotPassword />
              </Suspense>
            }
          />
          <Route
            path="/password-reset/:token"
            element={
              <Suspense fallback={<Spinner text="Loading..." />}>
                <ResetPassword />
              </Suspense>
            }
          />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={<Spinner text="Loading..." />}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/profile"
            element={
              <Suspense fallback={<Spinner text="Loading..." />}>
                <Profile />
              </Suspense>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;

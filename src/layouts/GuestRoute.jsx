import { Navigate, Outlet, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Spinner from "../components/Spinner";
import ApplicationLogo from "../components/ApplicationLogo";

const GuestRoute = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <Spinner text="Loading..." />;
  }

  return isAuthenticated ? (
    <Navigate to="/dashboard" replace />
  ) : (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
      <div>
        <Link to="/">
          <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
        </Link>
      </div>

      <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
        <Outlet />
      </div>
    </div>
  );
};

export default GuestRoute;

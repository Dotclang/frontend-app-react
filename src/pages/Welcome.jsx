import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import ApplicationLogo from "../components/ApplicationLogo";

const Welcome = () => {
  const { logout, isAuthenticated } = useAuth();
  const [processing, setProcessing] = useState(false);

  const handleLogoutClick = async () => {
    setProcessing(true);
    await logout();
    setProcessing(false);
  };

  return (
    <>
      <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
        <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right z-10">
          {isAuthenticated ? (
            <>
              <a
                href="/dashboard"
                className="font-semibold mr-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
              >
                Dashboard
              </a>
              <button
                href="#"
                onClick={handleLogoutClick}
                disabled={processing}
                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <a
                href="/login"
                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
              >
                Log in
              </a>
              <a
                href="/register"
                className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
              >
                Register
              </a>
            </>
          )}
        </div>
        <div className="max-w-7xl mx-auto p-6 lg:p-8">
          <div className="flex justify-center">
            <ApplicationLogo className="h-16 w-auto logo react" />
          </div>

          <div className="flex justify-center mt-16">
            <h1 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
              Welcome to our applications
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;

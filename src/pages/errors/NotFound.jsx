import React from "react";

const NotFound = () => {
  return (
    <div className="relative sm:flex sm:justify-center text-slate-100 sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
      <h2>Page Not Found</h2>
      <p> The requested page does not exist.</p>
    </div>
  );
};

export default NotFound;

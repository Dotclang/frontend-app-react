import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import Authenticated from "../../pages/layouts/AuthenticatedLayout";

const Profile = () => {
  const { user } = useAuth();

  return (
    <Authenticated
      user={user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Dashboard
        </h2>
      }
      pageTitle="Dashboard"
    >
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              Welcome, {user.name}
            </div>
          </div>
        </div>
      </div>
    </Authenticated>
  );
};

export default Profile;

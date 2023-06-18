import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogoutClick = async () => {
    // Call the handleLogout function from the AuthContext
    await logout();
    navigate("/login");

    // Perform any additional logout-related actions, such as redirecting to a login page
  };

  return (
    <>
      <h2>Dashboard</h2>
      <p>Logged in as: {user.name}</p>
      <button onClick={handleLogoutClick}>Logout</button>
    </>
  );
};

export default Dashboard;

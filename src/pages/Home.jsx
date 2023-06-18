import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogoutClick = async () => {
    // Call the handleLogout function from the AuthContext
    await logout();
    navigate("/login");

    // Perform any additional logout-related actions, such as redirecting to a login page
  };

  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      {user ? (
        <div>
          <p>Logged in as: {user.name}</p>
          <button onClick={handleLogoutClick}>Logout</button>
        </div>
      ) : (
        <p>
          <Link to="/login">Login</Link> to view your dashboard.
        </p>
      )}
    </div>
  );
};

export default Home;

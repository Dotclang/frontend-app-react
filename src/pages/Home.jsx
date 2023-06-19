import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogoutClick = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <>
      <h1>Welcome to the Homepage</h1>
      {user ? (
        <div>
          <p>Logged in as: {user.name}</p>
          <button onClick={handleLogoutClick}>Logout</button>
        </div>
      ) : (
        <div>
          <p>
            <Link to="/login">Login</Link> to view your dashboard.
          </p>
          <p>
            <Link to="/register">Register</Link>
          </p>
        </div>
      )}
    </>
  );
};

export default Home;

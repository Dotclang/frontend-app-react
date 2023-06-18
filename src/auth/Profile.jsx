import React, { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h2>Profile Page</h2>
      <p>Welcome, {user.name}!</p>
      {/* Add additional profile information here */}
    </div>
  );
};

export default Profile;

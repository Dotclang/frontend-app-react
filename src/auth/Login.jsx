import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const { login, isAuthChecked } = useAuth();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const [remember, setRemember] = useState(false);

  const onSubmit = async (data) => {
    const { email, password } = data;

    await login(email, password, remember);

    // Redirect to the dashboard page after successful login
    navigate("/dashboard");
  };

  const handleRememberChange = (event) => {
    const { checked } = event.target;
    setRemember(checked);

    // Set the "remember" value in the form data using setValue
    setValue("remember", checked);
  };

  return !isAuthChecked ? (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email:</label>
          <input type="text" {...register("email", { required: true })} />
          {errors.email && <span>Email is required</span>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && <span>Password is required</span>}
        </div>
        <div>
          <label>
            Remember Me:
            <input
              type="checkbox"
              checked={remember}
              onChange={handleRememberChange}
            />
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  ) : (
    <Navigate to="/dashboard" replace />
  );
};

export default Login;

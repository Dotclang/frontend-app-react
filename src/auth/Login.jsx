import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const { login, isAuthChecked, error } = useAuth();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const [remember, setRemember] = useState(false);

  const onSubmit = (data) => {
    const { email, password } = data;
    login(email, password, remember);
  };

  const handleRememberChange = (event) => {
    const { checked } = event.target;
    setRemember(checked);
    setValue("remember", checked);
  };

  return !isAuthChecked ? (
    <div>
      <h2>Login</h2>

      {error && error.errors && (
        <div>
          {Object.keys(error.errors).map((key) => (
            <p key={key}>{error.errors[key][0]}</p>
          ))}
          {/* {error.message && <p>{error.message}</p>} */}
        </div>
      )}

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

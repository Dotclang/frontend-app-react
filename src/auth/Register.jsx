import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const { registerUser, isAuthChecked, error } = useAuth();

  const onSubmit = async (data) => {
    await registerUser(data);
  };

  const password = watch("password");

  return !isAuthChecked ? (
    <div>
      <h2>Register</h2>
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
          <label>Name:</label>
          <input type="text" {...register("name", { required: true })} />
          {errors.name && <span>Name is required</span>}
        </div>
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
          <label>Confirm Password:</label>
          <input
            type="password"
            {...register("password_confirmation", {
              required: true,
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          {errors.password_confirmation && (
            <span>{errors.password_confirmation.message}</span>
          )}
          {errors.password_confirmation &&
            errors.password_confirmation.type === "required" && (
              <span>Confirm Password is required</span>
            )}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  ) : (
    <Navigate to="/dashboard" replace />
  );
};

export default Register;

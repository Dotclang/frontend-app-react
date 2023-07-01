import React, { useEffect, useState, useMemo } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useForm } from "react-hook-form";
import { Link, useLocation, useParams } from "react-router-dom";
import InputError from "../../components/InputError";
import InputLabel from "../../components/InputLabel";
import PrimaryButton from "../../components/PrimaryButton";
import TextInput from "../../components/TextInput";

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

export default function ResetPassword() {
  const [isProccessing, setIsProccessing] = useState(false);
  let { token } = useParams();
  let query = useQuery();
  let email = query.get("email");
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      email: email || "",
      token: token || "",
      password: "",
      password_confirmation: "",
    },
  });
  const { resetPassword, error, status } = useAuth();

  const password = watch("password");

  useEffect(() => {
    return () => {
      setValue("password_confirmation", "");
    };
  }, [password]);

  const onSubmit = async (data) => {
    setIsProccessing(true);
    await resetPassword(data);
    setIsProccessing(false);
  };

  return (
    <>
      {status && (
        <div className="mb-4 font-medium text-sm text-green-600 dark:text-green-400">
          {status}
          <Link
            to="/login"
            className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
          >
            Login?
          </Link>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <InputLabel htmlFor="email" value="Email" />

          <TextInput
            id="email"
            type="email"
            name="email"
            className="mt-1 block w-full"
            autoComplete="username"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <InputError message={errors.email.message} className="mt-2" />
          )}
          {error && error.errors && error.errors.email && (
            <InputError message={error.errors.email[0]} className="mt-2" />
          )}
        </div>

        <div className="mt-4">
          <InputLabel htmlFor="password" value="Password" />

          <TextInput
            id="password"
            type="password"
            name="password"
            className="mt-1 block w-full"
            autoComplete="new-password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <InputError message={errors.password.message} className="mt-2" />
          )}
          {error && error.errors && error.errors.password && (
            <InputError message={error.errors.password[0]} className="mt-2" />
          )}
        </div>

        <div className="mt-4">
          <InputLabel
            htmlFor="password_confirmation"
            value="Confirm Password"
          />

          <TextInput
            id="password_confirmation"
            type="password"
            name="password_confirmation"
            className="mt-1 block w-full"
            autoComplete="new-password"
            {...register("password_confirmation", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          {errors.password_confirmation && (
            <InputError
              message={errors.password_confirmation.message}
              className="mt-2"
            />
          )}
          {error && error.errors && error.errors.password_confirmation && (
            <InputError
              message={error.errors.password_confirmation[0]}
              className="mt-2"
            />
          )}
        </div>

        <div className="flex items-center justify-end mt-4">
          <PrimaryButton className="ml-4" disabled={isProccessing}>
            Reset Password
          </PrimaryButton>
        </div>
      </form>
    </>
  );
}

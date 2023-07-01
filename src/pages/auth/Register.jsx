import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../contexts/AuthContext";
import InputLabel from "../../components/InputLabel";
import TextInput from "../../components/TextInput";
import InputError from "../../components/InputError";
import PrimaryButton from "../../components/PrimaryButton";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  const { registerUser, error } = useAuth();
  const [processing, setProcessing] = useState(false);

  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      setProcessing(true);
      await registerUser(data);
      setProcessing(false);
    } catch (err) {
      setProcessing(false);
    }
  };

  useEffect(() => {
    return () => {
      setValue("password_confirmation", "");
    };
  }, [password]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <InputLabel htmlFor="name" value="Name" />
        <TextInput
          id="name"
          name="name"
          className="mt-1 block w-full"
          autoComplete="name"
          isFocused={true}
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <InputError message={errors.name.message} className="mt-2" />
        )}
        {error && error.errors && error.errors.name && (
          <InputError message={error.errors.name[0]} className="mt-2" />
        )}
      </div>
      <div className="mt-4">
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
        <InputLabel htmlFor="password_confirmation" value="Confirm Password" />
        <TextInput
          id="password_confirmation"
          type="password"
          name="password_confirmation"
          className="mt-1 block w-full"
          autoComplete="new-password"
          {...register("password_confirmation", {
            required: "Confirm Password is required",
            validate: (value) => value === password || "Passwords do not match",
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
        <Link
          to="/login"
          className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
        >
          Already registered?
        </Link>

        <PrimaryButton className="ml-4" disabled={processing}>
          Register
        </PrimaryButton>
      </div>
    </form>
  );
};

export default Register;

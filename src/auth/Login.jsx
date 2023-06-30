import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";
import InputLabel from "../components/InputLabel";
import TextInput from "../components/TextInput";
import InputError from "../components/InputError";
import Checkbox from "../components/Checkbox";
import PrimaryButton from "../components/PrimaryButton";

const Login = ({ canResetPassword }) => {
  const { login, error, signInWithGoogle } = useAuth();
  const [remember, setRemember] = useState(false);
  const [isProccessing, setIsProccessing] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = async (data) => {
    setIsProccessing(true);
    await login(data);
    setIsProccessing(false);
  };

  const handleRememberChange = (event) => {
    const { checked } = event.target;
    setRemember(checked);
    setValue("remember", checked);
  };

  const handleLoginWithGoogle = () => {
    signInWithGoogle();
  };

  return (
    <>
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
        <div className="block mt-4">
          <label className="flex items-center">
            <Checkbox
              name="remember"
              checked={remember}
              onChange={handleRememberChange}
            />
            <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
              Remember me
            </span>
          </label>
        </div>
        <div className="flex items-center justify-end mt-4">
          {canResetPassword && (
            <Link
              to="/forgot-password"
              className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
            >
              Forgot your password?
            </Link>
          )}

          <PrimaryButton className="ml-4" disabled={isProccessing}>
            Log in
          </PrimaryButton>
        </div>
      </form>
      {/* <div className="flex items-center justify-center mt-4">
        <PrimaryButton className="ml-4 w-full" onClick={handleLoginWithGoogle}>
          Google
        </PrimaryButton>
      </div> */}
    </>
  );
};

export default Login;

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";
import InputError from "../components/InputError";
import PrimaryButton from "../components/PrimaryButton";
import TextInput from "../components/TextInput";

export default function ForgotPassword() {
  const [isProccessing, setIsProccessing] = useState(false);
  const { forgotPassword, error, status } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsProccessing(true);
    await forgotPassword(data);
    setIsProccessing(false);
  };

  return (
    <>
      <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
        Forgot your password? No problem. Just let us know your email address
        and we will email you a password reset link that will allow you to
        choose a new one.
      </div>

      {status && (
        <div className="mb-4 font-medium text-sm text-green-600 dark:text-green-400">
          {status}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
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

        <div className="flex items-center justify-end mt-4">
          <PrimaryButton className="ml-4" disabled={isProccessing}>
            Email Password Reset Link
          </PrimaryButton>
        </div>
      </form>
    </>
  );
}

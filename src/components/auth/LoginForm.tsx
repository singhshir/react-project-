import { Link } from "react-router";
import TextInputComponent from "../ui/form/InputComponent";
import Button from "../ui/button/Button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Zod schema
const LoginSchema = z.object({
  username: z
    .string()
    .min(1, "Email is required"),

  password: z
    .string()
    .min(1, "Password is required"),
});

// Get TypeScript type from Zod schema
type CredentialsType = z.infer<typeof LoginSchema>;

export default function LoginForm() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CredentialsType>({
    resolver: zodResolver(LoginSchema),
  });

  const handleLoginSubmit = (data: CredentialsType) => {
    console.log("Validated data:", data);

    setIsSubmitting(true);

    // API call will go here later
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleLoginSubmit)}
        className="w-full flex flex-col gap-5 py-5"
      >
        {/* Username */}
        <div>
          <TextInputComponent
            label="Username:"
            type="email"
            placeholder="Enter your email"
            {...register("username")}
          />

          {errors.username && (
            <p className="text-red-500 text-sm mt-1">
              {errors.username.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <TextInputComponent
            label="Password:"
            type="password"
            placeholder="Enter your password"
            {...register("password")}
          />

          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="w-full flex items-center justify-end">
          <div className="w-full">
            <p>
              By signing in, you agree with{" "}
              <Link
                to="/privacy-policy"
                className="text-teal-600 underline"
              >
                Privacy policy
              </Link>{" "}
              &{" "}
              <Link
                to="/terms-and-conditions"
                className="text-teal-600 underline"
              >
                Terms and conditions
              </Link>
            </p>
          </div>

          <Link
            to="/forget-password"
            className="text-sm italic text-teal-600 underline hover:scale-103 transition duration-300"
          >
            Forget-Password
          </Link>
        </div>

        <div className="w-full flex justify-between">
          <Button
            buttonName="Cancel"
            type="reset"
            className="bg-red-600 hover:bg-red-700 text-white"
            disabled={isSubmitting}
          />

          <Button
            buttonName="Submit"
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white"
            disabled={isSubmitting}
          />
        </div>
      </form>
    </>
  );
}
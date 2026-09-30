import { Link } from "react-router";
import TextInputComponent from "../ui/form/InputComponent";
import Button from "../ui/button/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axiosClient from "../../lib/services/HttpService";

// Zod schema
const LoginSchema = z.object({
  username: z.string().min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});

// Get TypeScript type from Zod schema
type CredentialsType = z.infer<typeof LoginSchema>;

export default function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CredentialsType>({
    resolver: zodResolver(LoginSchema),
  });

  const handleLoginSubmit = async (data: CredentialsType) => {
    try {
      const detail = await axiosClient.post("/auth/login", data);
      console.log({ detail: detail.data });
    } catch (exception) {
      console.log({ exception });
    }

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
            control={control}
            errMsg={errors?.username?.message}
            name={"username"}
            label="Username:"
            type="text"
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div>
          <TextInputComponent
            control={control}
            errMsg={errors?.password?.message}
            name={"password"}
            label="Password:"
            type="password"
            placeholder="Enter your password"
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
              <Link to="/privacy-policy" className="text-teal-600 underline">
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

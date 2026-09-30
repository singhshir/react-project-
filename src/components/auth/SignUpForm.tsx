import { Link } from "react-router";
import TextInputComponent from "../ui/form/InputComponent";
import Button from "../ui/button/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axiosClient from "../../lib/services/HttpService";

const SignupSchema = z.object({
  // name: z.string().min(1, "Name is required"),
  // email: z.string().min(1, "Email is required"),
  // phone: z.string().min(1, "Phone is required"),
  // password: z.string().min(1, "Password is required"),
  // confirmPassword: z.string().min(1, "Password is required"),
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "last Name is required"),
  age: z.string().min(1, "Age is required"),
});

 

type CredentialsType = z.infer<typeof SignupSchema>;

export default function SignupForm() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CredentialsType>({
    resolver: zodResolver(SignupSchema),
  });

  const handleSignupSubmit = async (data: CredentialsType) => {
    try {
      const detail = await axiosClient.post("users/add", data);
      console.log({ detail: detail.data });
    } catch (exception) {
      console.log({ exception });
    }

  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleSignupSubmit)}
        className="w-full flex flex-col gap-5 py-5"
      >
        <TextInputComponent
          control={control}
          errMsg={errors?.firstName?.message}
          name={"firstName"}
          label={"First Name:"}
          type={"text"}
          placeholder={"Enter your First Name"}
        ></TextInputComponent>

        <TextInputComponent
          control={control}
          errMsg={errors?.lastName?.message}
          name={"lastName"}
          label={"Last Name:"}
          type={"text"}
          placeholder={"Enter your Last Name"}
        ></TextInputComponent>

        <TextInputComponent
          control={control}
          errMsg={errors?.age?.message}
          name={"age"}
          label={"Age:"}
          type={"string"}
          placeholder={"Enter your Age"}
        ></TextInputComponent>

        {/* <TextInputComponent
          control={control}
          errMsg={errors?.name?.message}
          name={"name"}
          label={"Name:"}
          type={"text"}
          placeholder={"Enter your Name"}
        ></TextInputComponent>

        <TextInputComponent
          control={control}
          errMsg={errors?.email?.message}
          label={"Email:"}
          type={"email"}
          placeholder={"Enter your email"}
          name={"email"}
        ></TextInputComponent>

        <TextInputComponent
          control={control}
          errMsg={errors?.phone?.message}
          label={"Phone:"}
          type={"text"}
          placeholder={"Enter your phone"}
          name={"phone"}
        ></TextInputComponent>

        <TextInputComponent
          control={control}
          errMsg={errors?.password?.message}
          label={"Password:"}
          type={"password"}
          placeholder={"Enter your Password"}
          name={"password"}
        ></TextInputComponent>

        <TextInputComponent
          control={control}
          errMsg={errors?.confirmPassword?.message}
          name={"confirmPassword"}
          label={"Confirm Password:"}
          type={"password"}
          placeholder={"Enter password again"}
        ></TextInputComponent> */}

        <div className="w-full flex items-center justify-end">
          <div className="w-full">
            <p>
              By signing up, you agree with
              <Link to="/privacy-policy" className="text-teal-600 underline">
                {" "}
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
        </div>
        <div className="w-full flex justify-between">
          <Button
            buttonName={"Cancel"}
            type={"reset"}
            className={"bg-red-600 hover:bg-red-700 text-white"}
            disabled={isSubmitting}
          ></Button>

          <Button
            buttonName={"Create"}
            type={"submit"}
            className={"bg-green-600 hover:bg-green-700 text-white"}
            disabled={isSubmitting}
          ></Button>
        </div>

        <div className="flex justify-center">
          <p>
            Already have an account?{" "}
            <Link
              to="/"
              className="text-sm italic text-teal-600 underline hover:scale-103 transition duration-300"
            >
              Login
            </Link>
          </p>
        </div>
      </form>
    </>
  );
}

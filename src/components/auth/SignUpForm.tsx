import { Link } from "react-router";
import TextInputComponent from "../ui/form/InputComponent";
import Button from "../ui/button/Button";
import { useState, type BaseSyntheticEvent } from "react";

type CredentialsType = {
  username: string;
  password: string;
};

export default function SignupForm() {
  const [credentials, setCredentials] = useState<CredentialsType>({
    username: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleLoginSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  };

  const handleInputChange = (e: BaseSyntheticEvent) => {
    const { name, value } = e.target;
    console.log(value);
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  return (
    <>
      <form
        onSubmit={handleLoginSubmit}
        className="w-full flex flex-col gap-5 py-5"
      >
        <TextInputComponent
          label={"Name:"}
          type={"text"}
          placeholder={"Enter your Name"}
          name={"name"}
          onChange={handleInputChange}
        ></TextInputComponent>

        <TextInputComponent
          label={"Email:"}
          type={"email"}
          placeholder={"Enter your email"}
          name={"email"}
          onChange={handleInputChange}
        ></TextInputComponent>

        <TextInputComponent
          label={"Phone:"}
          type={"text"}
          placeholder={"Enter your phone"}
          name={"phone"}
          onChange={handleInputChange}
        ></TextInputComponent>

        <TextInputComponent
          label={"Password:"}
          type={"password"}
          placeholder={"Enter your Password"}
          name={"password"}
          onChange={handleInputChange}
        ></TextInputComponent>

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
          <p>Already have an account? <Link
            to="/"
            className="text-sm italic text-teal-600 underline hover:scale-103 transition duration-300"
          >
            Login
          </Link></p>
          
        </div>
      </form>
    </>
  );
}

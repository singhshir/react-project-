import { Link } from "react-router";
import TextInputComponent from "../ui/form/InputComponent";
import Button from "../ui/button/Button";
import { useEffect, useState, type BaseSyntheticEvent } from "react";
import{useForm} from "react-hook-form"

type CredentialsType = {
  username: string;
  password: string;
};

export default function LoginForm() {
  const{control}=useForm({
    defaultValues:{
      username:"", password:""
    }
  })
  const [credentials, setCredentials] = useState<CredentialsType>({
    username: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleLoginSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  };

  useEffect(() => {
    console.log("This effect runs in every render", isSubmitting);

    return () => {
      setIsSubmitting;
    };
  });

  useEffect(() => {
    console.log("This effect runs only once when we render for the first time");
  }, []);

  useEffect(() => {
    console.log("This effect runs on every time it'd dependency is called");
  }, [isSubmitting]);

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
          label={"Username:"}
          type={"username"}
          placeholder={"Enter your username"}
          name={"username"}
          onChange={handleInputChange}
        ></TextInputComponent>

        <TextInputComponent
          label={"Password:"}
          type={"password"}
          placeholder={"Enter your password"}
          name={"password"}
          onChange={handleInputChange}
        ></TextInputComponent>

        <div className="w-full flex items-center justify-end">
          <div className="w-full">
            <p>
              By signing in, you agree with
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
          <Link
            to="/forget-password"
            className="text-sm italic text-teal-600 underline hover:scale-103 transition duration-300"
          >
            Forget-Password
          </Link>
        </div>
        <div className="w-full flex justify-between">
          <Button
            buttonName={"Cancel"}
            type={"reset"}
            className={"bg-red-600 hover:bg-red-700 text-white"}
            disabled={isSubmitting}
          ></Button>

          <Link to="/cms" className="w-full flex justify-between">
            <Button
              buttonName={"Submit"}
              type={"submit"}
              className={"bg-green-600 hover:bg-green-700 text-white"}
              disabled={isSubmitting}
            ></Button>
          </Link>
        </div>
      </form>
    </>
  );
}
 
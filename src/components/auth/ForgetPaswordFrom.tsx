import { Link } from "react-router";
import Button from "../ui/button/Button";
import TextInputComponent from "../ui/form/InputComponent";
import { useState, type BaseSyntheticEvent } from "react";


export default function ForgetPasswordForm () {

    type CredentialsType = {
    username: string;
    password: string;
  };

  const [credentials, setCredentials] = useState<CredentialsType>({
    username: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleLoginSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault;
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
    return(
        <>
        <form
              onSubmit={handleLoginSubmit}
              className="w-full flex flex-col gap-5 py-5"
            >
              <TextInputComponent
                label={"Email:"}
                type={"email"}
                placeholder={"Enter your registered email"}
                name={"email"}
                onChange={handleInputChange}
              ></TextInputComponent>

              <div className="w-full flex justify-between">
                <Link to="/" className="w-full flex justify-between">
                  <Button
                    buttonName={"Cancel"}
                    type={"reset"}
                    className={"bg-red-600 hover:bg-red-700 text-white"}
                    disabled={isSubmitting}
                  ></Button>
                </Link>

                <Link to="/" className="w-full flex justify-between">
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
    )
}
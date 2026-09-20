import ForgetPasswordForm from "../../components/auth/ForgetPaswordFrom";

export default function ForgetPassword() {

  const pageTitle = "Forget Password";
  const pageSubtitle = "Enter your registered email in the form below:";
  return (
    <>
      
            <div className="flex flex-col gap-4 justify-center items-center w-full">
              <h1 className="text-5xl font-semibold text-blue-950 text-shadow-lg">
                {pageTitle}
              </h1>
              <p className="text-xs italic font-light">{pageSubtitle}</p>
            </div>
            <ForgetPasswordForm />
  
    </>
  );
}

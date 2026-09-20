import SignupForm from "../../../components/auth/SignUpForm";

export default function SignUpPage() {
  const pageTitle = "Signup";
  const pageSubtitle =
    "Enter your details in the form below:";
  return (
    <>
      <section className="w-full h-screen flex justify-center items-center">
        <div className="bg-mauve-300 p-5 shadow-lg flex flex-col gap-5 rounded-lg w-3xl">
          <div className="w-full flex flex-col items-center justify-center">
            <img src="/logo.png" alt="Broadway Logo" className="size-40" />

            <div className="flex flex-col gap-4 justify-center items-center w-full">
              <h1 className="text-5xl font-semibold text-blue-950 text-shadow-lg">
                {pageTitle}
              </h1>
              <p className="text-xs italic font-light">{pageSubtitle}</p>
            </div>
            <SignupForm />
          </div>
        </div>
      </section>
    </>
  );
}

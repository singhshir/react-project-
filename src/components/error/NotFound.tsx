import { useState } from "react";
import { Link } from "react-router";

export default function NotFound() {
  const [errMsg, setErrMsg] = useState({
    pageTitle: "404!!!",
    pageSubTitle: "The page or route you are looking for does not exists",
  });

  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center w-full">
        <h1 className="text-5xl font-semibold text-blue-950 text-shadow-lg">
          {errMsg.pageTitle}
        </h1>
        <p className="text-xs text-red-500 italic font-light">
          {errMsg.pageSubTitle}
        </p>
      </div>
      <Link to="/">
        <button className="bg-red-600 border rounded-lg m-4 cursor-pointer">
          Go Back
        </button>
      </Link>
    </>
  );
}

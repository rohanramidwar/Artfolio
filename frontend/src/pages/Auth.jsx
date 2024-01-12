import React, { useState } from "react";

import Input from "../components/input fields/Input";
import SubmitBtn from "../components/buttons/SubmitBtn";

import google from "../assets/google.png";

const Auth = () => {
  const [isSignup, setisSignup] = useState(false);

  return (
    <div>
      <div className="flex justify-center mt-[125px]">
        <div className="w-[388px]">
          <h1 className="text-[3rem] font-semibold">
            {isSignup ? "Sign up" : "Sign in"}
          </h1>

          <p className="text-sm font-normal text-gray-700">
            {isSignup ? "Already have an account? " : "Don't have an account? "}
            <button
              onClick={() => setisSignup(!isSignup)}
              className="text-blue-500"
            >
              {isSignup ? "Sign in" : "Sign up"}
            </button>
          </p>

          <form
            className="flex flex-col gap-7 mt-14"
            onSubmit={(e) => e.preventDefault()}
          >
            {isSignup && (
              <div className="flex gap-7">
                <Input
                  label={"First name"}
                  type={"text"}
                  placeholder={"Harry"}
                />

                <Input
                  label={"Last name"}
                  type={"text"}
                  placeholder={"Potter"}
                />
              </div>
            )}

            <Input
              label={"Email"}
              type={"text"}
              placeholder={"Harry@gmail.com"}
            />

            <Input
              label={"Password"}
              type={"password"}
              placeholder={"•••••••••"}
            />

            <SubmitBtn text={"Continue"} />

            <div className="flex justify-between items-center">
              <div className="border-b w-1/3 border-solid border-gray-300"></div>
              <p className="text-center text-gray-700">Or</p>
              <div className=" w-1/3 border-b border-solid border-gray-300"></div>
            </div>

            <button className="flex gap-7 justify-center items-center w-full bg-white rounded-lg p-2.5 border border-solid border-gray-300 font-semibold text-base">
              <img src={google} alt="google" width={16} />
              Continue with google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;

import React, { useState } from "react";
import SingleLineInput from "../components/SingleLineInput";
import { Button } from "@mui/material";
import GoogleAuthButton from "../components/GoogleAuthButton";

const Auth = () => {
  const [isLogIn, setisLogIn] = useState(true);

  const toggleAuthMode = () => {
    setisLogIn((previsLogIn) => !previsLogIn);
  };

  return (
    <div className="text-[#dbdee1] md:flex justify-center px-4 pt-6">
      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold mb-4">
          {isLogIn ? "Log in" : "Sign up"}
        </h1>
        <form
          className="flex flex-col md:w-[452px]  max-w-[452px] bg-[#2b2d31] p-4 mb-14"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {isLogIn ? null : (
            <div className="flex  gap-4">
              <SingleLineInput label="FIRST NAME" placeholder="e.g. Rohan" />
              <SingleLineInput label="LAST NAME" placeholder="e.g. Ramidwar" />
            </div>
          )}
          <SingleLineInput
            label="EMAIL"
            placeholder={`e.g. @rohan123@gmail.com`}
          />
          <SingleLineInput
            type="password"
            label="PASSWORD"
            placeholder="Enter password"
          />
          {isLogIn ? (
            <Button variant="outlined">Log in</Button>
          ) : (
            <Button variant="outlined">Sign up</Button>
          )}
          <div className="flex justify-center my-4">
            <span className="text-lg">or</span>
          </div>

          <GoogleAuthButton
            text={isLogIn ? "Sign in with Google" : "Sign up with Google"}
          />
          <p
            className="text-end text-sm mt-4 text-blue-500 cursor-pointer"
            onClick={toggleAuthMode}
          >
            {isLogIn
              ? "Don't have an account? Sign up"
              : "Already have an account? Sign in"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Auth;

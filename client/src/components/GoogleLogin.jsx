import React from "react";
import { Button } from "./ui/button";

const GoogleLogin = () => {
  const loginWithGoogle = () => {
    window.open("http://localhost:5000/auth/google/callback", "_self");
  };

  return (
    <div>
      <Button onClick={loginWithGoogle}>Sign in with Google</Button>
    </div>
  );
};

export default GoogleLogin;

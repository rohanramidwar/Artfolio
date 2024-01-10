import React from "react";
import GoogleIcon from "../assets/google.png";

const GoogleAuthButton = ({ text }) => {
  return (
    <div className="flex gap-2 items-center justify-center rounded-full bg-[#43444b]">
      <button className="flex gap-2 items-center justify-center py-2 rounded-full">
        <img src={GoogleIcon} width={20} />
        <span className="text-base font-semibold ">{text}</span>
      </button>
    </div>
  );
};

export default GoogleAuthButton;

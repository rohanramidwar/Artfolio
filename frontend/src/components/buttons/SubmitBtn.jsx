import React from "react";

const SubmitBtn = ({ text }) => {
  return (
    <button className="w-full bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg p-2.5 text-white font-semibold text-sm">
      {text}
    </button>
  );
};

export default SubmitBtn;

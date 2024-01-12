import React from "react";

const Input = ({ label, type, placeholder }) => {
  return (
    <label className="text-black-500 font-semibold">
      {label}
      <input
        className="mt-2.5 block w-full rounded-lg border border-solid border-gray-300 bg-white p-2.5 text-sm leading-5 font-normal text-gray-700 shadow-sm"
        type={type}
        placeholder={placeholder}
        required
      />
    </label>
  );
};

export default Input;

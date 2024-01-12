import React from "react";

const MultilineInput = ({ label, type, placeholder }) => {
  return (
    <label className="text-black-500 font-semibold">
      {label}
      <textarea
        className="mt-2.5 block w-full rounded-lg border border-solid border-gray-300 bg-white p-2.5 text-sm leading-5 font-normal text-gray-700 shadow-sm"
        type={type}
        placeholder={placeholder}
        rows={3}
        required
      />
    </label>
  );
};

export default MultilineInput;

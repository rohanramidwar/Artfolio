import React from "react";

const SingleLineInput = ({ label, placeholder, type }) => {
  return (
    <div className="flex flex-col gap-2 pb-4">
      <label className="text-xs font-bold">{label}</label>
      <input
        className="bg-[#1e1f22] p-2 outline-none rounded focus:outline-[#5865f2]"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export const MultilineInput = ({ label, placeholder }) => {
  return (
    <div className="flex flex-col gap-2 pb-4 ">
      <label className="text-xs font-bold">{label}</label>
      <textarea
        className="bg-[#1e1f22] p-2 outline-none rounded focus:outline-[#5865f2]"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default SingleLineInput;

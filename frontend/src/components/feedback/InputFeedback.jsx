import React from "react";

import { SendHorizontal } from "lucide-react";

const InputFeedback = () => {
  return (
    <label className="relative text-black-500 text-2xl font-semibold ">
      Feedback
      <p className="absolute right-2.5 bottom-[10.667px] text-sm text-gray-700 cursor-pointer">
        <SendHorizontal width={20} />
      </p>
      <input
        className="mt-2.5 block lg:w-[300px] w-full rounded-lg border border-solid border-gray-300 bg-white p-2.5 pl-5 text-sm leading-5 font-normal text-gray-700 shadow-sm"
        type="text"
        placeholder="Add your thoughts"
        required
      />
    </label>
  );
};

export default InputFeedback;

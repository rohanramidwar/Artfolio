import React from "react";

const InputPrice = () => {
  return (
    <label className="relative text-black-500 font-semibold">
      Price
      <p className="absolute left-2.5 bottom-[10.667px] text-sm text-gray-700">
        $
      </p>
      <input
        className="mt-2.5 block w-full rounded-lg border border-solid border-gray-300 bg-white p-2.5 pl-5 text-sm leading-5 font-normal text-gray-700 shadow-sm"
        type="number"
        placeholder="4.99"
        required
      />
    </label>
  );
};

export default InputPrice;

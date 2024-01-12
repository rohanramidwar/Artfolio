import React from "react";

const SelectCategory = () => {
  return (
    <label for="small" className="text-black-500 font-semibold">
      Category
      <select
        id="small"
        className="mt-2.5 block w-full rounded-lg border border-solid border-gray-300 bg-white p-2.5 text-sm leading-5 font-normal text-gray-700 shadow-sm"
      >
        <option selected>Choose a category</option>
        <option value="US">Cartoon</option>
        <option value="CA">Scribbling</option>
        <option value="FR">Doodling</option>
        <option value="DE">Sketching</option>
      </select>
    </label>
  );
};

export default SelectCategory;

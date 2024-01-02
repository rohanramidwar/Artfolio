import React from "react";

const FilterIcon = ({ text }) => {
  return (
    <div className="px-4 py-2 bg-gray-800 font-semibold rounded-full cursor-pointer hover:bg-gray-700 transition duration-300">
      {text}
    </div>
  );
};

export default FilterIcon;

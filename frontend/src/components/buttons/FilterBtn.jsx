import React from "react";

const FilterBtn = ({ text }) => {
  return (
    <button className=" bg-white  text-gray-700 shadow-md  font-semibold px-2 py-1 text-md rounded-lg focus:shadow-lg focus:text-[#8b33ff] hover:text-[#8b33ff] transition duration-300 hover:scale-125 focus:scale-125">
      {text}
    </button>
  );
};

export default FilterBtn;

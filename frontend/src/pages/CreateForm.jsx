import React from "react";

import upload_img from "../assets/upload-img.png";

import InputTitle from "../components/input fields/InputTitle";
import InputDescription from "../components/input fields/InputDescription";
import InputPrice from "../components/input fields/InputPrice";
import SelectCategory from "../components/input fields/SelectCategory";

const CreateForm = () => {
  return (
    <div className="flex justify-center mt-[125px]">
      <div className="w-[446px]">
        <h1 className="text-[3rem] font-semibold">Create</h1>

        <form
          className="flex flex-col gap-7 mt-14"
          onSubmit={(e) => e.preventDefault()}
        >
          <InputTitle />

          <InputDescription />

          <label className="text-black-500 font-semibold">
            Art
            <div className="mt-2.5 min-h-64 border border-dashed font-normal text-gray-700 text-sm border-gray-300 rounded-lg flex flex-col gap-2 items-center justify-center ">
              <img src={upload_img} width={80} alt="upload img" />
              <p>Only upload media you own the rights to</p>
            </div>
          </label>

          <SelectCategory />

          <InputPrice />

          <button className="w-full bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg p-2.5 text-white font-semibold text-sm">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateForm;

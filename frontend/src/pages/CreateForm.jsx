import React from "react";

import upload_img from "../assets/upload-img.png";

import Input from "../components/input fields/Input";
import MultilineInput from "../components/input fields/MultilineInput";
import InputPrice from "../components/input fields/InputPrice";
import SelectCategory from "../components/input fields/SelectCategory";
import SubmitBtn from "../components/buttons/SubmitBtn";

const CreateForm = () => {
  return (
    <div className="flex justify-center mt-[125px]">
      <div className="w-[446px]">
        <h1 className="text-[3rem] font-semibold">Create</h1>

        <p className="text-base font-normal text-gray-700">
          Turn passion into profit,{" "}
          <span className="underline decoration-green-500">monetize</span> your
          art
        </p>

        <form
          className="flex flex-col gap-7 mt-14"
          onSubmit={(e) => e.preventDefault()}
        >
          <Input label={"Title"} type={"text"} placeholder={"Title"} />

          <MultilineInput
            label={"Description"}
            type={"text"}
            placeholder={"Description"}
          />

          <label className="text-black-500 font-semibold">
            Art
            <div className="mt-2.5 min-h-64 border border-dashed font-normal text-gray-700 text-sm border-gray-300 rounded-lg flex flex-col gap-2 items-center justify-center ">
              <img src={upload_img} width={80} alt="upload img" />
              <p>Only upload media you own the rights to</p>
            </div>
          </label>

          <SelectCategory />

          <InputPrice />

          <SubmitBtn text={"Submit"} />
        </form>
      </div>
    </div>
  );
};

export default CreateForm;

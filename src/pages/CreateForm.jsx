import { Button } from "@mui/material";
import { Upload } from "lucide-react";
import React from "react";
import SingleLineInput, { MultilineInput } from "../components/SingleLineInput";
import CategorySelectInput from "../components/CategorySelectInput";

const CreateForm = () => {
  return (
    <div className="text-[#dbdee1] md:flex justify-center px-4 pt-6">
      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold mb-4">Create</h1>

        <form
          className="flex flex-col md:w-[740px] max-w-[740px] bg-[#2b2d31] p-4 mb-14"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <SingleLineInput label="TITLE" placeholder="add title" />

          <MultilineInput label="DISCRIPTION" placeholder="describe" />

          <div className="flex flex-col gap-2 pb-4">
            <label className="text-xs font-bold">UPLOAD ART</label>
            <div className="min-h-64 flex items-center justify-center rounded border border-[#1e1f22] border-dashed">
              <button className="flex gap-1 border rounded border-[#5865f2] text-[#5865f2] p-2">
                <Upload width={20} />
                <span>upload</span>
              </button>
            </div>
          </div>

          <CategorySelectInput />

          <div className="flex flex-col gap-2  pb-14">
            <label className="text-xs font-bold">PRICE</label>
            <label className="relative flex items-center">
              <span className="absolute left-2">$</span>
              <input
                className="bg-[#1e1f22] p-2 pl-6 w-full outline-none rounded focus:outline-[#5865f2]"
                type="number"
                placeholder="1"
              />
            </label>
          </div>

          <Button variant="outlined">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default CreateForm;

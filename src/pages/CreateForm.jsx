import { Button } from "@mui/material";
import { Upload, XCircle } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const CreateForm = () => {
  return (
    <div className="text-[#dbdee1] flex justify-center pt-6">
      <div className="flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Create</h1>
          <Link to="/">
            <XCircle />
          </Link>
        </div>

        <form
          className="flex flex-col w-[740px] bg-[#2b2d31] p-4 mb-14"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="flex flex-col gap-2 pb-4">
            <label className="text-xs font-bold">TITLE</label>
            <input
              className="bg-[#1e1f22] p-2 outline-none rounded focus:outline-[#5865f2]"
              type="text"
              placeholder="Add title for your art"
            />
          </div>
          <div className="flex flex-col gap-2 pb-4 ">
            <label className="text-xs font-bold">DESCRIPTION</label>
            <textarea
              className="bg-[#1e1f22] p-2 outline-none rounded focus:outline-[#5865f2]"
              type="text"
              placeholder="Describe your art"
            />
          </div>
          <div className="flex flex-col gap-2 pb-4">
            <label className="text-xs font-bold">UPLOAD ART</label>
            <div className="min-h-64 flex items-center justify-center rounded border border-[#1e1f22] dashed">
              <button className="flex gap-1 border rounded border-[#5865f2] text-[#5865f2] p-2">
                <Upload width={20} />
                <span>upload</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2 pb-14">
            <label className="text-xs font-bold">PRICE</label>
            <label className="relative flex items-center">
              <span className="absolute left-2">$</span>
              <input
                className="bg-[#1e1f22] p-2 pl-6 w-full outline-none rounded focus:outline-[#5865f2]"
                type="text"
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

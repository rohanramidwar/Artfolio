import React from "react";
import { Button } from "./ui/button";

import picPlaceholder from "../assets/pic-placeholder.png";

const CreatePost = () => {
  return (
    <div className="text-slate-800 mt-[89px]">
      {/* title  */}
      <div className="bg-white flex justify-between items-center fixed w-full z-10 py-5 px-20 border-b">
        <h1 className="font-medium text-2xl">Create Post</h1>
        <div className="flex gap-2">
          <Button className="font-semibold rounded-full bg-gray-200 text-slate-800 hover:bg-gray-200">
            Cancel
          </Button>
          <Button className="font-semibold rounded-full">Publish</Button>
        </div>
      </div>

      {/* inputs  */}
      <div className="flex items-center justify-center">
        <div className="w-2/5 overflow-auto scroll-smooth pt-10 pb-20 flex flex-col gap-5 items-center mt-20">
          <input
            placeholder="Give me a name"
            className=" px-7 text-2xl font-semibold outline-none rounded-lg"
          />
          <div
            role="button"
            className="w-full text-slate-500 flex flex-col gap-3 justify-center items-center min-h-60 border-2 border-dashed rounded-xl"
          >
            <img width={80} src={picPlaceholder} alt="pic-placeholder" />
            <p className="text-sm underline decoration-green-500">Browse</p>
          </div>
          <textarea
            placeholder="Write what went into this design or add any details you'd like to mention."
            className="w-4/5 px-3 py-4 outline-none border-2 border-white hover:border-inherit focus:border-purple-300 rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default CreatePost;

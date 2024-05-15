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
      <div className="overflow-auto scroll-smooth pt-10 pb-20 flex flex-col gap-5 items-center mt-20">
        <input
          placeholder="Give me a name"
          className="w-1/3 p-3 outline-none border focus:border-zinc-500 rounded-lg"
        />
        <div
          role="button"
          className="text-slate-500 flex flex-col gap-3 justify-center items-center w-1/3 min-h-60 border-2 border-dashed rounded-lg "
        >
          <img width={100} src={picPlaceholder} alt="pic-placeholder" />
          <p className="text-sm">Browse art</p>
        </div>
        <textarea
          placeholder="Write what went into this design or add any details you'd like to mention."
          rows={3}
          className="w-1/3 p-3 outline-none border focus:border-zinc-500 rounded-lg"
        />
      </div>
    </div>
  );
};

export default CreatePost;

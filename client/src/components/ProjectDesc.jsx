import React from "react";
import { Button } from "./ui/button";
import { Bookmark, Edit, Heart, Trash } from "lucide-react";

const ProjectDesc = ({ post }) => {
  return (
    <div className="pt-9 flex justify-center overflow-auto text-slate-900">
      <div className="w-3/4 flex flex-col gap-8">
        <h1 className="text-5xl font-extrabold">{post?.title}</h1>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <img
              className="w-11 h-11 rounded-full cursor-pointer"
              src={post?.creator?.profilePic}
              alt="user"
            />
            <div>
              <p className="hover:underline cursor-pointer font-medium">
                {post?.creator?.displayName}
              </p>
              <p className="text-violet-500 text-sm">{post?.category}</p>
            </div>
          </div>
          <div className="flex gap-8 items-center">
            {/* <button className="flex gap-2 items-center">
              <Heart size={14} />0
            </button>
            <button>
              <Bookmark size={14} />
            </button>
            <Button className="rounded-xl py-3 h-auto">Contact</Button> */}
            <button className="shadow bg-gray-200 px-4 py-3 rounded-xl">
              <Edit size={14} />
            </button>
            <button className="shadow bg-red-500 text-white px-4 py-3 rounded-xl">
              <Trash size={14} />
            </button>
          </div>
        </div>
        <img className="w-full rounded-xl" src={post?.artImg} alt="art" />
        <p className="px-8 text-xl">{post?.desc}</p>
      </div>
    </div>
  );
};

export default ProjectDesc;

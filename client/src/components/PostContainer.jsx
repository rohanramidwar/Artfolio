import React from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

const PostContainer = ({ title }) => {
  return (
    <div className="flex flex-col gap-2 w-full mb-5 break-inside-avoid">
      <Drawer>
        <DrawerTrigger>
          <img className="max-w-full rounded-xl" alt="art" />
        </DrawerTrigger>
        <DrawerContent className="h-[91%]"> </DrawerContent>
      </Drawer>
      <p className="font-medium text-sm">{title}</p>
      <div className="cursor-pointer flex gap-2 items-center">
        <img className="w-8 h-8" alt="profile-pic" />
        <p className="hover:underline text-sm">Artist</p>
      </div>
    </div>
  );
};

export default PostContainer;

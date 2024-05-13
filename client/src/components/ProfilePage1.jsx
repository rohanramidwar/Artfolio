import React from "react";
import { Button } from "./ui/button";

const ProfilePage1 = () => {
  return (
    <div className="flex flex-col items-center text-gray-800">
      {/* user info */}
      <div className="flex flex-col  items-center gap-3">
        <img
          className="w-32 h-32 rounded-full"
          src="https://avatars.githubusercontent.com/u/139254497?v=4"
          alt="user"
        />
        <p className="font-semibold text-3xl">Rohan Ramidwar</p>
        <div className="flex gap-2">
          <p>0 followers</p>
          <p>0 following</p>
        </div>
        <p>0 likes</p>
        <div className="flex gap-2">
          <Button className="rounded-full font-semibold">Get in Touch</Button>
          <Button className="rounded-full font-semibold bg-gray-200 text-gray-800 hover:bg-gray-200 hover:text-gray-800">
            Follow
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage1;

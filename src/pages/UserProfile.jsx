import React from "react";
import { Avatar } from "@mui/material";
import { Edit, Share2 } from "lucide-react";

const UserProfile = () => {
  return (
    <div className="flex flex-col  text-[#dbdee1] items-center gap-8 pt-6 mb-14">
      <div className="flex flex-col items-center pb-6 ">
        <Avatar sx={{ width: 120, height: 120 }} />
        <h2 className="text-2xl font-bold my-4 ">Rohan Ramidwar</h2>
        <div className="flex gap-4">
          <button className="">
            <Share2 />
          </button>
          <button className=" ">
            <Edit />
          </button>
        </div>
      </div>
      <div className="">
        <div className=" border-b-2 border-[#2b2d31] mb-6 pb-2">
          <h2 className="text-2xl font-semibold">Recent</h2>
        </div>

        <div className="md:grid grid-cols-3 gap-6">
          <div
            className="flex flex-col bg-[#1e1f22] 
          w-[359px] rounded-lg transtion 
          duration-300 
          hover:-translate-y-2 mb-6 md:mb-0"
          >
            <img
              src="https://via.placeholder.com/400x250"
              className=" w-full rounded-lg"
              alt="img"
            />
          </div>
          <div className="flex flex-col bg-[#1e1f22] w-[359px] rounded-lg transtion duration-300 hover:-translate-y-2 mb-6 md:mb-0">
            <img
              src="https://via.placeholder.com/400x250"
              className=" w-full rounded-lg"
              alt="img"
            />
          </div>
          <div className="flex flex-col bg-[#1e1f22] w-[359px] rounded-lg transtion duration-300 hover:-translate-y-2 mb-6 md:mb-0">
            <img
              src="https://via.placeholder.com/400x250"
              className=" w-full rounded-lg"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

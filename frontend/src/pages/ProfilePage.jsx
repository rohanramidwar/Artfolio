import React from "react";
import { Avatar } from "@mui/material";
import { Mail } from "lucide-react";
import ArtCard from "../components/ArtCard";
import { Pagination } from "@mui/material";

const ProfilePage = () => {
  return (
    <div className="flex items-center flex-col">
      <div className="flex flex-col items-center gap-2 ">
        <Avatar sx={{ width: 80, height: 80, fontSize: 32 }}>H</Avatar>
        <h1 className="font-semibold">Harry Potter</h1>
        <p>Hello ! I draw portraits</p>
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-700 text-white text-sm">
          <Mail width={16} />
          Get in touch
        </button>
      </div>

      <div className="lg:grid grid-cols-3 flex flex-col  gap-9 mt-14 border-t border-gray-300 pt-14">
        <ArtCard />
        <ArtCard />
        <ArtCard />
        <ArtCard />
        <ArtCard />
        <ArtCard />
      </div>

      <Pagination className="mt-14 " count={10} />
    </div>
  );
};

export default ProfilePage;

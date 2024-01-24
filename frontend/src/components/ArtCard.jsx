import React from "react";
import { Heart, MessageCircle } from "lucide-react";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const ArtCard = () => {
  return (
    <Link to="art-details">
      <div className="w-[282px] h-[410px] rounded-lg shadow-md bg-white p-2.5 flex flex-col gap-2 text-gray-500 transition duration-300 hover:scale-105 hover:shadow-lg">
        <img
          className="rounded"
          src="https://via.placeholder.com/349x261"
          alt="artwork img"
        />

        <div className="flex flex-col h-full justify-between">
          <div>
            <div className="flex gap-1 items-center">
              <Avatar sx={{ width: 24, height: 24, fontSize: 14 }}>H</Avatar>
              <p className="text-sm">Harry Potter</p>
            </div>
            <h2 className="text-gray-700 mt-1 text-base font-semibold text-clamp-1">
              Lorem ipsum dolor sit amet
            </h2>
            <p className="mt-2 text-sm line-clamp-3">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididu
            </p>
          </div>

          <div className="flex gap-2">
            <div className="flex gap-1 items-center">
              <Heart width={14} />
              <p className="text-sm">(1 likes)</p>
            </div>

            <div className="flex gap-1 items-center">
              <MessageCircle width={14} />
              <p className="text-sm">(1 comments)</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArtCard;

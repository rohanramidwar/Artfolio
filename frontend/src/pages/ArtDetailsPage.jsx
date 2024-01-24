import React from "react";
import { Avatar } from "@mui/material";
import InputFeedback from "../components/feedback/InputFeedback";
import SingleComment from "../components/feedback/SingleComment";

const ArtDetailsPage = () => {
  return (
    <div className="text-gray-700 m-6 lg:m-8 lg:mx-[72px] lg:flex bg-white shadow-md rounded-lg ">
      <div className="max-w-[882px] p-[38px]">
        <h2 className="text-3xl font-semibold text-[#8b33ff]">
          Lorem ipsum dolor sit amet
        </h2>

        <div className="flex gap-2 items-center mt-[23px]">
          <Avatar sx={{ width: 24, height: 24, fontSize: 16 }}>H</Avatar>
          <p className="font-semibold">Harry</p>
        </div>

        <p className="my-[27px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam,
        </p>

        <img
          className="w-full rounded-lg"
          src="https://via.placeholder.com/349x261"
          alt="art img"
        />

        <button className="w-full p-2 mt-4 border border-[#8b33ff] rounded-lg font-semibold text-[#8b33ff] text-sm hover:bg-[#8b33ff] hover:text-white transition duration-300">
          $4.99 | Add to cart
        </button>
      </div>

      <div className="lg:border-l lg:border-t-0 border-t border-solid border-gray-300 p-[38px] flex flex-col gap-7">
        <InputFeedback />

        <SingleComment />
      </div>
    </div>
  );
};

export default ArtDetailsPage;

import React from "react";
import { Avatar } from "@mui/material";

const SingleComment = () => {
  return (
    <div className="flex  gap-2 mb-6">
      <Avatar sx={{ width: 24, height: 24 }} />
      <div className="">
        <p className="font-semibold text-[14px]">Rohan</p>
        <p className="font-light text-[14px]">Nice work!</p>
      </div>
    </div>
  );
};

export default SingleComment;

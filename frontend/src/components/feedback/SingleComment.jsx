import React from "react";

import { Avatar } from "@mui/material";

const SingleComment = () => {
  return (
    <div className="flex gap-2">
      <Avatar sx={{ width: 24, height: 24, fontSize: 16 }}>H</Avatar>
      <div>
        <h5 className="font-semibold">Harry</h5>
        <p>Nice bro !</p>
      </div>
    </div>
  );
};

export default SingleComment;

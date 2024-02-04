import React from "react";

const Comment = () => {
  return (
    <div className="flex gap-2  pt-4 ">
      <div>
        <img
          src="https://i.pinimg.com/564x/73/61/98/7361987df08688eba5cbcaa117017811.jpg"
          className="rounded-full w-[32px] h-[32px]"
          alt="profile"
        />
      </div>

      <div className="mt-1 flex flex-col ">
        <p className="font-semibold">Riya</p>
        <p>Brilliant👏</p>
      </div>
    </div>
  );
};

export default Comment;

import React from "react";
import { User, LogOut } from "lucide-react";
import { useState } from "react";

function ProfileMenu() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="relative cursor-pointer">
      <div
        role="button"
        onClick={() => {
          setOpenMenu(!openMenu);
        }}
      >
        <img
          className="rounded-full w-[45.33px] h-[45.33px]"
          src="https://i.pinimg.com/564x/4b/cc/54/4bcc54ebe6d0e6700e3df3047c1129c8.jpg"
          alt="profile image"
        />
      </div>
      {openMenu ? (
        <div className="absolute z-10 right-0 p-4 border border-gray-300 shadow-md bg-white rounded-xl mt-3 transition duration-300 ">
          <div className="mt-2 hover:text-purple-500 flexStart  items-center gap-2">
            <User size={18} />
            <p>Profile</p>
          </div>
          <div className="mt-2 pt-2 border-t border-gray-300 flexStart hover:text-purple-500  gap-2">
            <LogOut size={18} />
            <p>Signout</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ProfileMenu;

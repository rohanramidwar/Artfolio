import React from "react";
import { User, LogOut } from "lucide-react";
import avatarUrl from "../assets/user-photo.png";
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
          className="rounded-full"
          width={45.33}
          src={avatarUrl}
          alt="profile image"
        />
      </div>
      {openMenu ? (
        <div className="absolute right-0 p-4 border border-gray-300 shadow-md bg-white rounded-xl mt-3 transition duration-300 ">
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

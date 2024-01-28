import React from "react";
import ProfileMenu from "../components/ProfileMenu";

function Navbar() {
  return (
    <nav className="flexBetween px-14 py-[26px] text-gray-700">
      <div className="font-semibold  cursor-pointer">
        <h1 className="text-4xl hover:text-gray-600 underline decoration-purple-600">
          Artfolio
        </h1>
      </div>

      <ProfileMenu />
    </nav>
  );
}

export default Navbar;

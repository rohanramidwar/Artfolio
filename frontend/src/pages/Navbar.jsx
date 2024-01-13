import React from "react";
import { LogOut, ShoppingCart } from "lucide-react";
import { Avatar } from "@mui/material";

const Navbar = () => {
  return (
    <nav className=" flex justify-between py-8 px-16 items-center border-b border-solid border-gray-300 shadow-sm h-20 bg-white ">
      <h2 className="text-4xl font-semibold font-['Nunito Sans'] text-[#262626]">
        Artfolio
      </h2>

      <ul className="flex items-center gap-7">
        <li>
          <Avatar>H</Avatar>
        </li>

        <li className="text-[#8b33ff]">
          <ShoppingCart />
        </li>

        <li className="text-[#8b33ff]">
          <LogOut />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

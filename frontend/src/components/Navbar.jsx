import React from "react";
import { LogOut, ShoppingCart } from "lucide-react";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" flex justify-between p-6 lg:p-8 lg:px-[72px]  items-center  ">
      <div className="lg:text-xl text-2xl font-semibold  font-['Nunito Sans'] text-white shadow-md p-2.5 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500">
        <Link to="/">Artfolio</Link>
      </div>

      <ul className="flex items-center gap-4">
        <li>
          <Link to="profile">
            <Avatar>H</Avatar>
          </Link>
        </li>

        <li className="text-[#8b33ff] p-2  transition duration-300  rounded-full hover:bg-[#f1e6ff]">
          <Link to="cart">
            <ShoppingCart />
          </Link>
        </li>

        <li className="text-[#8b33ff] p-2  transition duration-300  rounded-full hover:bg-[#f1e6ff]">
          <Link to="auth">
            <LogOut />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import appLogo from "../assets/a_capital_blue.png";
import { Search, ShoppingCart } from "lucide-react";
import { Avatar } from "@mui/material";

const AppBar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center h-14 px-6 bg-gray-900 text-gray-100 border-b border-gray-700 mb-14">
        <Link to="/">
          <img className="w-28" src={appLogo} />
        </Link>

        <div className="flex gap-6">
          <div className="flex">
            <button className="bg-gray-800 p-1 text-gray-500 border border-r-0 border-gray-700">
              <Search />
            </button>
            <input
              className="bg-gray-800 pl-1 outline-none placeholder-gray-500 border border-l-0 border-gray-700"
              placeholder="Search"
            />
          </div>

          <button>
            <Link to="/">
              <Avatar>R</Avatar>
            </Link>
          </button>
          <button>
            <Link to="cart">
              <ShoppingCart />
            </Link>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default AppBar;

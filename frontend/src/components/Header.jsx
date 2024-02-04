import React from "react";
import ProfileMenu from "../components/ProfileMenu";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flexBetween px-[42px] py-[26px] text-gray-700">
      <div className="font-semibold flexStart gap-9 cursor-pointer">
        <Link to="/">
          <h1 className="pb-2 text-3xl font-bold hover:text-gray-600">
            Artfolio
          </h1>
        </Link>
        <ul className="flexStart gap-9">
          <li className=" hover:text-gray-600">Find artist</li>
          <li className=" hover:text-gray-600">Inspiration</li>
          <li className=" hover:text-gray-600">Workshop</li>
        </ul>
      </div>
      <div className="flexCenter gap-5">
        <ProfileMenu />
        <Tooltip title="Share work">
          <Link to="/create">
            <button className="font-semibold text-sm h-[45.33px] hover:scale-110 transition duration-300 px-4 shadow bg-purple-500 hover:bg-purple-600 text-white rounded-xl">
              Share work
            </button>
          </Link>
        </Tooltip>
      </div>
    </nav>
  );
};

export default Header;

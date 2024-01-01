import { Search, ShoppingCart } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import ArtfolioLogo from "../assets/artfolio.png";
import { Avatar } from "@mui/material";

const AppBar = () => {
  return (
    <div>
      <nav className="flex h-14 justify-between items-center px-6">
        <Link to="/">
          <img className="w-28" src={ArtfolioLogo} alt="Artfolio" />
        </Link>

        <div className="flex items-center gap-6">
          <div className="flex">
            <button className="bg-white rounded-l pl-2">
              <Search />
            </button>
            <input
              className="h-8 rounded-r outline-none pl-2"
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
              <ShoppingCart color="#fff" />
            </Link>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default AppBar;

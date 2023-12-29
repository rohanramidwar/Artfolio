import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import { FiShoppingCart } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";

import ArtfolioLogo from "../assets/artfolio.png";

const AppBar = () => {
  return (
    <div style={{ background: "#2c2c2c" }}>
      <nav className="flex justify-between items-center px-6 py-3">
        <div>
          <Link to="/">
            <img src={ArtfolioLogo} width={150} alt="Artfolio" />
          </Link>
        </div>
        <div className="flex gap-6 items-center">
          <div className="flex">
            <button className="px-4" style={{ background: "#444444" }}>
              <FiSearch size={20} />
            </button>
            <input
              className="h-12 outline-none"
              style={{ background: "#444444" }}
              placeholder="find artist..."
            />
          </div>
          <Link to="/">
            <button>
              <Avatar>R</Avatar>
            </button>
          </Link>
          <Link to="cart">
            <button className="flex items-center">
              <FiShoppingCart size={20} />
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default AppBar;

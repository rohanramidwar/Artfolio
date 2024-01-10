import { Avatar, Badge } from "@mui/material";
import { LogOut, ShoppingCart } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const AppBar = () => {
  return (
    <div>
      <nav
        className="flex justify-between text-[#dbdee1]
      items-center p-4 h-[64px] border-b-2 border-[#2b2d31]"
      >
        <Link to="/">
          <span className="font-black text-3xl">Artfolio</span>
        </Link>

        <div className="flex gap-[18px]">
          <button>
            <Link to="profile">
              <Avatar />
            </Link>
          </button>
          <button>
            <Link to="cart">
              <Badge badgeContent={3} color="success">
                <ShoppingCart />
              </Badge>
            </Link>
          </button>
          <button>
            <Link to="/">
              <LogOut />
            </Link>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default AppBar;

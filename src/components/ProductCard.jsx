import React from "react";
import { Avatar, Button } from "@mui/material";
import { Heart, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import "../components/img.css";

const ProductCard = () => {
  return (
    <div>
      <Link to="product">
        <div className="flex flex-col bg-[#1e1f22] w-[359px] rounded-lg transtion duration-300 hover:-translate-y-2 mb-6 md:mb-0">
          <div className="relative img-container">
            <img
              src="https://via.placeholder.com/400x250"
              className=" w-full rounded-t-lg"
              alt="img"
            />

            <p className="absolute bottom-6 left-6 font-semibold text-xl line-clamp-1  transtion duration-300 img-title ">
              Lorem ipsum dolor sit amet
            </p>
          </div>

          <div className="flex justify-between p-4 text-[#a9aaac]">
            <div className="flex gap-2">
              <Avatar sx={{ width: 24, height: 24 }} />
              <p className="text-[#dbdee1] font-semibold">Rohan Ramidwar</p>
            </div>
            <div className="flex gap-4">
              <button className="flex gap-1">
                <Heart width={18} />
                <span>1</span>
              </button>
              <button className="flex gap-1">
                <MessageCircle width={18} />
                <span>1</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col p-4 gap-4">
            <Button variant="outlined">US$4.99 | Add to cart</Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;

import React from "react";
import { Avatar, Button } from "@mui/material";
import { Heart, MessageCircle } from "lucide-react";

const Product = () => {
  return (
    <div className="flex flex-col bg-[#1e1f22] w-[359px] rounded-lg transtion duration-300 hover:-translate-y-2">
      <img
        src="https://via.placeholder.com/400x250"
        className="h-40 object-cover w-full rounded-t-lg"
        alt="img"
      />

      <div className="flex justify-between p-4 text-[#a9aaac]">
        <div className="flex gap-1">
          <Avatar sx={{ width: 24, height: 24, fontSize: 12 }}>R</Avatar>
          <p className="text-[#dbdee1] font-semibold">artwithro</p>
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
  );
};

export default Product;

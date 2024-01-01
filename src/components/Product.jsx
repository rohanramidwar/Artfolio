import React from "react";
import { Avatar, Button } from "@mui/material";
import { Heart, MessageCircle } from "lucide-react";

const Product = () => {
  return (
    <div className="pb-4 w-[349px] text-gray-100  bg-gray-800 rounded-lg">
      <img
        alt="Product Image"
        src="https://via.placeholder.com/400x250"
        className="w-full h-48 object-cover rounded-t-lg"
      />

      <div className="p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Avatar sx={{ width: 32, height: 32, fontSize: 16 }}>R</Avatar>
          <p className="text-base ml-2">artwithro</p>
        </div>

        <div className="flex space-x-2">
          <button className="flex items-center text-gray-500">
            <Heart width={18} />
            <p className="ml-1">1</p>
          </button>
          <button className="flex items-center text-gray-500">
            <MessageCircle width={18} />
            <p className="ml-1">1</p>
          </button>
        </div>
      </div>

      <p className="pl-5 text-lg font-semibold mb-2">$99.99</p>

      <Button style={{ marginLeft: 16 }} variant="outlined">
        Add to cart
      </Button>
    </div>
  );
};

export default Product;

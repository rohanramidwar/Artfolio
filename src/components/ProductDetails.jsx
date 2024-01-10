import React from "react";
import { Avatar } from "@mui/material";
import { Heart, Mail } from "lucide-react";
import { Button } from "@mui/material";

const ProductDetails = () => {
  return (
    <div className="max-w-[749px] p-6 md:pr-0">
      <div className="flex gap-2  items-center mb-6">
        <Avatar sx={{ width: 28, height: 28 }} />
        <p className="text-[#dbdee1] font-semibold">Rohan Ramidwar</p>
      </div>

      <h2 className="text-xl font-bold mb-4">Lorem ipsum dolor sit amet</h2>

      <p className="font-light text-base mb-4">
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat n
      </p>

      <img
        src="https://via.placeholder.com/400x250"
        className=" w-full rounded-lg"
        alt="img"
      />

      <div className="flex flex-col mt-6">
        <Button variant="outlined">US$4.99 | Add to cart</Button>
      </div>
    </div>
  );
};

export default ProductDetails;

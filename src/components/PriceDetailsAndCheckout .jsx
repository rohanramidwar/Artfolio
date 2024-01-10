import React from "react";
import { Button } from "@mui/material";

const PriceDetailsAndCheckout = () => {
  return (
    <div className="p-6 md:border-t-0 border-t md:border-l  border-[#43444b]">
      <div className="flex flex-col md:w-[300px] w-[359px]  ">
        <h2 className="font-semibold text-lg  mb-4">PRICE DETAILS</h2>

        <div className="flex flex-col text-[#a9aaac] gap-2 border-dashed py-2 border-y border-[#a9aaac]">
          <div className="flex justify-between">
            <span className="text-sm">Sub total</span>
            <span className="text-sm">$4.99</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm">Delivery fee</span>
            <span className="text-sm text-[#00e97b]">Free</span>
          </div>
        </div>

        <div className="flex justify-between mt-2 mb-6">
          <span className="font-semibold text-lg">Total</span>
          <span className="font-semibold text-lg">$4.99</span>
        </div>
        <Button variant="outlined" color="success">
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default PriceDetailsAndCheckout;

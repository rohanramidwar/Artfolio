import React from "react";
import PriceDetailsAndCheckout from "../components/PriceDetailsAndCheckout ";
import CartItem from "../components/CartItem";

const Cart = () => {
  return (
    <div className="flex justify-center text-[#dbdee1] pt-6 mb-14">
      <div className="flex flex-col">
        <h1 className="font-semibold text-2xl mb-4">Cart</h1>
        <div className="md:flex gap-4 justify-between   bg-[#2b2d31]">
          <div className="flex flex-col gap-4 p-6  mb-4">
            <CartItem />
            <CartItem />
            <CartItem />
          </div>

          <PriceDetailsAndCheckout />
        </div>
      </div>
    </div>
  );
};

export default Cart;

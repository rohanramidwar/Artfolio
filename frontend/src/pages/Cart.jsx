import React from "react";
import CartItem from "../components/CartItem";

const Cart = () => {
  return (
    <div className="text-gray-700 m-6 lg:m-8 lg:mx-[72px] lg:flex bg-white shadow-md rounded-lg ">
      <div className="w-[832px] flex flex-col gap-8 p-[38px]">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>

      <div className="lg:border-l lg:border-t-0 border-t border-solid border-gray-300 p-[38px] flex flex-col gap-2">
        <h1 className="font-semibold text-2xl ">Order Summary</h1>
        <div className="mt-8 flex flex-col gap-4  border-t-2 pt-2 border-gray-300 border-dashed">
          <div className="flex justify-between">
            <span>Total Items:</span>
            <span>3</span>
          </div>

          <div className="flex justify-between">
            <span>Sub Total:</span>
            <span className="text-green-500">$15</span>
          </div>
        </div>

        <div className="flex justify-between border-t-2 pt-2 border-gray-300 border-dashed ">
          <span className="text-xl font-semibold">Total:</span>
          <span className="text-xl text-green-500">$15</span>
        </div>

        <button
          type="button"
          class="mt-4 text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  "
        >
          Checkout with Razor Pay
        </button>
      </div>
    </div>
  );
};

export default Cart;

import React from "react";
import { Trash } from "lucide-react";

const CartItem = () => {
  return (
    <div className=" flex gap-4 w-full">
      <img width={112} src="https://via.placeholder.com/349x261" alt="art ig" />
      <div className="flex flex-col justify-between">
        <div>
          <h5 className="line-clamp-1 w-28 lg:w-80">
            Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsums
          </h5>
          <p className="text-green-500 text-2xl">$4.99</p>
        </div>
        <button className="text-gray-500">
          <Trash width={20} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;

import React from "react";
import { Trash } from "lucide-react";

const CartItem = () => {
  return (
    <div className="flex gap-4  ">
      <img
        src="https://via.placeholder.com/400x250"
        className=" w-40 rounded-lg"
      />

      <div className="flex flex-col justify-between py-2">
        <div>
          <h3 className="line-clamp-1 w-40">
            Lorem ipsum dolor sit ametipsum dolor sit amet
          </h3>
          <span className="text-lg font-semibold">$4.99</span>
        </div>

        <Trash className=" text-red-500" width={20} />
      </div>
    </div>
  );
};

export default CartItem;

import React from "react";
import ProductDetails from "../components/ProductDetails";
import UserFeedbackSection from "../components/UserFeedbackSection";

const ProductView = () => {
  return (
    <div>
      <div className="text-[#dbdee1] flex justify-center pt-14 px-6 mb-14">
        <div className="md:flex gap-[53px]  bg-[#2b2d31]">
          <ProductDetails />
          <UserFeedbackSection />
        </div>
      </div>
    </div>
  );
};

export default ProductView;

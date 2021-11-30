import React from "react";
import Nav from "../components/Nav";
import ProductInfo from "../components/ProductInfo";
import ProductSlide from "../components/ProductSlide";

const ProductDetails = () => {
  return (
    <div>
      <Nav />
      <div className="flex  flex-col md:flex-row items-center justify-evenly gap-10">
        <div className=" w-full sm:w-1/2 md:w-1/2">
          <div className="md:p-6 ">
            <ProductSlide />
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2">
          <div>
            <ProductInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

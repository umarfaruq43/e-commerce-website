import React, { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { FaMinus, FaPlus } from "react-icons/fa";
import Badge from "./Badge";

const ProductInfo = () => {
  const [noOfProduct, setNoOfProduct] = useState(0);

  const productData = {
    productName: "Sneaker Company",
    productTitle: "Fall Limited Edition  Sneakers",
    productDescription:
      "These low-profile sneckers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand anything the weather can offer.",
    productPrice: 125,
    bagdeValue: { bagde: true, badgeNo: 50 },
  };

  const { productName, productTitle, productDescription, productPrice } =
    productData;
  return (
    <div className="px-2 w-full md:w-10/12 lg:w-8/12">
      <h3 className="text-Orange md:pb-3 font-bold tracking-wider text-sm uppercase ">
        {productName}
      </h3>
      <h1 className="font-bold text-3xl md:text-5xl pt-2">{productTitle}</h1>
      <p className="text-dark-grayish-blue py-4  ">{productDescription}</p>
      <div className="equal  md:flex-col md:my-5  md:mb-8 justify-between md:items-start  ">
        <div className="equal">
          <div className=" font-bold text-2xl">{`  $${productPrice}.00`}</div>
          {productData.bagdeValue.bagde ? (
            <Badge badgeNo={productData.bagdeValue.badgeNo} />
          ) : null}
        </div>
        <div className="line-through text-dark-grayish-blue text-sm font-semibold">
          $250.00
        </div>
      </div>
      <div className="equal flex-col md:flex-row  gap-6  my-4">
        <div className="w-full  equal justify-between bg-light-grayish-blue p-3 rounded-lg text-Orange md:w-1/3 lg:w-5/12  ">
          <button
            aria-label="Subtract Product"
            onClick={(e) => setNoOfProduct(Math.max(0, noOfProduct - 1))}
            className="hover:opacity-70"
          >
            <FaMinus />
          </button>
          <div className="text-bla text-very-dark-blue font-bold  ">
            {noOfProduct}
          </div>
          <button
            aria-label="Add Product"
            onClick={(e) => setNoOfProduct(noOfProduct + 1)}
            className="hover:opacity-70"
          >
            <FaPlus />
          </button>
        </div>
        <button className="w-full  bg-Orange hover:opacity-70 rounded-lg p-3 text-White font-bold equal justify-center shadow-xl drop-shadow-sm ">
          <span className="font-bold text-lg mr-4">
            <BsCart3 />
          </span>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;

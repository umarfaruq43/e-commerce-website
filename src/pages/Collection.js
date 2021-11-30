import React from "react";
import Nav from "../components/Nav";
import Img from "../assests/images/image-product-3.jpg";
import { FaMinus, FaPlus } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
const Collection = () => {
  const products = [
    {
      id: "1",
      alt: "",
      image: "",
      tiltle: "The Coldest Sunset",
      describtion:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      cart: 0,
    },
    {
      id: "2",
      alt: "",
      image: "",
      tiltle: "The Coldest Sunset",
      describtion:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      cart: 0,
    },

    {
      id: "2",
      alt: "",
      image: "",
      tiltle: "The Coldest Sunset",
      describtion:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      cart: 0,
    },
  ];

  return (
    <div>
      <Nav />

      <div className="equal  gap-5 p-3 md:gap-10 flex-wrap justify-evenly">
        {/* New product  */}

        {products.map(({ tiltle, describtion, alt, id, cart }) => {
          return (
            <div
              key={id}
              className="max-w-xs min-w-1/2 md:min-w-1/4 md: rounded-lg overflow-hidden shadow-lg  transform "
            >
              <img src={Img} className="w-full" alt={alt} />
              <div className="px-2 py-4">
                <div className="font-bold text-base md:text-xl mb-1">
                  {" "}
                  {tiltle}{" "}
                </div>
                {/* visible on large screen  */}
                <p className="text-gray-700 hidden md:block text-base">
                  {" "}
                  {describtion.slice(0, 70)}...
                </p>

                {/* visible on small screen  */}

                <p className="text-gray-700 block md:hidden text-base">
                  {" "}
                  {describtion.slice(0, 40)}...
                </p>

                <div className="equal flex-col md:flex-row  gap-6  my-4">
                  <div className="w-full  equal justify-between bg-light-grayish-blue p-3 rounded-lg text-Orange  ">
                    <button
                      aria-label="Subtract Product"
                      // onClick={(e) =>
                      //   setNoOfProduct(Math.max(0, noOfProduct - 1))
                      // }
                      className="hover:opacity-70"
                    >
                      <FaMinus />
                    </button>
                    <div className="text-bla text-very-dark-blue font-bold  ">
                      {/* {noOfProduct} */}
                    </div>
                    <button
                      aria-label="Add Product"
                      // onClick={(e) => setNoOfProduct(noOfProduct + 1)}
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Collection;

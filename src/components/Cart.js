import React, { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import ProductPic from "../assests/images/image-product-1-thumbnail.jpg";
import { cartContext } from "../Contexts/CartContext";

const Cart = ({ showCart, setShowCart }) => {
  const { carts, removeCart } = useContext(cartContext);
  return (
    <div className="w-full  md:w-96 mx-auto  shadow-2xl rounded-xl bg-White">
      <h3 className="font-bold p-5 border-b-2 border-light-grayish-blue">
        Cart
      </h3>
      <div
        className="p-4"
        // className={`h-min-square h-40 ${
        //   !carts.length && "flex   justify-center items-center"
        // } `}
      >
        {carts.length !== 0 ? (
          carts.map(({ url, productName, price, noOfOrder }) => {
            return (
              <div className="flex items-center justify-between gap-4">
                <span>
                  <img
                    src={ProductPic}
                    alt="product"
                    className="rounded-lg w-28"
                  />
                </span>
                <div>
                  <span>Autumn limited Edition</span>
                  <span>
                    $125.00 x 3
                    <span className="font-bold inline-block pl-2">
                      $375.00{" "}
                    </span>
                  </span>
                </div>
                <span className="cursor-pointer text-dark-grayish-blue ">
                  <FaTrashAlt />
                </span>
              </div>
            );
          })
        ) : (
          <div className="text-dark-grayish-blue font-bold">
            Your cart is empty
          </div>
        )}
        <button
          name="checkout"
          className="bg-Orange w-full my-4 py-4 mt-8 rounded-lg font-semibold text-white"
          onClick={(e) => setShowCart(!showCart)}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;

// import React, { createContext } from 'react'
// export const Cart = createContext()

// const CartContext = () => {
//     return (
//         <div>

//         </div>
//     )
// }

// export default CartContext

import React, { createContext, useState } from "react";

export const cartContext = createContext();

const cartProducts = [
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

const CartContext = ({ children }) => {
  const [carts, setCarts] = useState(cartProducts);
  const handleCart = (newCart) => {
    setCarts([...carts, newCart]);
  };
  const removeCart = (id) => {
    setCarts(carts.filter((products) => products.id !== id));
  };
  return (
    <cartContext.Provider value={{ carts, handleCart, removeCart }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartContext;

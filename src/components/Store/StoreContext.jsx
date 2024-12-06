<<<<<<< HEAD
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { food_list } from "../../assets/assets";

// eslint-disable-next-line react-refresh/only-export-components
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId]) {
        updatedCart[itemId] += 1;
      } else {
        updatedCart[itemId] = 1;
      }
      return updatedCart;
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId] > 1) {
        updatedCart[itemId] -= 1;
      } else {
        delete updatedCart[itemId];
      }
      return updatedCart;
    });
  };

  const getTotalCart = () => {
    let totalCart = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalCart += itemInfo.price * cartItems[item];
      }
    }
    return totalCart;
  };

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCart
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
=======
import React, { createContext } from "react";
import { food_list } from "../../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const contextValue = {
    food_list,
  };

  return (
    <StoreContextProvider.Provider value={contextValue}>
      {props.children}
    </StoreContextProvider.Provider>
>>>>>>> ef6ae42d6e2e876c4ad2f20e4802d3342ecacf0d
  );
};

export default StoreContextProvider;

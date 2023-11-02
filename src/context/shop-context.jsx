import React, { createContext, useEffect, useState } from "react";
import { PRODUCTS } from "../products";
import { Product } from "../pages/shop/product";
import { Shop } from "../pages/shop/shop";
import axios from "axios";

export const ShopContext = createContext(null);

const Listings = JSON.parse(localStorage.getItem("Listing_List"));
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < Listings.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

//const productList = Shop(() => getProducts());

//console.log("context-productList", productList);
export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = Listings.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.Price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    //console.log("added", Shop.data);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

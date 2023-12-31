import React, { useContext, useState, useEffect } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import "./cart.css";
import axios from "axios";

import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const Listings = JSON.parse(localStorage.getItem("Listing_List"));

  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Cart</h1>
      </div>
      <div className="cartItems">
        {Listings.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/")}> Continue Shopping</button>
          <form
            action="https://backend.kaiparacars.com/create-checkout-session/"
            //action="http://127.0.0.1:8000/create-checkout-session/"
            method="POST"
          >
            <input type="hidden" name="price" value={totalAmount} />
            <button className="addToCartBttn" type="submit">
              Checkout
            </button>
          </form>
        </div>
      ) : (
        <>
          <h1>Cart is empty</h1>
        </>
      )}
    </div>
  );
};

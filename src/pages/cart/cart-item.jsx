import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, Title, Price, CloudImage, Description } = props.data;
  const image = "https://res.cloudinary.com/dhkzubsxd/" + CloudImage;

  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={image} alt="no image" />
      <div className="description">
        <b>{Title}</b>
        <br />
        <div className="cartPrice">${Price}</div>
        <div className="cartDescription">{Description}</div>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};

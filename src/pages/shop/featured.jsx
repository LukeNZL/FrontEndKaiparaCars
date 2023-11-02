import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Cloud } from "phosphor-react";
import { Listing } from "./listing";
import { Link } from "react-router-dom";

export const Featured = (props) => {
  const { id, Title, Price, CloudImage, Description } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  const image = "https://res.cloudinary.com/dhkzubsxd/" + CloudImage;
  return (
    <>
      <div className="product">
        <img src={image} alt="no image" />
        <div className="description">
          <p>
            <b>{Title}</b> <br />${Price} | {Description}
          </p>
        </div>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
          Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
        <Link to={"/listing/" + id}>Details</Link>
      </div>
    </>
  );
};

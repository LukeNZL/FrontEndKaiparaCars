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
      <a id="carsListLink" href={"/listing/" + id}>
        <div className="product">
          <img src={image} alt="no image" />
          <div className="description">
            <p>
              <b>{Title}</b> | ${Price}
            </p>
          </div>
        </div>
      </a>
    </>
  );
};

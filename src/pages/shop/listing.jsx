import React, { useContext, createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ShopContext } from "../../context/shop-context";

export const Listing = () => {
  const { id } = useParams();
  //console.log("id", id);
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  const [listing, setListing] = useState([]);
  const getListing = async () => {
    //const response = await axios.get("http://127.0.0.1:8000/api/" + id);
    const response = await axios.get(
      "http://kc-env-django.eba-fg2fphac.ap-southeast-2.elasticbeanstalk.com/api/" +
        id
    );
    setListing(response.data);
  };

  useEffect(() => {
    getListing();
  }, []);

  const image = "https://res.cloudinary.com/dhkzubsxd/" + listing.CloudImage;

  //const getData = async () => {
  // const response = await axios.get("http://127.0.0.1:8000/api/" + id);
  //console.log("response", response.data);
  //  return response.data;
  //};
  return (
    <>
      <div className="listingView">
        <img className="listingView" src={image} alt="no image" />
        <div id="listingTitle">{listing.Title}</div>
        <div id="listingPrice">
          ${listing.Price} |
          <button className="addToCartBttn" onClick={() => addToCart(id)}>
            Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
          </button>
        </div>

        <div id="listingDescription">
          Description: <br />
          {listing.Description}
        </div>
      </div>
    </>
  );
};

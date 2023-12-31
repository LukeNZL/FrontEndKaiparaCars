import React, { useContext, createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ShopContext } from "../../context/shop-context";

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export const Listing = () => {
  const { id } = useParams();
  //console.log("id", id);
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  const [listing, setListing] = useState([]);
  const [message, setMessage] = useState("");

  const getListing = async () => {
    //const response = await axios.get("http://127.0.0.1:8000/api/" + id);
    const response = await axios.get(
      "https://backend.kaiparacars.com/api/" + id
    );
    setListing(response.data);
  };

  useEffect(() => {
    getListing();
  }, []);
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Your order is confirmed");
    }

    if (query.get("canceled")) {
      setMessage("Order canceled...");
    }
  }, []);
  const image = "https://res.cloudinary.com/dhkzubsxd/" + listing.CloudImage;

  //const getData = async () => {
  // const response = await axios.get("http://127.0.0.1:8000/api/" + id);
  //console.log("response", response.data);
  //  return response.data;
  //};

  return message ? (
    <Message message={message} />
  ) : (
    <>
      <div className="listingView">
        <img className="listingView" src={image} alt="no image" />
        <div id="listingTitle">{listing.Title}</div>
        <div id="listingPrice">
          ${listing.Price} |
          <button className="addToCartBttn" onClick={() => addToCart(id)}>
            Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
          </button>
          <form
            //action="http://127.0.0.1:8000/create-checkout-session/"
            action="https://backend.kaiparacars.com/create-checkout-session/"

            method="POST"
          >
            <input type="hidden" name="itemid" value={id} />
            <input type="hidden" name="price" value={listing.Price} />
            <input type="hidden" name="name" value={listing.Title} />

            <button className="addToCartBttn" type="submit">
              Buy Now
            </button>
          </form>
        </div>

        <div id="listingDescription">{listing.Description}</div>
      </div>
    </>
  );
};

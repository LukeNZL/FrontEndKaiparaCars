import React, { createContext, useEffect, useState } from "react";
import { Product } from "./product";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Listing = () => {
  const { id } = useParams();
  //console.log("id", id);

  const [listing, setListing] = useState([]);
  const getListing = async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/" + id);
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
      <img src={image} alt="no image" />
      <div>{listing.Title}</div>
      <div>{listing.Description}</div>
      <div>{listing.Price}</div>
    </>
  );
};

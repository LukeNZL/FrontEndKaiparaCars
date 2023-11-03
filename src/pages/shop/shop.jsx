import React, { createContext, useEffect, useState } from "react";
import { Product } from "./product";
import "./shop.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { Categories } from "./categories";
import { Featured } from "./featured";
import logo from "../../assets/Logo.png";

export const Shop = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/");
    setProducts(response.data);
    let listingarr = [];
    for (let i = 0; i < response.data.length; i++) {
      listingarr.push(response.data[i]);
    }
    localStorage.setItem("Listing_List", JSON.stringify(listingarr));
  };

  useEffect(() => {
    getProducts();
  }, []);

  const [query, setQuery] = useState("");

  return (
    <div className="shop">
      <div className="searchBar">
        <input
          id="searchBarStyle"
          placeholder="Search our range of cars"
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      <div>
        <Categories />
      </div>
      <div className="featuredImageContainer">
        <img src={logo} alt="" />
      </div>
      <div className="shopTitle">Cars</div>

      <div className="products">
        {products
          .filter((product) => {
            if (query === "") {
              return product;
            } else if (
              product.Title.toLowerCase().includes(query.toLowerCase())
            ) {
              return product;
            }
          })
          .map((product, index) => (
            <Featured data={product} />
          ))}
      </div>
    </div>
  );
};

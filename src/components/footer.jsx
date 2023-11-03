import React, { createContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, UserCircle, ArrowUp } from "phosphor-react";
import logo from "../assets/Logo.png";
import { Shop } from "../pages/shop/shop";

import "./footer.css";
export const Footer = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div className="footer">
        <div className="footerLinks">
          <Link to="/">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
          </Link>
          <Link to="/">Account</Link>
          <Link to="/createlisting">Create a listing</Link>
          <Link to="/">Saved Listings</Link>
          <Link to="/">Categories</Link>
          <Link
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            to="/"
          >
            To top <ArrowUp />
          </Link>
        </div>
      </div>
    </>
  );
};

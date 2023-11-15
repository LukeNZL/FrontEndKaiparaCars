import React, { createContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, UserCircle } from "phosphor-react";
import logo from "../assets/Logo.png";
import { Shop } from "../pages/shop/shop";

import "./navbar.css";
export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbarLogo">
          <Link to="/">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
          </Link>
        </div>

        <div className="links">
          <link rel="stylesheet" href="" />
          <Link to="/account">
            <UserCircle size={32} />
          </Link>
          <Link to="/cart">
            <ShoppingCart size={32} />
          </Link>
        </div>
      </div>
    </>
  );
};

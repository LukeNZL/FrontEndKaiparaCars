import React from "react";
import { Link } from "react-router-dom";
import "./shop.css";

export const CreateListing = () => {
  return (
    <>
      <div class="new-listing-page">
        <div class="new-listing-form">
          <form class="new-listing-register-form">
            <input type="text" placeholder="field" id="inputStyle" name="" />
            <input type="text" placeholder="field" id="inputStyle" name="" />
            <input type="text" placeholder="field" id="inputStyle" name="" />

            <button id="inputStyle" type="submit" name="register">
              create listing
            </button>
            <p class="message">
              wrong button?
              <a href="#">
                <Link to={"/"}> Home</Link>
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

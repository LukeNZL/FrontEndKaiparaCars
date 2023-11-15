import React from "react";
import Sedan from "../../assets/sedan.jpg";
import SUV from "../../assets/suv.png";
import Ute from "../../assets/ute.jpg";
import Wagon from "../../assets/stationwagon.jpg";
import "./shop.css";
import { Link } from "react-router-dom";

export const Categories = () => {
  return (
    //class names not added to css yet
    <>
      <a id="carsListLink" href={"/"}></a>
      <div className="shopTitle">Body Styles</div>
      <div className="cat_container">
        <a id="carsListLink" href={"/"}>
          <div className="categories">
            <img src={Sedan} alt="no image" />
          </div>
        </a>

        <a id="carsListLink" href={"/"}>
          <div className="categories">
            <img src={SUV} alt="no image" />
          </div>
        </a>

        <a id="carsListLink" href={"/"}>
          <div className="categories">
            <img src={Ute} alt="no image" />
          </div>
        </a>

        <a id="carsListLink" href={"/"}>
          <div className="categories">
            <img src={Wagon} alt="no image" />
          </div>
        </a>
      </div>
    </>
  );
};

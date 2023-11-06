import React from "react";
import Sedan from "../../assets/sedan.jpg";
import SUV from "../../assets/suv.png";
import Ute from "../../assets/ute.jpg";
import Wagon from "../../assets/stationwagon.jpg";
import "./shop.css";

export const Categories = () => {
  return (
    //class names not added to css yet
    <>
      <div className="shopTitle">Body Styles</div>
      <div className="cat_container">
        <div className="categories">
          <img src={Sedan} alt="no image" />
        </div>
        <div className="categories">
          {" "}
          <img src={SUV} alt="no image" />
        </div>
        <div className="categories">
          {" "}
          <img src={Ute} alt="no image" />
        </div>
        <div className="categories">
          {" "}
          <img src={Wagon} alt="no image" />
        </div>
      </div>
    </>
  );
};

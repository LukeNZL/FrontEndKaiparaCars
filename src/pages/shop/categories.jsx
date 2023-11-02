import React from "react";
import Sedan from "../../assets/Sedan Icon.png";
import SUV from "../../assets/Station wagon icon.jpg";
import Ute from "../../assets/Ute icon.png";
import Wagon from "../../assets/suv icon.jpg";
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

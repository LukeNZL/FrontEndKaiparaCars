import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./shop.css";
import axios from "axios";

export const CreateListing = () => {
  //cloudinary widget
  var cloudinaryWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: "dhkzubsxd",
      uploadPreset: "bfjnm8yz",
    },
    function (error, result) {
      if (!error && result && result.event === "success") {
        console.log(result.info.secure_url);
        localStorage.setItem("CloudImage", result.info.secure_url);
      }
    }
  );
  //
  const [listingData, setListingData] = useState({
    //headers: {
    //  accept: "multipart/form-data",
    //},
    Title: "",
    Description: "",
    Price: 0,
    CloudImage: "",
  });

  const handleChange = (event) => {
    setListingData({
      ...listingData,
      [event.target.name]: event.target.value,
    });
  };

  function create(event) {
    event.preventDefault();
    listingData.CloudImage = localStorage.getItem("CloudImage");
    var path = listingData.CloudImage;
    var filename = path.replace("https://res.cloudinary.com/dhkzubsxd/", "");
    localStorage.removeItem("CloudImage");
    listingData.CloudImage = filename;
    console.log("data1", listingData);
    //console.log("data2", listingData.Title);
    try {
      //axios.post("http://127.0.0.1:8000/api/", listingData);
      axios.post(
        "http://kc-env-django.eba-fg2fphac.ap-southeast-2.elasticbeanstalk.com/api/",
        listingData
      );
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    const keyDownHandler = (event) => {
      //console.log("User pressed: ", event.key);

      if (event.key === "Enter") {
        event.preventDefault();

        // 👇️ call submit function here
        create();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <>
      <div className="new-listing-page">
        <div className="new-listing-form">
          <form
            className="new-listing-register-form"
            onSubmit={create}
            action="/"
          >
            <input
              type="text"
              placeholder="Title"
              id="inputStyle"
              onChange={handleChange}
              name="Title"
            />
            <input
              type="text"
              placeholder="Description"
              id="inputStyle"
              onChange={handleChange}
              name="Description"
            />
            <input
              type="text"
              placeholder="Asking Price"
              id="inputStyle"
              onChange={handleChange}
              name="Price"
            />

            <button
              id="inputStyle"
              type="button"
              name="CloudImage"
              onClick={(e) => {
                e.preventDefault();
                cloudinaryWidget.open();
              }}
            >
              Upload Image Here
            </button>
            <button id="inputStyle" type="submit" name="createListing">
              create listing
            </button>
            <p className="message">
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

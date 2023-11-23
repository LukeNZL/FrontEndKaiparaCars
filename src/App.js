import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useContext, createContext, useEffect, useState } from "react";

import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Shop } from "./pages/shop/shop";
import { CreateListing } from "./pages/shop/createlisting";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import { Listing } from "./pages/shop/listing";
import { Featured } from "./pages/shop/featured";
//import { Login } from "./pages/account/login";
//import { Register } from "./pages/account/register";
import { AccountPage } from "./pages/account/accountpage";
const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);
function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <>
      <div className="App">
        <Message message={message} />
        <ShopContextProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/cars" element={<Featured />} />

              <Route path="/cart" element={<Cart />} />
              <Route path="/listing/:id" element={<Listing />} />
              <Route path="/login" />
              <Route path="/register" />
              <Route path="/createlisting" element={<CreateListing />} />
              <Route path="/account" element={<AccountPage />} />
            </Routes>
            <Footer />
          </Router>
        </ShopContextProvider>
      </div>
    </>
  ) : (
    <>
      <div className="App">
        <ShopContextProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/cars" element={<Featured />} />

              <Route path="/cart" element={<Cart />} />
              <Route path="/listing/:id" element={<Listing />} />
              <Route path="/login" />
              <Route path="/register" />
              <Route path="/createlisting" element={<CreateListing />} />
              <Route path="/account" element={<AccountPage />} />
            </Routes>
            <Footer />
          </Router>
        </ShopContextProvider>
      </div>
    </>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Shop } from "./pages/shop/shop";
import { CreateListing } from "./pages/shop/createlisting";
import { Cart } from "./pages/cart/cart";
import { Listing } from "./pages/shop/listing";
import { Featured } from "./pages/shop/featured";
//import { Login } from "./pages/account/login";
//import { Register } from "./pages/account/register";
import { AccountPage } from "./pages/account/accountpage";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;

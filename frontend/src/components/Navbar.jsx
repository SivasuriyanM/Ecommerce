import React from "react";
import "../App.css";
import { UserChange } from "../Context/NavigationContext";
function Navbar() {
  const { setNav } = UserChange();
  return (
    <div className="nav-container">
      <button
        onClick={() => {
          setNav("home");
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          setNav("product");
        }}
      >
        Product
      </button>
      <button
        onClick={() => {
          setNav("cart");
        }}
      >
        Cart
      </button>
    </div>
  );
}

export default Navbar;

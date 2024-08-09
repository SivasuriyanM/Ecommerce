import React from "react";
import "../App.css";
import { UserChange } from "../Context/NavigationContext";

const ProductCard = ({ product }) => {
  const { setNav, setSearch, setCart } = UserChange();

  const handleClick = () => {
    setSearch(product.name);
    setNav("search");
  };
  const handleCart = () => {
    setCart(product);
    setNav("cart");
  };
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.specifications}</p>
      <h3>Price: ${product.price}</h3>
      <div className="btn-wrapper">
        <button onClick={handleClick}>Details</button>
        <button onClick={handleCart}>Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;

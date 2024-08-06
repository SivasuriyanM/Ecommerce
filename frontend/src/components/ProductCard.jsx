import React from "react";
import "../App.css";

const ProductCard = ({ product }) => {
  const handleClick = () => {
    alert(`Features
    ${product.features.map((feature, index) => feature)}
Testimonials:
    ${product.testimonials.map((testimonial, index) => testimonial)}
        `);
  };
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.specifications}</p>
      <h3>Price: ${product.price}</h3>
      <div className="btn-wrapper">
        <button onClick={handleClick}>Details</button>
        <button>Pre-order</button>
      </div>
    </div>
  );
};

export default ProductCard;

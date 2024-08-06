import React from "react";
import "../App.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.specifications}</p>
      <h3>Features:</h3>
      <ul>
        {product.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <h3>Testimonials:</h3>
      <ul>
        {product.testimonials.map((testimonial, index) => (
          <li key={index}>{testimonial}</li>
        ))}
      </ul>
      <h3>Price: ${product.price}</h3>
      <button>Pre-order</button>
    </div>
  );
};

export default ProductCard;

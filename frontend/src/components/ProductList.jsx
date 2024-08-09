import React from "react";

import { UserChange } from "../Context/NavigationContext";

import ProductCard from "./ProductCard";

const ProductList = () => {
  const { products } = UserChange();

  return (
    <>
      <h1>Electronics & accessories</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;

import React from "react";
import Hero from "../components/sections/Hero";
import ProductList from "../features/products/ProductList";
import { heroimages } from "../assets/assets"; // Assuming you have an array of
const Men = () => {
  return (
    <div>
      <Hero images={heroimages} />
      <ProductList />
    </div>
  );
};

export default Men;

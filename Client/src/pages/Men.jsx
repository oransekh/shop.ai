import React from "react";
import Hero from "../components/sections/Hero";
import ProductList from "../features/products/ProductList";
import { heroimages } from "../assets/assets";
import Mostwantedproducts from "../components/sections/Mostwantedproducts";
const Men = () => {
  return (
    <main>
      <Hero images={heroimages} />
      <ProductList />
      <Mostwantedproducts />
    </main>
  );
};

export default Men;

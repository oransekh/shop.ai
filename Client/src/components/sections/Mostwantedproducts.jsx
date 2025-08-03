import React from "react";
import CatagoryCard from "../common/CatagoryCard";
import { mensCategories } from "../../assets/assets";
const Mostwantedproducts = () => {
  return (
    <section className="pb-16 mx-auto">
      <div className="text-center py-5">
        {/* heading */}
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold tracking-wider text-gray-700">
          Most Wanted Categories
        </h1>

        {/*  Divider */}
        <div className="w-24 h-1 bg-purple-500 mx-auto rounded mt-2"></div>
      </div>

      {/* listing categories */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 px-4">
        {mensCategories.map((category, index) => (
          <CatagoryCard key={index} category={category} />
        ))}
      </div>
    </section>
  );
};

export default Mostwantedproducts;

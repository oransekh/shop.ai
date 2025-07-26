import React from "react";
import { products } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const navigate = useNavigate();
  return (
    <section className="mx-auto py-16">
      {/* heading */}
      <div className="text-center py-5">
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold tracking-wider text-gray-700">
          New Arrivals
        </h1>

        {/*  Divider */}
        <div className="w-24 h-1 bg-purple-500 mx-auto rounded mt-2"></div>
      </div>

      {/*listing products*/}
      <div className="mx-auto max-w-7xl grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-6 px-4">
        {products.slice(0, 4).map((product) => (
          <div
            className="cursor-pointer shadow-lg rounded-sm text-center p-5"
            key={product.slug}
            onClick={() => navigate(`/products/${product.slug}`)}
          >
            <img src={product.img} alt={product.name || "t - shirt"} />
            <h1 className="text-xl">{product.name}</h1>
            <p>Rs {product.price}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center pt-15">
        <button className="text-lg font-medium text-white bg-purple-500 px-5 py-2 rounded-lg shadow-md hover:bg-purple-600 hover:shadow-lg transition-all duration-200">
          View More
        </button>
      </div>
    </section>
  );
};

export default ProductList;

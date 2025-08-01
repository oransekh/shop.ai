import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { rawProducts } from "../../assets/assets";
import { useDispatch, useSelector } from "react-redux";
import {
  initializeQuantities,
  increaseQuantity,
  decreaseQuantity,
} from "../../store/productSlice";

const Products = () => {
  const { id } = useParams();
  const product = rawProducts.find((p) => p.id === id);

  const dispatch = useDispatch();
  const quantities = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(initializeQuantities(rawProducts));
    window.scrollTo(0, 0);
  }, [dispatch]);

  if (!product) {
    return (
      <div className="text-center py-20 text-2xl text-gray-500">
        Product not found.
      </div>
    );
  }
  console.log(quantities);
  return (
    <section className=" min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 rounded-3xl  overflow-hidden p-6 md:p-10">
        {/* Left: Product Image */}
        <div className="flex items-center justify-centerp-6">
          <img
            src={product.img}
            alt={product.name}
            className="object-contain h-96 w-auto"
          />
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold text-gray-800">
              {product.name}
            </h1>
            <p className="text-xl text-gray-600">MRP ₹{product.price}</p>
            <p className="text-gray-500">
              <strong>Category:</strong> {product.category}
            </p>
            <p className="text-gray-600">
              {product.description || "No description available."}
            </p>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4">
            <span className="text-gray-700 font-medium">Quantity:</span>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white">
              <button
                onClick={() => dispatch(decreaseQuantity(product.id))}
                disabled={!quantities[product.id] || quantities[product.id].quantity <= 1} // Added fallback check
                className={`px-4 py-1 text-lg ${
                  !quantities[product.id] || quantities[product.id].quantity <= 1
                    ? "text-gray-400 "
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                −
              </button>

              <span className="px-4 py-1 text-lg font-medium">
                {quantities[product.id]?.quantity || 1} {/* Added optional chaining */}
              </span>

              <button
                onClick={() => dispatch(increaseQuantity(product.id))}
                disabled={!quantities[product.id] || quantities[product.id].quantity >= 5} // Added fallback check
                className={`px-4 py-1 text-lg ${
                  !quantities[product.id] || quantities[product.id].quantity >= 5
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

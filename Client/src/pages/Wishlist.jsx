import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../store/wishlistSlice";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <section>
      <div className="mx-auto max-w-7xl py-16 px-4 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
        {wishlist.length === 0 ? (
          <div className="col-span-4 text-center h-[70vh] flex items-center justify-center">
            <p className="text-gray-500 text-2xl">Your wishlist is empty</p>
          </div>
        ) : (
          wishlist.map((item) => (
            <div
            onClick={() => navigate(`/products/${item.id}`)}
              key={item.id}
              className="relative p-1 justify-center flex flex-col items-center rounded-lg shadow-md"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-48 object-contain mb-4"
              />
              <h2 className="font-bold">{item.name}</h2>
              <p className="text-gray-600">${item.price}</p>
              <button
                className="absolute top-2 right-2 bg-white rounded-full p-1 hover:bg-gray-200 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(removeFromWishlist(item.id));
                }}
              >
                <X className="w-4 h-4" />
              </button>

              <button
                className="  text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  // Add logic to move item to cart
                }}
              >
                Move to Cart
              </button>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Wishlist;

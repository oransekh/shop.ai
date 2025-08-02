import React from "react";
import { rawProducts } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../../store/wishlistSlice";
import ProductsCard from "../../components/common/proudctsCard";
const ProductList = () => {
  const navigate = useNavigate();
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  // check products already in wishlist
  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  // handle wishlist toggles
  const handleWishlistToggle = (product) => {
    if (isInWishlist(product.id)) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  // FILTER ONLY MENS PRODUCTS
  const filterMens = rawProducts.filter(
    (products) => products.category === "men"
  );

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
        {filterMens.slice(0, 4).map((product) => (
          // product card
          <ProductsCard
            key={product.id}
            product={product}
            isInWishlist={isInWishlist(product.id)}
            // onClick handler to navigate to product details
            onWishlistToggle={(e) => {
              e.stopPropagation();
              handleWishlistToggle(product);
            }}
          />
        ))}
      </div>

      {/* view more button */}
      <div className="flex justify-center pt-15">
        <button
          onClick={() => navigate(`/product/men`)}
          className="text-lg font-medium text-white bg-purple-500 px-5 py-2 rounded-lg shadow-md hover:bg-purple-600 hover:shadow-lg transition-all duration-200"
        >
          View More
        </button>
      </div>
    </section>
  );
};

export default ProductList;

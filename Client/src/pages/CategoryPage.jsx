import React from "react";
import { rawProducts } from "../assets/assets";
import { useParams } from "react-router-dom";
import ProductsCard from "../components/common/proudctsCard";
import { useSelector, useDispatch } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../store/wishlistSlice";

const CategoryPage = () => {
  const { category } = useParams();
  const filteredProducts = rawProducts.filter(
    (product) => product.category === category
  );
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);

  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  const handleWishlistToggle = (product) => {
    if (isInWishlist(product.id)) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  return (
    <section className="mx-auto py-16">
        
      {/*listing products*/}
      <div className="mx-auto max-w-7xl grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-6 px-4">
        {filteredProducts.map((product) => (
          <ProductsCard
            key={product.id}
            product={product}
            isInWishlist={isInWishlist(product.id)}
            onWishlistToggle={(e) => {
              e.stopPropagation();
              handleWishlistToggle(product);
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default CategoryPage;

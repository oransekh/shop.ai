import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
const ProductsCard = ({ product, isInWishlist, onWishlistToggle }) => {
    // onClick handler to navigate to product details
    const Navigate = useNavigate();
  return (
    <div onClick={() => Navigate(`/products/${product.id}`)}
     className="relative rounded-lg p-4 shadow hover:scale-105 transition-transform duration-200  group">
      <Heart
        fill={isInWishlist ? "currentColor" : "none"}
        className={`absolute top-2 right-2 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
          isInWishlist ? "text-red-500" : "text-gray-300"
        }`}
        onClick={onWishlistToggle}
      />
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-48 object-contain"
      />
      <h2 className="mt-2 font-bold text-lg">{product.name}</h2>
      <p className="text-gray-500">₹{product.price}</p>
      <p
        className={`text-sm ${
          product.inStock ? "text-green-600" : "text-red-600"
        }`}
      >
        {product.inStock ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
};

export default ProductsCard;

import React from "react";
import { Search } from "lucide-react";
import { useState } from "react";
import { rawProducts } from "../../assets/assets";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of Navigate

const Searchbar = () => {
  const [query, setQuery] = useState("");

  const results = rawProducts.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  const navigate = useNavigate(); // Correctly use the useNavigate hook

  return (
    <div className="relative hidden md:block">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        autoComplete="off"
        className="p-2 pr-10 bg-white rounded-full shadow focus:outline-none focus:ring-2 focus:ring-purple-300 transition duration-300"
        type="text"
        placeholder="Search products..."
      />
      <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-purple-700 cursor-pointer" />

      {query && (
        <div className="absolute left-5 top-12 z-100 bg-white w-100 shadow-sm rounded-lg overflow-hidden">
          <h4 className="p-4 border-b text-gray-700">Search Results</h4>
          <div className="overflow-y-auto h-72 p-2">
            {results.length > 0 ? (
              results.map((product) => (
                <div
                  onClick={() => navigate(`/products/${product.id}`)} // Use navigate for programmatic navigation
                  key={product.id}
                  className="p-2 border-b border-gray-200 flex"
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-md mb-2"
                  />
                  <h5 className="font-semibold">{product.name}</h5>
                </div>
              ))
            ) : (
              <div className="p-2 text-gray-600">No results found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Searchbar;

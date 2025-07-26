import React from "react";
import { Search } from "lucide-react";
const Searchbar = () => {
  return (
    <div className="relative hidden md:block">
      <input
        className="p-2 pr-10 bg-white rounded-full shadow focus:outline-none focus:ring-2 focus:ring-purple-300 transition duration-300"
        type="text"
        placeholder="Search products..."
      />
      <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-purple-700 cursor-pointer" />
    </div>
  );
};

export default Searchbar;

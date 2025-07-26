import React, { useEffect, useState } from "react";
import { Menu, X, Search, ShoppingCart, Heart, User } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import Register from "../../features/auth/Register";
import Searchbar from "../common/Searchbar";
const Navbar = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const [user, setUser] = useState(false);

  //  Disable scroll when modal is open
  useEffect(() => {
    if (user) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup on unmount (optional safety)
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [user]); // runs whenever user changes

  return (
    <nav className="relative w-full min-w-xs  shadow-lg bg-gradient-to-r from-purple-100 via-pink-50 to-white">
      <div className="flex justify-between items-center px-5 sm:px-10 py-4">
        {/* Logo */}
        <h2
          onClick={() => navigate("/men")}
          className="text-2xl font-bold text-purple-700 cursor-pointer"
        >
          Shop.ai
        </h2>

        {/* Desktop Nav Items */}
        <ul className="hidden lg:flex gap-x-8 text-lg font-medium cursor-pointer">
          {["men", "women", "kids", "sale"].map((item) => (
            <NavLink
              key={item}
              to={`/${item}`}
              className={({ isActive }) =>
                isActive
                  ? "text-purple-700 font-semibold"
                  : "text-gray-600 hover:text-purple-700 transition"
              }
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </NavLink>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-x-6">
          {/* Search Bar (Desktop only) */}
          <Searchbar />

          {/* Icons Section */}
          <div className="flex items-center gap-x-4">
            <button
              onClick={() => navigate("/wishlist")}
              className="relative p-2 hover:text-purple-700 transition"
            >
              <Heart className="h-6 w-6 text-gray-600 hover:text-purple-700" />
            </button>

            <button
              onClick={() => navigate("/cart")}
              className="relative p-2 hover:text-purple-700 transition"
            >
              <ShoppingCart />
              <span className="absolute -top-1 -right-1 bg-purple-700 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                2
              </span>
            </button>

            {/*  Toggle Register Modal */}
            <button
              onClick={() => setUser((prev) => !prev)}
              className="p-2 hover:text-purple-700 transition"
            >
              <User className="h-6 w-6 text-gray-600 hover:text-purple-700" />
            </button>
          </div>

          {/*  Modal + Backdrop */}
          {user && (
            <>
              {/* Modal Backdrop */}
              <div
                className="fixed inset-0 bg-black/40 z-30"
                onClick={() => setUser(false)}
              />

              {/* Centered Register Component */}
              <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                <Register setUser={setUser} />
              </div>
            </>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenu((prev) => !prev)}
            className="lg:hidden p-2 rounded-md hover:bg-purple-100 transition"
          >
            {menu ? (
              <X className="h-6 w-6 text-purple-700" />
            ) : (
              <Menu className="h-6 w-6 text-purple-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menu && (
        <div className="lg:hidden flex flex-col items-center gap-y-4 py-4 bg-white shadow-md transform transition-all duration-500 ease-in-out ">
          <ul className="flex flex-col gap-y-3 text-gray-700 font-medium">
            {["men", "women", "kids", "sale"].map((item) => (
              <NavLink
                key={item}
                to={`/${item}`}
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-700 font-semibold"
                    : "text-gray-600 hover:text-purple-700 transition"
                }
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </NavLink>
            ))}
          </ul>

          {/* Mobile Auth Buttons */}
          <div className="flex gap-x-4 mt-4">
            <button className="px-4 py-2 text-purple-700 border border-purple-300 rounded-full hover:bg-purple-50 transition">
              Sign In
            </button>
            <button className="px-4 py-2 bg-purple-700 text-white rounded-full hover:bg-purple-800 transition">
              Sign Up
            </button>
          </div>

          {/* Mobile Search */}
          <div className="relative mt-4 w-[80%]">
            <input
              className="w-full p-2 pl-4 pr-10 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
              type="text"
              placeholder="Search products..."
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-purple-700"
            >
              <Search size={20} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

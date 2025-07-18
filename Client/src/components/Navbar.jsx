import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full h-18 shadow-lg flex justify-between items-center px-5 sm:px-15 md:px-15 lg:px-15 2xl:px-15">
      {/* logo */}
      <div>
        <h2 className="text-xl font-bold">Shop.ai</h2>
      </div>

      {/* nav-items */}

      <ul className="flex gap-x-5">
        <li className="text-sm">home</li>
        <li className="text-sm">about</li>
        <li className="text-sm">service</li>
        <li className="text-sm">contact</li>
      </ul>

      {/*login and signup*/}
      <div className="flex gap-x-5">
        <button>Login</button>
        <button>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";

export const Navbar = ({ setIsCartOpen }) => {
  return (
    <div className="w-full h-20 px-6 md:px-10 flex items-center justify-between bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm fixed top-0 left-0 z-50">
      {/* Logo */}
      <div className="text-2xl font-extrabold tracking-wide text-blue-500 cursor-pointer">
        ShopAura
      </div>

      {/* Menu */}
      <div className="hidden md:flex items-center gap-10 text-lg font-semibold text-gray-700">
        <p 
          className="cursor-pointer hover:text-blue-500 transition-colors"
          onClick={() => setIsCartOpen(false)}
        >
          Home
        </p>

        <p 
          className="cursor-pointer hover:text-blue-500 transition-colors"
          onClick={() => setIsCartOpen(true)}
        >
          Cart
        </p>
      </div>

      {/* Login Button */}
      <button className="px-6 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-bold cursor-pointer transition-all duration-200 shadow-md hover:shadow-lg">
        Login
      </button>
    </div>
  );
};

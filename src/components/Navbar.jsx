import React from "react";

export const Navbar = ({ setIsCartOpen }) => {
  return (
    <div className="w-full fixed top-0 left-0 z-50 px-4 md:px-8 pt-4 bg-[#f8fafc]/80 backdrop-blur-md">
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm px-6 md:px-10 py-4 flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div 
          className="text-2xl font-extrabold tracking-tight text-gray-900 cursor-pointer"
          onClick={() => setIsCartOpen(false)}
        >
          Ecommerc <span className="text-blue-600">Store</span>
        </div>

        {/* Menu & Action Button */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-6 text-sm font-semibold text-gray-500 mr-2">
            <p 
              className="cursor-pointer hover:text-blue-600 transition-colors"
              onClick={() => setIsCartOpen(false)}
            >
              Home
            </p>

            <p 
              className="cursor-pointer hover:text-blue-600 transition-colors"
              onClick={() => setIsCartOpen(true)}
            >
              Cart
            </p>
          </div>

          <button 
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold cursor-pointer transition-all duration-200 shadow-sm text-sm"
            onClick={() => setIsCartOpen(false)}
          >
            <span className="text-lg font-light leading-none">+</span> Create Product
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from "react";

export const ProductCard = ({ productData, setCartItem }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = productData.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] pt-32 px-4 md:px-8 pb-10">
      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Products
        </h1>
        <p className="text-gray-500 mt-1 text-sm">
          Manage your store products
        </p>
      </div>

      {/* Search Section */}
      <div className="max-w-7xl mx-auto bg-white border border-gray-100 rounded-2xl shadow-sm p-4 mb-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <svg 
              className="h-5 w-5 text-gray-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none"
          />
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
          >
            {/* Image Wrapper */}
            <div className="p-4 pb-2">
              <div className="relative aspect-square w-full bg-[#f4f5f6] rounded-xl flex items-center justify-center p-6 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain mix-blend-multiply"
                />
              </div>
            </div>

            {/* Content & Actions */}
            <div className="flex-1 flex flex-col justify-between">
              {/* Product Info */}
              <div className="px-5 pb-5 pt-2">
                {/* Category */}
                <p className="text-xs font-semibold text-blue-600 capitalize mb-1">
                  {product.category}
                </p>

                {/* Title */}
                <h2 className="text-base font-bold text-gray-900 line-clamp-1 mb-2">
                  {product.title}
                </h2>

                {/* Price */}
                <p className="text-lg font-extrabold text-gray-900">
                  ₹{product.price.toLocaleString("en-IN")}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 border-t border-gray-100 text-center divide-x divide-gray-100">
                <button className="py-3.5 text-sm font-semibold text-blue-600 hover:bg-gray-50 transition-colors cursor-pointer">
                  Edit
                </button>
                <button 
                  className="py-3.5 text-sm font-semibold text-red-500 hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => setCartItem((prev) => [...prev, product])}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer count */}
      <div className="max-w-7xl mx-auto mt-8 text-sm text-gray-400">
        Showing {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
      </div>
    </div>
  );
};

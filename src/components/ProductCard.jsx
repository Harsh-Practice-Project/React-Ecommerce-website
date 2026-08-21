import React from "react";

export const ProductCard = ({ productData, setCartItem }) => {
  return (
    <div className="min-h-screen bg-gray-100 pt-28 px-6 pb-10 md:px-10">
      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Explore Products
        </h1>

        <p className="text-gray-500 mt-2">Discover our latest collection</p>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {productData.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            {/* Image Section */}
            <div className="relative h-64 bg-gray-50 overflow-hidden">
              {/* Category Badge */}
              <span className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-sm text-blue-600 px-3 py-1.5 rounded-full text-xs font-bold capitalize shadow-sm border border-blue-100">
                {product.category}
              </span>

              {/* Wishlist */}
              <button className="absolute top-4 right-4 z-10 w-9 h-9 bg-white/95 backdrop-blur-sm rounded-full shadow-sm flex items-center justify-center text-gray-500 hover:text-red-500 hover:scale-105 cursor-pointer transition-all duration-200">
                ♥
              </button>

              {/* Image Wrapper */}
              <div className="w-full h-full flex items-center justify-center p-8">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              {/* Rating */}
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-green-500 text-white px-2 py-1 rounded-md text-sm font-bold">
                  ★ {product.rating.rate}
                </span>

                <span className="text-sm text-gray-500">
                  {product.rating.count} Reviews
                </span>
              </div>

              {/* Title */}
              <h2 className="text-lg font-bold text-gray-800 line-clamp-2 min-h-14">
                {product.title}
              </h2>

              {/* Description */}
              <p className="text-sm text-gray-500 mt-3 line-clamp-2">
                {product.description}
              </p>

              {/* Price */}
              <div className="flex items-center justify-between mt-5">
                <p className="text-2xl font-extrabold text-gray-900">
                  ${product.price}
                </p>

                <span className="text-xs text-green-600 font-semibold">
                  In Stock
                </span>
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-5">
                <button className="border-2 border-blue-500 text-blue-500 py-2.5 rounded-xl font-bold hover:bg-blue-50 cursor-pointer transition">
                  View
                </button>

                <button 
                  className="bg-blue-500 text-white py-2.5 rounded-xl font-bold hover:bg-blue-600 cursor-pointer transition"
                  onClick={() => setCartItem(prev => [...prev, product])}  
                >
                  Add Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

import React from "react";

export const Cart = ({ cartItem }) => {
  const totalPrice = cartItem.reduce((total, item) => total + item.price, 0);

  return (
    <div className="min-h-screen bg-[#f8fafc] pt-32 px-4 md:px-8 pb-10">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Shopping Cart
        </h1>
        <p className="text-gray-500 mt-1 text-sm">
          {cartItem.length} {cartItem.length === 1 ? "Product" : "Products"} in your cart
        </p>
      </div>

      {/* Cart Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItem.length === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center text-gray-500 shadow-sm">
              Your cart is empty.
            </div>
          ) : (
            cartItem.map((product, index) => (
              <div
                key={`${product.id}-${index}`}
                className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm flex flex-col sm:flex-row gap-5 items-center justify-between"
              >
                {/* Product Info Left */}
                <div className="flex flex-col sm:flex-row gap-5 items-center w-full">
                  {/* Image */}
                  <div className="w-24 h-24 bg-[#f4f5f6] rounded-xl flex items-center justify-center p-3 shrink-0 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="max-h-full max-w-full object-contain mix-blend-multiply"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 w-full text-center sm:text-left">
                    <p className="text-xs text-blue-600 font-semibold uppercase mb-1">
                      {product.category}
                    </p>

                    <h2 className="text-base font-bold text-gray-900 line-clamp-1">
                      {product.title}
                    </h2>

                    {product.rating && (
                      <div className="flex items-center justify-center sm:justify-start gap-2 mt-2">
                        <span className="bg-emerald-500 text-white px-1.5 py-0.5 rounded text-xs font-bold flex items-center gap-0.5">
                          ★ {product.rating.rate}
                        </span>

                        <span className="text-xs text-gray-400">
                          ({product.rating.count} Reviews)
                        </span>
                      </div>
                    )}

                    <p className="text-lg font-extrabold text-gray-900 mt-2">
                      ₹{product.price.toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>

                {/* Remove Button */}
                <div className="shrink-0">
                  <button className="text-red-500 font-semibold hover:text-red-600 transition-colors text-sm cursor-pointer py-2 px-4 rounded-lg hover:bg-red-50">
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Summary */}
        <div className="h-fit bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-6 border-b border-gray-100 pb-3">
            Order Summary
          </h2>

          <div className="flex justify-between text-sm text-gray-500 mb-4">
            <span>Subtotal</span>
            <span className="font-semibold text-gray-900">
              ₹{totalPrice.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
            </span>
          </div>

          <div className="flex justify-between text-sm text-gray-500 mb-4 pb-4 border-b border-gray-100">
            <span>Shipping</span>
            <span className="font-semibold text-emerald-600">Free</span>
          </div>

          <div className="flex justify-between text-base font-bold text-gray-900">
            <span>Total</span>
            <span>
              ₹{totalPrice.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
            </span>
          </div>

          <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-bold transition duration-200 cursor-pointer shadow-sm text-sm">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

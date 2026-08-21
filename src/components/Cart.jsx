import React from "react";

export const Cart = ({ cartItem }) => {
  const totalPrice = cartItem.reduce((total, item) => total + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100 pt-28 px-6 pb-10 md:px-10">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Shopping Cart
        </h1>

        <p className="text-gray-500 mt-2">
          {cartItem.length} {cartItem.length === 1 ? "Product" : "Products"} in
          your cart
        </p>
      </div>

      {/* Cart Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItem.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm flex flex-col sm:flex-row gap-5"
            >
              {/* Image */}
              <div className="w-full sm:w-32 h-32 bg-gray-50 rounded-xl flex items-center justify-center p-4 shrink-0">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Product Details */}
              <div className="flex-1">
                <p className="text-xs text-blue-500 font-semibold uppercase mb-2">
                  {product.category}
                </p>

                <h2 className="text-lg font-bold text-gray-800 line-clamp-2">
                  {product.title}
                </h2>

                <div className="flex items-center gap-2 mt-3">
                  <span className="bg-green-500 text-white px-2 py-1 rounded-md text-sm font-bold">
                    ★ {product.rating.rate}
                  </span>

                  <span className="text-sm text-gray-500">
                    {product.rating.count} Reviews
                  </span>
                </div>

                <p className="text-2xl font-extrabold text-gray-900 mt-3">
                  ${product.price}
                </p>
              </div>

              {/* Remove Button */}
              <div className="flex items-center">
                <button className="text-red-500 font-semibold hover:text-red-700">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="h-fit bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Order Summary
          </h2>

          <div className="flex justify-between text-gray-600 mb-4">
            <span>Subtotal</span>

            <span className="font-semibold text-gray-900">
              ${totalPrice.toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between text-gray-600 mb-4">
            <span>Shipping</span>

            <span className="font-semibold text-green-600">Free</span>
          </div>

          <div className="border-t pt-4 flex justify-between text-lg font-bold">
            <span>Total</span>

            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <button className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-bold transition cursor-pointer">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

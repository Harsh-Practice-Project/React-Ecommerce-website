import React, { useState } from "react";
import { ProductCard } from "./components/ProductCard";
import { Navbar } from "./components/Navbar";
import { productData } from "./data/productData";
import { Cart } from "./components/Cart";

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [cartItem, setCartItem] = useState([]);

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <Navbar setIsCartOpen={setIsCartOpen} />

      {isCartOpen ? (
        <div>
          <Cart cartItem={cartItem} />
        </div>
      ) : (
        <div>
          <ProductCard productData={productData} setCartItem={setCartItem} />
        </div>
      )}
    </div>
  );
};

export default App;

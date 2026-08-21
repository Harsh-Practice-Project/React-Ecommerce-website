import React, { useState } from "react";
import { ProductCard } from "./components/ProductCard";
import { Navbar } from "./components/Navbar";
import { productData } from "./data/productData";
import { Cart } from "./components/Cart";

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [cartItem, setCartItem] = useState([]);

  return (
    <div className="h-screen p-4 flex flex-col gap-4">
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


import { createContext, useContext, useEffect, useState } from "react";

const ShopContext = createContext();

export function ShopProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("amazon-cart")) || [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("amazon-wishlist")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("amazon-cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("amazon-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  function addToCart(product) {
    setCart((oldCart) => {
      const found = oldCart.find((item) => item.id === product.id);

      if (found) {
        return oldCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...oldCart, { ...product, quantity: 1 }];
    });
  }

  function removeFromCart(id) {
    setCart((oldCart) => oldCart.filter((item) => item.id !== id));
  }

  function updateQuantity(id, quantity) {
    if (quantity < 1) return;

    setCart((oldCart) =>
      oldCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  }

  function toggleWishlist(product) {
    setWishlist((oldWishlist) => {
      const exists = oldWishlist.some((item) => item.id === product.id);

      return exists
        ? oldWishlist.filter((item) => item.id !== product.id)
        : [...oldWishlist, product];
    });
  }

  function isWishlisted(id) {
    return wishlist.some((item) => item.id === id);
  }

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <ShopContext.Provider
      value={{
        cart,
        wishlist,
        cartCount,
        cartTotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleWishlist,
        isWishlisted,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  return useContext(ShopContext);
}

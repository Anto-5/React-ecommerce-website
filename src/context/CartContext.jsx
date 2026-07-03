import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {

    const existing = cart.find(item => item.id === product.id);

    if (existing) {

      setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );

    } else {

      setCart([
        ...cart,
        {
          ...product,
          quantity: 1
        }
      ]);

    }

  };

  return (

    <CartContext.Provider
      value={{
        cart,
        addToCart,
        setCart
      }}
    >

      {children}

    </CartContext.Provider>

  );

}

export default CartProvider;
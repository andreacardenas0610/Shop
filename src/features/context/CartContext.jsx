import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Agregar producto al carrito
  const addToCart = (product) => {
    // Puedes permitir duplicados o evitar repetidos (ejemplo permite repetidos)
    setCart((prev) => [...prev, product]);
  };

  // Eliminar producto por nombre (el primero que coincida)
  const removeFromCart = (productName) => {
    setCart((prev) => prev.filter((p, i) => p.name !== productName || i !== prev.findIndex(item => item.name === productName)));
  };

  // Vaciar carrito
  const clearCart = () => setCart([]);

  // Calcular total sumando precios (parseando strings)
  const total = cart.reduce((acc, item) => {
    // Suponiendo que price es string tipo "$18.000.000 COP"
    // Primero, limpiar el string para quedarnos solo con números y puntos
    const numericString = item.price.replace(/[^0-9.]/g, "").replace(/\./g, "");
    // Convertir a número
    const priceNumber = parseFloat(numericString);
    return acc + (isNaN(priceNumber) ? 0 : priceNumber);
  }, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
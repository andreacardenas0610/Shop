import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {

  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (product) => {

    const exists = favorites.find(
      (item) => item.name === product.name
    );

    if (exists) {
      setFavorites(
        favorites.filter((item) => item.name !== product.name)
      );
    } else {
      setFavorites([...favorites, product]);
    }

  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => useContext(FavoritesContext);
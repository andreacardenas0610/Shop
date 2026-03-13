import { HashRouter, Routes, Route } from "react-router-dom";

import { CartProvider } from "./features/context/CartContext";
import { FavoritesProvider } from "./features/context/FavoritesContext";

import Navbar from "./features/components/Navbar";
import Footer from "./features/components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Offers from "./pages/Offers";
import Favorites from "./pages/Favorites";
import Account from "./pages/Account";
import Cart from "./pages/Cart";

function App() {
  return (
    <CartProvider>
      <FavoritesProvider>
        <HashRouter>

          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/account" element={<Account />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>

          <Footer />

        </HashRouter>
      </FavoritesProvider>
    </CartProvider>
  );
}

export default App;
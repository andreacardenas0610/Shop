import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CartProvider } from "./features/context/CartContext";
import { FavoritesProvider } from "./features/context/FavoritesContext"

/* 🎀 Tema personalizado NailBeauty */
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#d81b60", // rosa fuerte elegante
    },
    secondary: {
      main: "#f8bbd0", // rosa claro
    },
    background: {
      default: "#fff5f8", // fondo suave rosado
    },
  },
  typography: {
    fontFamily: "Poppins, Roboto, sans-serif",
    h2: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <CartProvider>
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </CartProvider>
  </ThemeProvider>
);

import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  InputBase
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import SpaIcon from "@mui/icons-material/Spa";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

import { Link } from "react-router-dom";

import { useFavorites } from "../context/FavoritesContext";
import { useCart } from "../context/CartContext";

function Navbar() {

  const [open, setOpen] = useState(false);

  const { favorites } = useFavorites();
  const { cart } = useCart();

  const menuItems = [
    { text: "Inicio", icon: <HomeIcon />, path: "/" },
    { text: "Artículos", icon: <StoreIcon />, path: "/products" },
    { text: "Ofertas", icon: <LocalOfferIcon />, path: "/offers" },
    { text: "Cuenta", icon: <PersonIcon />, path: "/account" },
  ];

  return (
    <AppBar position="sticky" sx={{ bgcolor: "#f0aec6" }}>
      <Toolbar>

        {/* MENU MOVIL */}
        <IconButton
          color="inherit"
          onClick={() => setOpen(true)}
          sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
        >
          <MenuIcon />
        </IconButton>

        {/* LOGO */}
        <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
          <SpaIcon sx={{ mr: 1 }} />
          <Typography variant="h6" fontWeight="bold">
            NailBeauty
          </Typography>
        </Box>

        {/* BUSCADOR */}
        <Paper
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            px: 2,
            py: 0.5,
            width: 250,
            borderRadius: 5
          }}
        >
          <SearchIcon sx={{ mr: 1, color: "gray" }} />
          <InputBase placeholder="Buscar productos..." sx={{ flex: 1 }} />
        </Paper>

        {/* MENU ESCRITORIO */}
        <Box sx={{ display: { xs: "none", md: "flex" }, ml: 3, gap: 1 }}>
          {menuItems.map((item) => (
            <Button
              key={item.text}
              component={Link}
              to={item.path}
              color="inherit"
              startIcon={item.icon}
            >
              {item.text}
            </Button>
          ))}
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        {/* FAVORITOS */}
        <IconButton component={Link} to="/Favorites" color="inherit">
          <Badge badgeContent={favorites.length} color="error">
            <FavoriteIcon />
          </Badge>
        </IconButton>

        {/* CARRITO */}
        <IconButton component={Link} to="/Cart" color="inherit">
          <Badge badgeContent={cart.length} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>

      </Toolbar>

      {/* MENU MOVIL (DRAWER) */}
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box sx={{ width: 250 }}>

          <Typography
            variant="h6"
            sx={{
              p: 2,
              fontWeight: "bold",
              borderBottom: "1px solid #eee"
            }}
          >
            NailBeauty
          </Typography>

          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={() => setOpen(false)}
                >
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>

                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

        </Box>
      </Drawer>

    </AppBar>
  );
}

export default Navbar;
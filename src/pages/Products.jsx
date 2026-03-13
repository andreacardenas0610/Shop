import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  IconButton,
  Box
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { useCart } from "../features/context/CartContext";
import { useFavorites } from "../features/context/FavoritesContext";
import { useState } from "react";

function Products() {

  const { addToCart } = useCart();
  const { favorites, toggleFavorite } = useFavorites();

  const [addedProduct, setAddedProduct] = useState(null);

  const products = [
    { id: 1, name: "Kit Esmaltes Gel", description: "12 colores profesionales", price: "$120.000 COP", image: "/img/kit.png" },
    { id: 2, name: "Lámpara UV LED", description: "Secado rápido profesional", price: "$180.000 COP", image: "/img/lam.png" },
    { id: 3, name: "Lima Profesional", description: "Alta durabilidad", price: "$15.000 COP", image: "/img/lima.jpg" },
    { id: 4, name: "Top Coat Brillante", description: "Acabado espejo", price: "$35.000 COP", image: "/img/top.jpg" },
    { id: 5, name: "Base Coat", description: "Protección y adherencia", price: "$40.000 COP", image: "/img/base.png" },
    { id: 6, name: "Removedor Gel", description: "Elimina esmalte fácilmente", price: "$18.000 COP", image: "/img/removedor.jpg" },
    { id: 7, name: "Acrílico Profesional", description: "Polvo acrílico de alta resistencia", price: "$55.000 COP", image: "/img/acrilico.jpg" },
    { id: 8, name: "Monómero Profesional", description: "Secado rápido y máxima adherencia", price: "$48.000 COP", image: "/img/monomero.jpg" },
    { id: 9, name: "Pincel Acrílico #8", description: "Cerdas naturales de precisión", price: "$32.000 COP", image: "/img/pincel.png" },
    { id: 10, name: "Decoraciones Nail Art", description: "Stickers, piedras y accesorios", price: "$20.000 COP", image: "/img/decoracion.png" },
    { id: 11, name: "Poligel Profesional", description: "Resistente y fácil de moldear", price: "$65.000 COP", image: "/img/polgel.png" },
    { id: 12, name: "Brocas para Torno", description: "Set profesional de 6 piezas", price: "$45.000 COP", image: "/img/brocas.png" },
    { id: 13, name: "Tips Transparentes", description: "Caja x500 unidades", price: "$40.000 COP", image: "/img/tips.png" },
    { id: 14, name: "Primer Profesional", description: "Mayor fijación del acrílico", price: "$30.000 COP", image: "/img/primer.png" },
    { id: 15, name: "Aceite para Cutícula", description: "Hidratación profunda", price: "$18.000 COP", image: "/img/aceites.png" },
    { id: 16, name: "Gel Constructor", description: "Ideal para extensión de uñas", price: "$60.000 COP", image: "/img/gel.jpg" },
    { id: 17, name: "Gel Camuflaje", description: "Gel constructor tono natural para un acabado perfecto", price: "$58.000 COP", image: "/img/gelcamuflaje.jpg" },
    { id: 18, name: "Gel Builder Rosa", description: "Gel resistente ideal para uñas largas", price: "$62.000 COP", image: "/img/builder.jpg" }
  ];

  return (
    <Container sx={{ mt: 6, mb: 8 }}>

      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", mb: 4 }}
      >
        Nuestros Productos 💅
      </Typography>

      {addedProduct && (
        <Box
          sx={{
            position: "fixed",
            bottom: 20,
            right: 20,
            bgcolor: "white",
            p: 2,
            borderRadius: 3,
            boxShadow: 5,
            display: "flex",
            alignItems: "center",
            gap: 2,
            zIndex: 9999
          }}
        >
          <img
            src={addedProduct.image}
            alt={addedProduct.name}
            style={{ width: 50, height: 50, objectFit: "cover" }}
          />

          <Typography fontWeight="bold">
            Producto agregado
          </Typography>
        </Box>
      )}

      <Grid container spacing={4}>

        {products.map((product, index) => {

          const isFavorite = favorites.find(
            (item) => item.name === product.name
          );

          return (

            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>

              <Card
                sx={{
                  position: "relative",
                  height: 420,
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 3,
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: 8
                  }
                }}
              >

                <Box
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    bgcolor: "white",
                    borderRadius: "50%"
                  }}
                >
                  <IconButton onClick={() => toggleFavorite(product)}>
                    {isFavorite ? (
                      <FavoriteIcon sx={{ color: "red" }} />
                    ) : (
                      <FavoriteBorderIcon />
                    )}
                  </IconButton>
                </Box>

                <CardMedia
                  component="img"
                  image={product.image}
                  sx={{
                    height: 220,
                    width: "100%",
                    objectFit: "cover"
                  }}
                />

                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    textAlign: "center"
                  }}
                >

                  <Box>

                    <Typography variant="h6" fontWeight="bold">
                      {product.name}
                    </Typography>

                    <Typography
                      color="text.secondary"
                      sx={{ mt: 1, minHeight: 40 }}
                    >
                      {product.description}
                    </Typography>

                  </Box>

                  <Box>

                    <Typography
                      variant="h6"
                      sx={{
                        mt: 2,
                        color: "#d81b60",
                        fontWeight: "bold"
                      }}
                    >
                      {product.price}
                    </Typography>

                    <Button
                      variant="contained"
                      fullWidth
                      onClick={() => {
                        const productWithId = {
                          ...product,
                          id: Date.now()
                        };

                        addToCart(productWithId);
                        setAddedProduct(product);

                        setTimeout(() => setAddedProduct(null), 2000);
                      }}
                      sx={{
                        mt: 2,
                        bgcolor: "#d81b60",
                        borderRadius: 2,
                        "&:hover": {
                          bgcolor: "#ad1457"
                        }
                      }}
                    >
                      Agregar al carrito
                    </Button>

                  </Box>

                </CardContent>

              </Card>

            </Grid>

          );
        })}

      </Grid>

    </Container>
  );
}

export default Products;
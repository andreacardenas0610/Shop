import { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Snackbar,
  Alert
} from "@mui/material";
import { useCart } from "../features/context/CartContext";

function Cart() {
  const { cart, removeFromCart, clearCart, total } = useCart();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handlePayAll = () => {
    if (cart.length === 0) return;

    clearCart();
    setOpenSnackbar(true);
  };

  return (
    <Container sx={{ mt: 6 }}>

      <Typography variant="h4" gutterBottom>
        🛒 Tu Carrito
      </Typography>

      {cart.length === 0 ? (
        <Typography>Tu carrito está vacío.</Typography>
      ) : (
        <>
          <Grid container spacing={4}>
            {cart.map((vehicle, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={vehicle.image}
                    alt={vehicle.name}
                  />
                  <CardContent>
                    <Typography variant="h6">{vehicle.name}</Typography>
                    <Typography color="text.secondary">{vehicle.specs}</Typography>
                    <Typography variant="h6">{vehicle.price}</Typography>

                    <Button
                      variant="outlined"
                      color="error"
                      sx={{ mt: 2 }}
                      onClick={() => removeFromCart(vehicle.name)}
                    >
                      Eliminar
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Typography variant="h5" sx={{ mt: 4 }}>
            Total a pagar: ${total.toLocaleString("es-CO")}
          </Typography>

          <Button
            variant="contained"
            color="success"
            sx={{ mt: 2, mr: 2 }}
            onClick={handlePayAll}
          >
            Pagar todo
          </Button>

          <Button
            variant="outlined"
            color="error"
            sx={{ mt: 2 }}
            onClick={clearCart}
          >
            Vaciar carrito
          </Button>
        </>
      )}

      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Compra realizada con éxito. ¡Gracias!
        </Alert>
      </Snackbar>

    </Container>
  );
}

export default Cart;
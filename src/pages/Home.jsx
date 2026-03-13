import { Box, Typography, Button, Container, Grid, Paper } from "@mui/material";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* HERO */}
      <Box
        sx={{
          height: "80vh",
          backgroundImage: "url(/img/fondo1.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
        }}
      >

        {/* Contenido */}
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Typography variant="h2" fontWeight="bold">
            Todo para tus uñas 💅
          </Typography>

          <Typography variant="h6" sx={{ mt: 2, mb: 4 }}>
            Productos profesionales para manicuristas
          </Typography>

          <Button
            variant="contained"
            size="large"
            component={Link}
            to="/products"
            sx={{ bgcolor: "#d81b60" }}
          >
            Ver Catálogo
          </Button>
        </Box>
      </Box>

      <br /><br /><br /><br />

      {/* TARJETAS DESTACADAS */}
      <Container sx={{ mt: -8, mb: 8 }}>
        <Grid container spacing={4} justifyContent="center">
          {[
            {
              title: "Nuevos Kits",
              text: "Descubre nuestros nuevos kits profesionales.",
              image: "/img/kits.png",
            },
            {
              title: "Diseños que Enamoran",
              text: "Descubre tendencias y crea uñas que roben miradas.",
              image: "/img/diseño.jpg",
            }
          ].map((item, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Card
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  transition: "all 0.4s ease",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "translateY(-12px) scale(1.03)",
                    boxShadow: 10,
                  },
                }}
              >

                <CardMedia
                  component="img"
                  height="220"
                  image={item.image}
                  alt={item.title}
                  sx={{
                    objectFit: "cover",
                  }}
                />

                <CardContent sx={{ textAlign: "center", p: 3 }}>
                  <Typography variant="h6" fontWeight="bold">
                    {item.title}
                  </Typography>

                  <Typography sx={{ mt: 1 }} color="text.secondary">
                    {item.text}
                  </Typography>
                </CardContent>

              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* BENEFICIOS */}
      <Container sx={{ py: 10 }}>
        <Typography variant="h4" align="center" gutterBottom>
          ¿Por qué elegir NailBeauty Store?
        </Typography>

        <Typography
          align="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          Somos tu aliado ideal para llevar tu trabajo al siguiente nivel.
          Calidad, tendencia y profesionalismo en cada producto.
        </Typography>

        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
        >
          {[
            {
              title: "💅 Calidad Profesional",
              text: "Productos certificados y duraderos diseñados para uso profesional en salones y servicios a domicilio.",
            },
            {
              title: "🎨 Tendencias Actualizadas",
              text: "Colores, herramientas y accesorios inspirados en las últimas tendencias del mundo de la belleza.",
            },
            {
              title: "🚚 Envíos Seguros",
              text: "Entregas rápidas y seguras a todo el país con garantía y respaldo en cada compra.",
            },
          ].map((item, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index} sx={{ display: "flex", justifyContent: "center" }}>
              <Paper
                elevation={4}
                sx={{
                  p: 4,
                  textAlign: "center",
                  width: "100%",
                  maxWidth: 350,
                  borderRadius: 3,
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  {item.title}
                </Typography>

                <Typography sx={{ mt: 2 }}>
                  {item.text}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container sx={{ mb: 10 }}>
        <Paper
          elevation={4}
          sx={{
            p: 6,
            textAlign: "center",
            borderRadius: 4,
            background: "linear-gradient(135deg, #fce4ec, #f8bbd0)",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: "#ad1457" }}
          >
            Explora el código del proyecto
          </Typography>

          <Typography
            sx={{ mt: 2, mb: 4 }}
            color="text.secondary"
          >
            Este proyecto fue desarrollado con React y Material UI como una
            tienda moderna para productos de uñas. Puedes revisar el código,
            aprender de su estructura o usarlo como base para tus propios
            proyectos.
          </Typography>

          <Button
            variant="contained"
            size="large"
            href="https://github.com/andreacardenas0610/Shop"
            target="_blank"
            sx={{
              bgcolor: "#d81b60",
              borderRadius: 3,
              "&:hover": {
                bgcolor: "#ad1457"
              }
            }}
          >
            Ver repositorio en Github
          </Button>
        </Paper>
      </Container>
    </>
  );
}

export default Home;
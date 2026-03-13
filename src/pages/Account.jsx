import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  Alert
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Account() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage({ type: "error", text: "Completa todos los campos" });
      return;
    }

    if (email === "andrea.cardenas0610@gmail.com" && password === "1234") {
      localStorage.setItem("user", email);
      setUser(email);
      setMessage({ type: "success", text: "Sesión iniciada correctamente 🎉" });

      // REDIRECCIÓN AL HOME
      setTimeout(() => {
        navigate("/");
      }, 1000);

    } else {
      setMessage({ type: "error", text: "Correo o contraseña incorrectos" });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setEmail("");
    setPassword("");
  };

  return (
    <Container
      sx={{
        py: 10,
        display: "flex",
        justifyContent: "center"
      }}
    >

      <Paper
        elevation={6}
        sx={{
          p: 5,
          width: 400,
          borderRadius: 4,
          textAlign: "center"
        }}
      >

        <PersonIcon
          sx={{
            fontSize: 60,
            color: "#d81b60",
            mb: 1
          }}
        />

        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Mi Cuenta
        </Typography>

        {user ? (

          <Box>

            <Alert severity="success" sx={{ mb: 3 }}>
              Bienvenido {user}
            </Alert>

            <Button
              variant="contained"
              fullWidth
              onClick={handleLogout}
              sx={{
                bgcolor: "#d81b60",
                "&:hover": { bgcolor: "#ad1457" }
              }}
            >
              Cerrar sesión
            </Button>

          </Box>

        ) : (

          <Box component="form" onSubmit={handleLogin}>

            {message && (
              <Alert severity={message.type} sx={{ mb: 2 }}>
                {message.text}
              </Alert>
            )}

            <TextField
              fullWidth
              label="Correo electrónico"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              fullWidth
              label="Contraseña"
              type="password"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 3,
                py: 1.5,
                bgcolor: "#d81b60",
                borderRadius: 2,
                fontWeight: "bold",
                "&:hover": {
                  bgcolor: "#ad1457"
                }
              }}
            >
              Iniciar sesión
            </Button>

          </Box>

        )}

      </Paper>

    </Container>
  );
}

export default Account;
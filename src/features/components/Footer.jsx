import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#f0aec6",
        color: "white",
        textAlign: "center",
        p: 3,
        mt: 8
      }}
    >
      <Typography>
        © 2026 NailBeauty Store - Productos para Manicuristas
      </Typography>
    </Box>
  );
}

export default Footer;
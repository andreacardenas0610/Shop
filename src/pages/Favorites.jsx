import { useFavorites } from "../features/context/FavoritesContext";
import { Typography } from "@mui/material";

function Favorites() {

  const { favorites } = useFavorites();

  return (
    <div>

      <Typography variant="h4">
        Productos Favoritos
      </Typography>

      {favorites.map((p, index) => (
        <p key={index}>{p.name}</p>
      ))}

    </div>
  );
}

export default Favorites;
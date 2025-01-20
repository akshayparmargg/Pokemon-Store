import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import { PokemonDetails } from "../../types/pokemon";

interface PokemonCardProps {
  pokemon: PokemonDetails;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <Card
      sx={{
        backgroundColor: "#000", // Set background to black
        border: "2px solid #ff0000", // Set red border
        boxShadow: "0 0 10px 3px rgba(255, 0, 0, 0.5)", // Glowing red outline effect
        "&:hover": {
          boxShadow: "0 0 20px 5px rgba(255, 0, 0, 1)", // Glowing effect on hover
        },
        transition: "box-shadow 0.3s ease", // Smooth transition for the glowing effect
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <CardContent>
        <Typography variant="h6" color="#fff">
          {pokemon.name}
        </Typography>
        <Typography variant="body2" color="#fff">
          {pokemon.types.map((t) => t.type.name).join(", ")}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;

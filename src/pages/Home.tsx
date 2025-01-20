import { Typography, Avatar, Box } from "@mui/material";
import PokemonList from "../components/PokemonList/PokemonList";
import Logo from "../../src/assets/Logo.svg";

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Box component for layout and alignment */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          margin: "16px 16px 32px",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{ fontWeight: "bold", color: "#fff" }}
        >
          <span style={{ color: "#ff0000" }}>Poké</span>
          <span style={{ color: "#fff" }}>Shop</span>
        </Typography>
        <Avatar
          alt="PokéShop Logo"
          src={Logo}
          sx={{ width: 50, height: 50, backgroundColor: "#ff0000" }}
        />
      </Box>

      <PokemonList />
    </div>
  );
};

export default Home;

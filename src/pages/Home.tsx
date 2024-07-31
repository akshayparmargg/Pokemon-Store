import React from "react";
import PokemonList from "../components/PokemonList";

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>PokéShop</h1>
      <PokemonList />
    </div>
  );
};

export default Home;

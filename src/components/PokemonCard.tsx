import React from "react";
import { PokemonDetails } from "../types/pokemon";

interface PokemonCardProps {
  pokemon: PokemonDetails;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
      <p>{pokemon.types.map((t) => t.type.name).join(", ")}</p>
    </div>
  );
};

export default PokemonCard;

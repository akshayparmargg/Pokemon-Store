import React, { useEffect, useState } from "react";
import { getPokemonList, getPokemonDetails } from "../../services/pokeAPI";
import { Pokemon, PokemonDetails } from "../../types/pokemon";
import PokemonCard from "../PokemonCard/PokemonCard";

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = useState<PokemonDetails[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const data = await getPokemonList(20, 0);
        const detailedPokemons = await Promise.all(
          data.results.map(async (pokemon: Pokemon) => {
            return await getPokemonDetails(pokemon.name);
          })
        );
        setPokemons(detailedPokemons);
      } catch (error) {
        console.error("Failed to fetch Pokémon", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  return (
    <div className="pokemon-list">
      {loading ? (
        <p>Loading...</p>
      ) : (
        pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))
      )}
    </div>
  );
};

export default PokemonList;

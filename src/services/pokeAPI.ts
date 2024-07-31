const API_URL = "https://pokeapi.co/api/v2";

export const getPokemonList = async (limit: number, offset: number) => {
  const response = await fetch(
    `${API_URL}/pokemon?limit=${limit}&offset=${offset}`
  );
  return response.json();
};

export const getPokemonDetails = async (name: string) => {
  const response = await fetch(`${API_URL}/pokemon/${name}`);
  return response.json();
};

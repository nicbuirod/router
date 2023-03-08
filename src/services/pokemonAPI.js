export const getIdPokemon = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data.id;
};

export const getOnePokemon = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data.sprites.front_shiny;
};

export const getOnePokemonDetail = async (id) => {
  const url = `https:pokeapi.co/api/v2/pokemon/${id}`;
  try {
    const request = await fetch(url);
    const data = await request.json();
    data.image = data.sprites.front_shiny;
    return data;
  } catch (error) {
    return error;
  }
};

export const getAllPokemons = async () => {
  const pokemons = [];
  const url = "https://pokeapi.co/api/v2/pokemon";
  const response = await fetch(url);
  const data = await response.json();

  for (let item of data.results) {
    const image = await getOnePokemon(item.url);
    const id = await getIdPokemon(item.url);
    pokemons.push({ name: item.name, image, id });
  }

  return pokemons;
};

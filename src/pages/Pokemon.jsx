import React, { useEffect, useState, useContext } from "react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Loader } from "../components/Loader";
import { CardList } from "../components/CardList";
import { Context } from "../context";

const Pokemon = () => {
  const [characters, setCharacters] = useState([]);
  const [loader, setLoader] = useState(true);
  const context = useContext(Context);

  const getOnePokemon = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data.sprites.front_shiny;
  };

  const getIdPokemon = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data.id;
  };

  //async await
  const getAllPokemons = async () => {
    const pokemons = [];
    const url = "https://pokeapi.co/api/v2/pokemon";
    const response = await fetch(url);
    const data = await response.json();

    for (let item of data.results) {
      const image = await getOnePokemon(item.url);
      const id = await getIdPokemon(item.url);
      pokemons.push({ name: item.name, image, id });
    }
    setLoader(false);
    setCharacters(pokemons);
    console.log("pokemons aca", pokemons);
    context.pokemon.characters = pokemons;
    context.redirectDetailsRoute = "/pokemon";
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  const renderPokemons = () => {
    return <CardList list={characters} />;
  };

  return (
    <>
      <Header>Header</Header>
      {loader && <Loader />}
      {renderPokemons()}
      <Footer>Footer</Footer>
    </>
  );
};

export default Pokemon;

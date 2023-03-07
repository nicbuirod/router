import React, { useEffect, useState, useContext } from "react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Loader } from "../components/Loader";
import { CardList } from "../components/CardList";
import { Context } from "../context";
import { getAllPokemons } from "../services/pokemonAPI";
import { useData } from "../hooks";

const Pokemon = () => {
  const { data: characters } = useData([], getAllPokemons);
  const context = useContext(Context);

  useEffect(() => {
    context.pokemon.characters = characters;
    context.redirectDetailsRoute = "/pokemon";
  }, [characters]);

  return (
    <>
      <Header>Header</Header>
      {/* {loader && <Loader />} */}
      <CardList list={characters} />
      <Footer>Footer</Footer>
    </>
  );
};

export default Pokemon;

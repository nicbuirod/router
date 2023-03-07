import React, { useEffect, useState, useContext } from "react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Loader } from "../components/Loader";
import { CardList } from "../components/CardList";
import { Context } from "../context";
import { getAllCaracters } from "../services/rickAndMortyAPI";
import { useCharacters } from "../hooks";
import { useData } from "../hooks";

const RickAndMorty = () => {
  // const [characters, setCharacters] = useState([]);
  // const { characters } = useCharacters("ram");
  const { data: characters } = useData([], getAllCaracters);
  //const [loader, setLoader] = useState(true);

  const context = useContext(Context);

  console.log("characters...", characters);

  // cuando se renderice
  useEffect(() => {
    //getData();
    context.rickAndMorty.characters = characters;
    context.redirectDetailsRoute = "/rickandmorty";
  }, []);

  return (
    <>
      <Header>Header</Header>
      {/* {loader && <Loader />} */}
      <CardList list={characters} />
      <Footer>Footer</Footer>
    </>
  );
};

export default RickAndMorty;

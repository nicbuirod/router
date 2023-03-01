import React, { useEffect, useState, useContext } from "react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Loader } from "../components/Loader";
import { CardList } from "../components/CardList";
import { Context } from "../context";

const RickAndMorty = () => {
  const [characters, setCharacters] = useState([]);
  const [loader, setLoader] = useState(true);

  const context = useContext(Context);

  const getAllCaracters = () => {
    const url = "https://rickandmortyapi.com/api/character";
    fetch(url)
      .then((response) => {
        //cuando ya hay un result

        return response.json();
      })
      .then((data) => {
        setCharacters(data.results);
        context.rickAndMorty.characters = data.results;
        context.redirectDetailsRoute = "/rickandmorty";
      })
      .catch((error) => {
        //reject
        console.log(error);
      });
    setLoader(false);
  };
  // cuando se renderice
  useEffect(() => {
    getAllCaracters();
  }, []);

  return (
    <>
      <Header>Header</Header>
      {loader && <Loader />}
      <CardList list={characters} />
      <Footer>Footer</Footer>
    </>
  );
};

export default RickAndMorty;

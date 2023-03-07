import React, { useEffect, useState } from "react";
import { getAllCaracters } from "../services/rickAndMortyAPI";

//return characters of any serie
const useCharacters = (type) => {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    let data = [];
    if (type === "ram") {
      data = await getAllCaracters();
    } else if (type === "pokemon") {
      //data = getAllPokemons
    }

    setCharacters(data);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return { characters };
};

export default useCharacters;

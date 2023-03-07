import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Context } from "../context";
import { getOnePokemonDetail } from "../services/pokemonAPI";

import "../styles/rampokemon.scss";

const Detailspokemon = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();
  const context = useContext(Context);
  const { pokemon } = context || {};
  const { characters } = pokemon || [];

  useEffect(() => {
    const item = characters.find((item) => item.id === +id);
    if (item) {
      setCharacter(item);
    } else {
      getData(id);
    }
  }, []);

  const getData = async (id) => {
    const data = await getOnePokemonDetail(id);
    setCharacter(data);
  };

  return (
    <div className="container">
      <div className="container__card">
        <div>
          <img
            src={character.image}
            alt="picture_pokemon"
            className="picture"
          />
        </div>
        <div className="information">
          <strong className="id">Id: </strong> {character.id}
          <strong className="name">Name: </strong> {character.name}
        </div>
      </div>
    </div>
  );
};

export default Detailspokemon;

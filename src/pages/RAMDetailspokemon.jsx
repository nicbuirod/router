import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Context } from "../context";

import "../styles/rampokemon.scss";

const RAMDetailspokemon = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();
  const context = useContext(Context);
  const { pokemon } = context || {};
  const { characters } = pokemon || [];
  console.log("aca los caracteres", characters);
  //console.log("idparam", name);
  useEffect(() => {
    const item = characters.find((item) => item.id === +id);

    setCharacter(item);
  }, []);

  useEffect(() => {
    console.log("character", character);
  }, [character]);

  //Character by id

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

export default RAMDetailspokemon;

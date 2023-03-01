import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Context } from "../context";

const RAMDetails = () => {
  const [character, setCharacter] = useState({});
  const { id: idParam } = useParams();
  const context = useContext(Context);
  const { rickAndMorty } = context || {};
  const { characters } = rickAndMorty || [];

  console.log("idparam", idParam);

  useEffect(() => {
    const item = characters.find((item) => item.id === +idParam);
    setCharacter(item);
  }, []);

  useEffect(() => {
    console.log("character", character);
  }, [character]);

  //Character by id

  return (
    <div>
      <strong>Id:</strong> {character.id}
      <strong>Species:</strong> {character.species}
      <strong>gender:</strong> {character.gender}
      <strong>Name:</strong> {character.name}
      <strong>Status:</strong> {character.status}
      <img src={character.image} alt="" />
    </div>
  );
};

export default RAMDetails;

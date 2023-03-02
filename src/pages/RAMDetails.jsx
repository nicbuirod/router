import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Context } from "../context";
import { RAMDetail } from "../components/RAMDetail";

const RAMDetails = () => {
  const [character, setCharacter] = useState({});
  const { id: idParam } = useParams();
  const context = useContext(Context);
  const { rickAndMorty } = context || {};
  const { characters } = rickAndMorty || [];

  const { id, species, gender, name, status, image } = character || {};

  useEffect(() => {
    const item = characters.find((item) => item.id === +idParam);
    console.log("item..", item);
    if (item) {
      setCharacter(item);
    } else {
      getOneCharacter(idParam);
    }
  }, []);

  const getOneCharacter = async (id) => {
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    try {
      const request = await fetch(url);
      const data = await request.json();
      console.log("DATA", data);
      setCharacter(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <RAMDetail
      id={id}
      species={species}
      name={name}
      status={status}
      image={image}
      gender={gender}
    />
  );
};

export default RAMDetails;

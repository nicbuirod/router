import React from "react";

export const initialContext = {
  rickAndMorty: {
    characters: [],
  },
  pokemon: {
    characters: [],
  },
  redirectDetailsRouter: "",
};
export const Context = React.createContext(initialContext);

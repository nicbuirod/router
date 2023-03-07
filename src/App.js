import React from "react";

import "./App.scss";
import { Context, initialContext } from "./context";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CustomRouter } from "./router";

function App() {
  return (
    <Context.Provider value={initialContext}>
      <div className="App">
        <CustomRouter />
      </div>
    </Context.Provider>
  );
}

export default App;

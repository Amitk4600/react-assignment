import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Person from "./personComponent";
import Button from "./buttonComponent";
import Header from "./header";
import List from "./list";

import "./App.css";

function App() {
  return (
    <>
      <Person name="Jhone " age="30" />
      <Button text="Click me" onClick={() => alert("clicked")} />
      <Header text="welcome to my website" />
      <List items={["apple", "mango", "fig", "orange"]} />
    </>
  );
}

export default App;

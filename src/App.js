import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/Signup";
import WelcomePage from "./Pages/WelcomePage";
import NewEntry from "./Pages/NewEntry";

function App() {
  const teste = "teste";
  return (
    <NewEntry text={teste}/>
  );
}

export default App;

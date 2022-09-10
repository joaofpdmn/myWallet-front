import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getUserData } from "./Services/UserData";
import Login from "./Pages/Login";
import SignUp from "./Pages/Signup";
import WelcomePage from "./Pages/WelcomePage";
import NewEntry from "./Pages/NewEntry";
import UserContext from "./Context/UserContext";

function App() {
  const [login, setLogin] = useState(getUserData());
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ login, setLogin }}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/home' element={<WelcomePage />} />
          <Route path='/entry/:id' element={<NewEntry />} />
        </Routes>
      </UserContext.Provider >
    </BrowserRouter>
  );
}

export default App;

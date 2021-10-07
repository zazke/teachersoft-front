import Ciclo from './Components/Ciclo';
import Navbar from './Components/PageComponent/Navbar/Navbar'
import NavbarUser from './Components/PageComponent/NavbarUser/NavbarUser'
import General from './Components/PageComponent/Menu/General'
import fotoUsuario from './assets/Images/profile-photo.png'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import React, { useState, useEffect, useContext } from "react";

function App() {

  let nombre = "Lucas Podestá"
  let rol = "Asistente de sección"

  return (
    <Router>
      <Navbar/>
      <NavbarUser nombre = {nombre} rol = {rol} foto = {fotoUsuario}/>
      
      <General inactive={false}/>
      
    </Router>
  );
}

export default App;

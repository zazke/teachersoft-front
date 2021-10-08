import Ciclo from './Components/Ciclo';
import Navbar from './Components/PageComponent/Navbar/Navbar'
import NavbarUser from './Components/PageComponent/NavbarUser/NavbarUser'
import General from './Components/PageComponent/Menu/General'
import fotoUsuario from './assets/Images/profile-photo.png'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import React, { useState, useEffect, useContext } from "react";
import Seccion from './Pages/Administrador/Seccion';
import Departamento from './Pages/Administrador/Departamento';


function App() {
  let nombre = "Lucas Podestá"
  let rol = "Administrador"
  return (
    <Router>
      <Navbar/>
      <NavbarUser  nombre = {nombre} rol = {rol} foto = {fotoUsuario} />
      <General inactive={false}/> 
        <div style = {{paddingLeft:"300px", paddingTop:"30px", paddingRight:"60px"}}>
            <Switch> 
              <Route path='/mantenimiento/curso' exact component={Ciclo} />
              <Route path='/mantenimiento/seccion' exact component={Seccion} />
              <Route path='/mantenimiento/departamento' exact component={Departamento} />
            </Switch>
        </div>
    </Router>
  );
}

export default App;

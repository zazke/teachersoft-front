import Ciclo from './Components/Ciclo';
import Navbar from './Components/PageComponent/Navbar/Navbar'
import NavbarUser from './Components/PageComponent/NavbarUser/NavbarUser'
import General from './Components/PageComponent/Menu/General'
import fotoUsuario from './assets/Images/profile-photo.png'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import React, { useState, useEffect, useContext } from "react";
import Seccion from './Pages/Administrador/Seccion';
import Departamento from './Pages/Administrador/Departamento';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const theme = createTheme({
  palette: {
    primary: { //Azul
      dark: "#00002b",
      main: "#042354",
      light: "#3B4A81"
    },
    secondary: {
      dark: "#7eebff",
      main: "#41b9e4",
      light: "#0089b2"
    },
    background: {
      default: "#f4f5fd"
    }
  },
  shape: {
    borderRadius: '4px'
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform:'translateZ(0)'
      }
    }
  },
  props: {
    MuiIconButton: {
      disableRipple: true
    }
  }
})

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  }
})

function App() {
  let nombre = "Lucas Podestá"
  let rol = "Administrador"
  return (
    <ThemeProvider theme={theme}>
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
              <p>{nombre}</p>
          </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

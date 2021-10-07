import { createTheme } from '@mui/material';
import { lightBlue } from '@mui/material/colors';
import { typography } from '@mui/system';
import Ciclo from './Components/Ciclo';
import Navbar from './Components/Navbar/Navbar'
import NavbarUser from './Components/NavbarUser/NavbarUser'
import fotoUsuario from './assets/Images/profile-photo.png'
import Footer from './Components/Footer/Footer';

function App() {

  let nombre = "Lucas Podestá"
  let rol = "Asistente de sección"

  return (
    <div className="App">
      <Navbar/>
      <NavbarUser nombre = {nombre} rol = {rol} foto = {fotoUsuario}/>
      <Ciclo />

      <Footer />
    </div>
  );
}

export default App;

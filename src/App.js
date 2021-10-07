import { createTheme } from '@mui/material';
import { lightBlue } from '@mui/material/colors';
import { typography } from '@mui/system';
import Ciclo from './Components/Ciclo';


const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    secondary: lightBlue
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightMedium:600,
  }
})
function App() {
  return (
    <div className="App">
      <Ciclo />
      hola
    </div>
  );
}

export default App;

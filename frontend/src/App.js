import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, responsiveFontSizes, createTheme } from '@mui/material/styles'
import {
  Route,
  Routes 
} from 'react-router-dom'
import Header from './components/Header'

let theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#1f1e1e',
    },
    secondary: {
      main: '#6a7fdb',
    },
    error: {
      main: '#ed474a',
    },
    success: {
      main: '#2d936c',
    },
  },
  props: {
    MuiAppBar: {
      color: 'secondary',
    },
  },
})

theme = responsiveFontSizes(theme)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      {/*<Routes>
      <Route />
      </Routes>*/}
    </ThemeProvider>
  );
}

export default App;

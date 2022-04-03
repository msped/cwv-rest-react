import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, responsiveFontSizes, createTheme } from '@mui/material/styles'
import {
  Route,
  Routes 
} from 'react-router-dom'

import Header from './components/Header'
import Sales from './pages/Sales'

let theme = createTheme({
  palette: {
    mode: 'dark',
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
      color: 'primary',
    },
  },
})

theme = responsiveFontSizes(theme)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/buy" element={<Sales />}/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;

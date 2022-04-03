import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, responsiveFontSizes, createTheme } from '@mui/material/styles'
import {
  Route,
  Routes 
} from 'react-router-dom'

import Header from './components/Header'
import Sales from './pages/Sales'
import CustomTheme from './theme'

function App() {
  return (
    <ThemeProvider theme={CustomTheme()}>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/buy" element={<Sales />}/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;

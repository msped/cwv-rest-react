import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import {
  Route,
  Routes 
} from 'react-router-dom'

import Header from './components/Header'
import Sales from './pages/Sales'
import SaleDetail from './pages/SaleDetail'
import GalleryDetail from './pages/GalleryDetail'
import Gallery from './pages/Gallery'

import CustomTheme from './theme'

function App() {
  return (
    <ThemeProvider theme={CustomTheme()}>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/buy" element={<Sales />}/>
        <Route path="/buy/:slug" element={<SaleDetail />}/>
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="/gallery/:slug" element={<GalleryDetail />}/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;

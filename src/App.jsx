import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home.jsx'
import ProductViewPage from './pages/ProductView.jsx';
import MeusPedidos from './pages/MeusPedidos.jsx';
import Categorias from './pages/categorias.jsx';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<ProductViewPage />} />
          <Route path="/MeusPedidos" element={<MeusPedidos />} />
          <Route path="/Categorias" element={<Categorias />} />
        </Routes>
    </Router>
  )
}

export default App

import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx'
import ProductViewPage from './pages/ProductViewPage.jsx';
import MeusPedidos from './pages/MeusPedidos.jsx';
import Categorias from './pages/categorias.jsx';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produtos" element={<ProductViewPage />} />
          <Route path="/MeusPedidos" element={<MeusPedidos />} />
          <Route path="/Categorias" element={<Categorias />} />
        </Routes>
    </Router>
  )
}

export default App

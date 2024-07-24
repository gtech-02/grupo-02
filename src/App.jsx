import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage.jsx';
import ProductViewPage from './pages/ProductViewPage.jsx';
import Categorias from './pages/Categorias.jsx';
import MeusPedidos from './pages/MeusPedidos.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Produtos" element={<ProductListingPage />} />
        <Route path="/Produtos/:id" element={<ProductViewPage />} />
        <Route path="/Categorias" element={<Categorias />} />
        <Route path="/Meus-pedidos" element={<MeusPedidos />} />
      </Routes>
    </Router>
  )
}

export default App
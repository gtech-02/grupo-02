import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage.jsx';
import ProductViewPage from './pages/ProductViewPage.jsx';
import Categorias from './pages/Categorias.jsx';
import MeusPedidos from './pages/MeusPedidos.jsx';
import Login from './pages/Login.jsx';
import Cadastro from './pages/Cadastro.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Produtos" element={<ProductListingPage />} />
        <Route path="/Produtos/:id" element={<ProductViewPage />} />
        <Route path="/Categorias" element={<Categorias />} />
        <Route path="/Meus-pedidos" element={<MeusPedidos />} />
      </Routes>
    </Router>
  )
}

export default App
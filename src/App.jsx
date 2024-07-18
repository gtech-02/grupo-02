import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx'
import Home from './pages/home.jsx'
import ProductViewPage from './pages/ProductView.jsx';
import MeusPedidos from './pages/MeusPedidos.jsx';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<ProductViewPage />} />
          <Route path="/MeusPedidos" element={<MeusPedidos />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

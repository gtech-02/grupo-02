import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage.jsx';
import ProductViewPage from './pages/ProductViewPage.jsx';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produtos" element={<ProductListingPage />} />
          <Route path="/produtos/:id" element={<ProductViewPage />} />
        </Routes>
    </Router>
  )
}

export default App
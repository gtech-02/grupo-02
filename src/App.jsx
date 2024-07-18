import './App.css'
import Cards from './components/HomePage/Cards.jsx'
import HomeCarrosel from './components/HomePage/Carrosel.jsx'
import GridProdutos from './components/HomePage/GridProdutos.jsx'
import Layout from './components/Layout/Layout.jsx'

function App() {
  return (
    <>
      <Layout>
        <main>
          <HomeCarrosel />
        </main>
        <Cards />
        <GridProdutos />
      </Layout>
    </>
  )
}

export default App

import './App.css'
import Cards from './components/HomePage/Cards.jsx'
import HomeCarrosel from './components/HomePage/Carrosel.jsx'
import Layout from './components/Layout/Layout.jsx'
function App() {
  return (
    <>
      <Layout>
        <main>
          <HomeCarrosel />
        </main>
        <Cards />
      </Layout>
    </>
  )
}

export default App

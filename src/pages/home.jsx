import Cards from '../components/Cards.jsx'
import HomeCarrosel from '../components/Carrosel.jsx'
import GridProdutos from '../components/GridProdutos.jsx'
import Layout from './Layout.jsx'

export default function Home() {
    return (
            <Layout>
                <main>
                    <HomeCarrosel />
                </main>
                <Cards />
                <GridProdutos />
            </Layout>
    )
}
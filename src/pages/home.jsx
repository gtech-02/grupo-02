import Cards from '../components/HomePage/Cards.jsx'
import HomeCarrosel from '../components/HomePage/Carrosel.jsx'
import GridProdutos from '../components/HomePage/GridProdutos.jsx'

export default function Home() {
    return (
        <>
            <main>
                <HomeCarrosel />
            </main>
            <Cards />
            <GridProdutos />
        </>
    )
}
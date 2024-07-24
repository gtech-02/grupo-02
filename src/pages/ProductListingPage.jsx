import ProductListing from "../components/ProductListing"
import Section from "../components/Section"
import Layout from "./Layout"
import Filter from "../components/FilterGroup.jsx"

const ProductListingPage = () => {
    return (
        <Layout>
            <div className="container" style={{display: "flex", gap: "10px"}}>
                <div className="row" style={{height: "20px"}}>
                    <Filter titulo={"Ordenar por:"} itens={["Menor Preço", "Maior Preço"]} />
                    <Filter titulo={"Marcas:"} itens={["Nike", "Adidas", "Puma", "Olympikus"]} />
                    <Filter titulo={"Categoria:"} itens={["Esporte", "Lazer", "Casual"]} />
                    <Filter titulo={"Gênero:"} itens={["Masculino", "Feminino", "Unisex"]} /> 
                </div>
                <Section props={{ display: "none" }}>
                    <ProductListing />
                </Section>
            </div>
        </Layout >
    )
}

export default ProductListingPage

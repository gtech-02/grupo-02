import ProductListing from "../components/ProductListing"
import Section from "../components/Section"
import Layout from "./Layout"
import FilterGroup from "../components/FilterGroup.jsx"

const ProductListingPage = () => {
    return (
        <Layout>
            <div className="container" style={{display: "flex", gap: "10px"}}>
                <div className="row" style={{height: "20px"}}>
                    <FilterGroup titulo={"Ordenar por:"} itens={["Menor Preço", "Maior Preço"]} />
                    <FilterGroup titulo={"Marcas:"} itens={["Nike", "Adidas", "Puma", "Olympikus"]} />
                    <FilterGroup titulo={"Categoria:"} itens={["Esporte", "Lazer", "Casual"]} />
                    <FilterGroup titulo={"Gênero:"} itens={["Masculino", "Feminino", "Unisex"]} />
                    <FilterGroup titulo={"Estado:"} itens={["Novo", "Usado"]} />
                </div>
                <Section props={{ display: "none" }}>
                    <ProductListing />
                </Section>
            </div>
        </Layout >
    )
}

export default ProductListingPage
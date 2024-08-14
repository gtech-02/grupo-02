import ProductListing from "../components/ProductListing";
import Section from "../components/Section";
import Layout from "./Layout";
import Filter from "../components/FilterGroup.jsx";
import filtro from '../data/filtros.js';

const ProductListingPage = () => {
    const filters = filtro.map((item, index) => (
        <Filter key={index} titulo={item.titulo} itens={item.itens} />
    ));

    return (
        <Layout>
            <div className="container" style={{ display: "flex", gap: "10px" }}>
                <div className="row" style={{ height: "20px" }}>
                    {filters}
                </div>
                <Section props={{ display: "none" }}>
                    <ProductListing />
                </Section>
            </div>
        </Layout>
    );
};

export default ProductListingPage;

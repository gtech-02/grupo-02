import BuyBox from "../components/BuyBox.jsx";
import Gallery from "../components/Gallery.jsx";
import ProductListing from "../components/ProductListing.jsx";
import Section from "../components/Section.jsx";
import Layout from "./Layout";

const ProductViewPage = () => {
    return (
        <Layout>
            <div id="ProductViewPage">
                <Gallery />
                <BuyBox />
            </div>
            <Section props={{ title: "Produtos Relacionados", display: "flex", justfy: "space-between" }}>
                <ProductListing />
            </Section>
        </Layout>
    )
}

export default ProductViewPage
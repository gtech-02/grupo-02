import ProductListing from "../components/ProductListing"
import Section from "../components/Section"
import Layout from "./Layout"

const ProductListingPage = () => {
    return (
        <Layout>
            <Section props={{display:"none"}}>
                <ProductListing />
            </Section>
        </Layout>
    )
}

export default ProductListingPage
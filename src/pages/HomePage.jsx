import HomeCarrosel from "../components/GallerySlide"
import ProductCards from "../components/ProductCard"
import ProductListing from "../components/ProductListing"
import Section from "../components/Section"
import Layout from "./Layout"

const HomePage = () => {
    return (
        <Layout>
            <HomeCarrosel/>
            <ProductCards/>
            <Section props={{title:"Produtos em alta", display:"flex", justfy:"space-between"}}>
                <ProductListing/>
            </Section>
        </Layout>
    )
}

export default HomePage
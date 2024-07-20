import BuyBox from "../components/BuyBox";
import Gallery from "../components/Gallery";
import Layout from "./Layout";

export default function ProductViewPage() {
    return (
        <Layout>
            <div id="ProductViewPage">
                <Gallery />
                <BuyBox />
            </div>
        </Layout>
    )
}
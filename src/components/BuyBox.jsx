import ProductOptions from "./ProductOptions";

export default function BuyBox() {
    return (
        <div id="BuyBox">
            <div>
                <h1>name</h1>
                <div>reference</div>
                <div>Estrelas/avaliações</div>
            </div>
            <div>Descont/price</div>
            <div>description
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, accusantium voluptatibus. Numquam repudiandae pariatur non corrupti veniam temporibus porro facilis debitis, quo ipsam! Natus vitae ut in corrupti laborum. Totam.</p>
            </div>
            <ProductOptions/>
            <button>Comprar</button>
        </div>
    )
}
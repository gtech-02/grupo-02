import ProductOptions from "./ProductOptions";
import { useParams } from 'react-router-dom';
import produtos from "../data/Produtos.jsx";
import star from '../assets/star-product.svg'

const BuyBox = () => {

    const { id } = useParams();
    const product = produtos.find(p => p.id === parseInt(id));

    if (!product) {
        return <h2>Produto não encontrado</h2>;
    }

    return (
        <div id="BuyBox">
            <div>
                <h1>{product.nome}</h1>
                <h2>Tipo | Marca | REF:{product.id}</h2>
            </div>
            <div className="avaliacoes">
                <div className="star">
                    <img id="star-1" src={star} alt="" />
                    <img id="star-2" src={star} alt="" />
                    <img id="star-3" src={star} alt="" />
                    <img id="star-4" src={star} alt="" />
                    <img id="star-5" src={star} alt="" />
                </div>
                <div className="qtd-star-av">
                    <span className="qtd-star">4.7<img src={star} /></span>
                    <span className="av">(90)avaliacoes</span>
                </div>
            </div>
            <div className="preco">
                <span className="preco-desc"><span id="rs">R$</span>{product.preco}<span>,00</span></span>
                <span className="preco-orig">{product.preco},00</span>
            </div>
            <div className="product-desc">Descrição do produto
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, accusantium voluptatibus. Numquam repudiandae pariatur non corrupti veniam temporibus porro facilis debitis, quo ipsam! Natus vitae ut in corrupti laborum. Totam.</p>
            </div>
            <ProductOptions />
            <button>Comprar</button>
        </div>
    )
}

export default BuyBox
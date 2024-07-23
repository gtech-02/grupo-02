import ProductOptions from "./ProductOptions";
import { useParams } from 'react-router-dom';
import produtos from "../data/Produtos.jsx";

const BuyBox = () => {

    const { id } = useParams();
    const product = produtos.find(p => p.id === parseInt(id));

    if (!product) {
        return <h2>Produto não encontrado</h2>;
    }

    const Star = (props) => {
        const star = [];
        let cstr = "var(--warning)";
        for (let i = 0; i < props.qtd; i++) {
            if (i > product.star - 1 || props.qtd === 1) {
                cstr = "var(--white)";
            }
            star.push(
                <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill={cstr} xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.15102 1.2306L10.0003 5.65038L14.7346 6.06108C15.063 6.08972 15.1966 6.50343 14.9473 6.72122L11.3563 9.86292L12.4324 14.5367C12.507 14.8614 12.1585 15.1169 11.8764 14.9443L7.80774 12.4666L3.73906 14.9443C3.45622 15.1162 3.10846 14.8607 3.18309 14.5367L4.25921 9.86292L0.667401 6.72047C0.418146 6.50268 0.550983 6.08896 0.880089 6.06033L5.61444 5.64962L7.46371 1.2306C7.59206 0.923134 8.02266 0.923134 8.15102 1.2306Z" stroke="#F6AA1C" />
                </svg>
            );
        }
        return star;
    }

    return (
        <div id="BuyBox">
            <div>
                <h1>{product.nome}</h1>
                <h2>Tipo | Marca | REF:{product.id}</h2>
            </div>
            <div className="avaliacoes">
                <div className="star">
                    <Star qtd={5} />
                </div>
                <div className="qtd-star-av">
                    <span className="qtd-star">{product.star}<Star qtd={1} /></span>
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

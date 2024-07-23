import { useParams } from 'react-router-dom';
import produtos from "../data/Produtos"

const ProductOptions = () => {

    const { id } = useParams();
    const product = produtos.find(p => p.id === parseInt(id));

    const FilterTm = () => {
        const tamanho = [];
        if (!product.tamanho) {
            return <h2>Tamanhos não encontrados</h2>;
        }
        for (let i = 0; i < product.tamanho.length; i++) {
            tamanho.push(
                <li key={i}>{product.tamanho[i]}</li>
            );
        }
        return tamanho;
    }

    const Filtercl = () => {
        const cor = [];
        if (!product.cor) {
            return <h2>cor não encontrados</h2>;
        }
        for (let i = 0; i < product.cor.length; i++) {
            cor.push(
                <li key={i} style={{ backgroundColor: product.cor[i] }}></li>
            );
        }
        return cor;
    }

    return (
        <div className="productoptions">
            <div className="tamanho">
                <span>Tamanho</span>
                <ul>
                    <FilterTm />
                </ul>
            </div>
            <div className="cor">
                <span>Cor</span>
                <ul>
                    <Filtercl />
                </ul>
            </div>
        </div>
    )
}

export default ProductOptions
import ProductOptions from "./ProductOptions";
import { useParams } from 'react-router-dom';

const produtos = [
    { id: 1, nome: 'Produto 1', preco: 100, imagem: 'https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/product-thumb-1.jpeg' },
    { id: 2, nome: 'Produto 2', preco: 200, imagem: 'https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/product-thumb-2.jpeg' },
    { id: 3, nome: 'Produto 3', preco: 300, imagem: 'https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/product-thumb-3.jpeg' },
    { id: 4, nome: 'Produto 4', preco: 400, imagem: 'https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/product-thumb-4.jpeg' },
    { id: 5, nome: 'Produto 5', preco: 500, imagem: 'https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/produc-image-2.jpeg' },
    { id: 6, nome: 'Produto 6', preco: 600, imagem: 'https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/produc-image-3.jpeg' },
    { id: 7, nome: 'Produto 7', preco: 700, imagem: 'https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/produc-image-4.jpeg' },
    { id: 8, nome: 'Produto 8', preco: 800, imagem: 'https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/produc-image-5.jpeg' },
    // Adicionar mais produtos conforme necessário
];


export default function BuyBox() {
    const { id } = useParams();
    const product = produtos.find(p => p.id === parseInt(id));

    if (!product) {
        return <h2>Produto não encontrado</h2>;
    }

    return (
        <div id="BuyBox">
            <div>
                <h1>{product.nome}</h1>
                <div>reference</div>
                <div>Estrelas/avaliações</div>
            </div>
            <p>Preço: $ {product.preco}.00</p>
            <div>description
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, accusantium voluptatibus. Numquam repudiandae pariatur non corrupti veniam temporibus porro facilis debitis, quo ipsam! Natus vitae ut in corrupti laborum. Totam.</p>
            </div>
            <ProductOptions />
            <button>Comprar</button>
        </div>
    )
}
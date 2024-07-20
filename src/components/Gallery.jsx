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

export default function Gallery() {
    const { id } = useParams();
    const product = produtos.find(p => p.id === parseInt(id));

    if (!product) {
        return <h2>Produto não encontrado</h2>;
    }

    return (
        <div id="Gallery">
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={product.imagem} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={product.imagem} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={product.imagem} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={product.imagem} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={product.imagem} className="d-block w-100" alt="..." />
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="carousel-indicators">
                    <img src={product.imagem} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
                    <img src={product.imagem} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></img>
                    <img src={product.imagem} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></img>
                    <img src={product.imagem} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></img>
                    <img src={product.imagem} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></img>
                </div>
            </div>
        </div>
    )
}

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

export default function GridProdutos() {
  return (
    <>
      <div className="card-container">
        {produtos.map(produto => (
          <div className="card" key={produto.id}>
            <img src={produto.imagem} className="card-img-top" alt={produto.nome} />
            <div className="card-body">
              <h5 className="card-title">{produto.nome}</h5>
              <p className="card-text">Preço: R$ {produto.preco.toFixed(2)}</p>
              <a href={"/Produtos/" + produto.id} className="btn btn-primary">Ver Produto</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
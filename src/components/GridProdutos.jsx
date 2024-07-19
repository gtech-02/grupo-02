const produtos = [
    { id: 1, nome: 'Produto 1', preco: 100, imagem: 'https://http2.mlstatic.com/D_NQ_NP_877973-MLU77182122904_072024-O.webp' },
    { id: 2, nome: 'Produto 2', preco: 200, imagem: 'https://http2.mlstatic.com/D_NQ_NP_877973-MLU77182122904_072024-O.webp' },
    { id: 3, nome: 'Produto 3', preco: 300, imagem: 'https://http2.mlstatic.com/D_NQ_NP_877973-MLU77182122904_072024-O.webp' },
    { id: 4, nome: 'Produto 4', preco: 400, imagem: 'https://http2.mlstatic.com/D_NQ_NP_877973-MLU77182122904_072024-O.webp' },
    { id: 5, nome: 'Produto 5', preco: 500, imagem: 'https://http2.mlstatic.com/D_NQ_NP_877973-MLU77182122904_072024-O.webp' },
    { id: 6, nome: 'Produto 6', preco: 600, imagem: 'https://http2.mlstatic.com/D_NQ_NP_877973-MLU77182122904_072024-O.webp' },
    { id: 7, nome: 'Produto 7', preco: 700, imagem: 'https://http2.mlstatic.com/D_NQ_NP_877973-MLU77182122904_072024-O.webp' },
    { id: 8, nome: 'Produto 8', preco: 800, imagem: 'https://http2.mlstatic.com/D_NQ_NP_877973-MLU77182122904_072024-O.webp' },
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
              <a href="#" className="btn btn-primary">Ver Produto</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

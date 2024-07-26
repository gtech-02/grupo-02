import produtos from "../data/Produtos.jsx";

const ProductListing=()=> {
  return (
    <>
      <div className="card-container">
        {produtos.map(produto => (
          <div className="card" key={produto.id}>
            <img src={produto.src} className="card-img-top" alt={produto.nome} />
            <div className="card-body">
              <h5 className="card-title">{produto.nome}</h5>
              <p className="card-text">{produto.tipo} {produto.marca}</p>
              <p className="card-text">R$ {produto.preco.toFixed(2)}</p>
              <a href={"/Produtos/" + produto.id} className="botao-produto">Ver Produto</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductListing
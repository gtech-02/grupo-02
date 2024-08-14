import React from 'react';
import produtos from '../data/Produtos';

  const ProductListing = ({ isHomepage }) => {

    const produtos = produtosExibidos(); 

    // Limita a exibição para 8 produtos se estiver na homepage
    const produtosExibidos = isHomepage ? produtos.slice(0, 8) : produtos;
  
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
};

export default ProductListing;

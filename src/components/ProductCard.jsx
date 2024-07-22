import imgs from "../data/imgs.jsx";

const ProductCards = () => {
    return (
        <>
            {/*<!-- Inicio cards -->*/}
            <section>
                <div className="cards">
                    {imgs.map(imagens => (
                        <div className="card-botao">
                            <div className="text-center">
                                <img src={imagens.img}
                                    className="rounded" alt="..." />
                                <button>Comprar</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* <!-- Fim cards --> */}
        </>
    )
}

export default ProductCards
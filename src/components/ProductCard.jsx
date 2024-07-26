import imgs from "../data/imgs.jsx";

const ProductCards = () => {
let imgsCards = imgs.slice(0, 3)

    return (
        <>
            {/*<!-- Inicio cards -->*/}
                <section className="cards">
                    {imgsCards.map(imagens => (
                        <div className="card-botao" key={imagens.id}>
                            <div className="text-center">
                                <img src={imagens.src}
                                    className="rounded" alt="..." />
                                <button><a href="/produtos" >Comprar</a></button>
                                <span>30%OFF</span>
                            </div>
                        </div>
                    ))}
                </section>
            {/* <!-- Fim cards --> */}
        </>
    )
}

export default ProductCards
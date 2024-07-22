const ProductCards = () => {
    return (
        <section>
            {/*<!-- Inicio cards -->*/}
            <div className="cards">
                <div className="card-botao">
                    <div className="text-center">
                        <img src={"https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/collection-1.png?raw=true"}
                            className="rounded" alt="..." />
                        <button>Comprar</button>
                    </div>
                </div>

                <div className="card-botao">
                    <div className="text-center">
                        <img src={"https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/collection-1.png?raw=true"}
                            className="rounded" alt="..." />
                        <button>Comprar</button>
                    </div>
                </div>

                <div className="card-botao">
                    <div className="text-center">
                        <img src={"https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/collection-1.png?raw=true"}
                            className="rounded" alt="..." />
                        <button>Comprar</button>
                    </div>
                </div>
            </div>
            {/* <!-- Fim cards --> */}
        </section>
    )
}

export default ProductCards
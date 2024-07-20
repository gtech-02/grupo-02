export default function Gallery() {
    return (
        <div id="Gallery">
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={"https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/product-thumb-1.jpeg"} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={"https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/product-thumb-2.jpeg"} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={"https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/product-thumb-3.jpeg"} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={"https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/product-thumb-4.jpeg"} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={"https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/product-thumb-5.jpeg"} className="d-block w-100" alt="..." />
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
                    <img src={"https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/product-thumb-1.jpeg"} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
                    <img src={"https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/product-thumb-2.jpeg"} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></img>
                    <img src={"https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/product-thumb-3.jpeg"} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></img>
                    <img src={"https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/product-thumb-4.jpeg"} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></img>
                    <img src={"https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/product-thumb-5.jpeg"} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></img>
                </div>
            </div>
        </div>
    )
}

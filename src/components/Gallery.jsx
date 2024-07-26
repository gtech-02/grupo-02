import { useParams } from 'react-router-dom';
import '../data/imgs.jsx';
import imgs from '../data/imgs.jsx';

const Gallery = (props) => {

    const Thumb = () => {
        if (props.thumb) {
            const { id } = useParams();
            const product = props.lista.find(p => p.id === parseInt(id));

            if (!product) {
                return <h2>Produto não encontrado</h2>;
            }
            return (
                <div id="Gallery">
                    <div id="carouselExampleIndicators" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={product.src} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={product.src} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={product.src} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={product.src} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={product.src} className="d-block w-100" alt="..." />
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
                            <img src={product.src} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
                            <img src={product.src} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></img>
                            <img src={product.src} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></img>
                            <img src={product.src} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></img>
                            <img src={product.src} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></img>
                        </div>
                    </div>
                </div>
            )
        }
    }

    const Slide = () => {
        let imgsCarrossel = imgs.slice(3,6);
        
        if (!props.thumb) {
            return (
                <div id="carouselExampleCaptions" className="carousel slide" style={{ marginBottom: "40px" }}>
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        {imgsCarrossel.map(imagens => (
                            <div className="carousel-item active">
                            <img src={imagens.src}
                                className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                            </div>
                        </div>
                        ))};
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            )
        }
    }

    return (
        <>
            <Thumb />
            <Slide />
        </>
    )

}

export default Gallery

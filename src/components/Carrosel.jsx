import Carousel from 'react-bootstrap/Carousel';

function HomeCarrosel() {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img src={"https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/home-slide-8.jpeg?raw=true"}
                        className="d-block w-100" alt="..." />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={"https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/home-slide-7.jpeg?raw=true"}
                        className="d-block w-100" alt="..." />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={"https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/home-slide-4.jpeg?raw=true"}
                        className="d-block w-100" alt="..." />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default HomeCarrosel;
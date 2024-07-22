import 'https://kit.fontawesome.com/41bcea2ae3.js'
import Logo from "./Logo.jsx"

const Footer = () => {
    return (
        <footer>
            <div className="container__footer">
                <div className="box__footer">
                    <div className="logo">
                        <Logo color={"var(--white)"} />
                    </div>
                    <div className="terms"> {/*<!-- descrição abaixo da logo -->*/}
                        <p>Digital College Store LTDA</p>
                        <p>CNPJ 43.082.596/0001-29</p>
                    </div>

                    {/* <!-- Icons abaixo da descrição --> */}
                    <div className="icons">
                        <a href="#"> <i className="fab fa-facebook-square"></i></a>
                        <a href="#"> <i className="fab fa-twitter-square"></i></a>
                        <a href="#"> <i className="fab fa-linkedin"></i></a>
                        <a href="#"> <i className="fab fa-instagram-square"></i></a>
                    </div>
                </div>

                {/* <!-- Serviços --> */}
                <div className="box__footer">
                    <div>
                        <h2>Serviços</h2>
                        <hr />
                        <div className="footer-itens">
                            <a href="#"><i className="fa-solid fa-boxes-stacked"></i>Produtos</a>
                            <a href="#"><i className="fa-solid fa-dolly"></i>Meus Pedidos</a>
                            <a href="#"><i className="fa-solid fa-user"></i>Minha Conta</a>
                            <a href="#"><i className="fa-solid fa-users"></i>Comunidade</a>
                        </div>
                    </div>
                </div>

                {/* <!-- Contatos --> */}
                <div className="box__footer">
                    <div>
                        <h2>Contatos</h2>
                        <hr />
                        <div className="footer-itens">
                            <a href="#"><i className="fa-solid fa-house"></i>Home</a>
                            <a href="#"><i className="fa-solid fa-circle-info"></i>Sobre nós</a>
                            <a href="#"><i className="fa-solid fa-id-badge"></i>Contactos</a>
                            <a href="#"><i className="fa-solid fa-briefcase"></i>Trabalhos</a>
                        </div>
                    </div>
                </div>

                {/* <!--  Dispositivos--> */}
                <div className="box__footer">
                    <div>
                        <h2>Dispositivos</h2>
                        <hr />
                        <div className="footer-itens">
                            <a href="#"><i className="fa-brands fa-android" ></i>Android</a>
                            <a href="#"><i className="fa-brands fa-windows"></i>Windows</a>
                            <a href="#"><i className="fa-brands fa-apple"></i>IOS e Macbook</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="box__copyright">
                <hr />
                <p><b>© 2024 Digital College </b></p>
            </div>
        </footer >
    )
}

export default Footer
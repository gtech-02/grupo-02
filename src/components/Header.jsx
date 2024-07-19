import menuIcon from '../assets/Layout/Menu-icon.svg'
import shopCart from '../assets/Layout/shopp-cart.svg'
import search from '../assets/Layout/Search.svg'
import Logo from './Logo.jsx'
import { Link } from 'react-router-dom'



export default function header() {
    return (
        <header>
            <div className="nav-top">
                <button className="menu-flutuante"><img src={menuIcon}/></button>
                <Logo color={"#C92071"} />
                <form className="search">
                    <input className="search-input" placeholder="Pesquisar Produto..." id="search" />
                    <button className="search-button" value="" ><img src={search}/></button>
                </form>
                <div className="login">
                    <a className="cadastro" href="#">Cadastra-se</a>
                    <a className="entrar" href="#">Entrar</a>
                </div>
                <div className="carrinho">
                <button className="search-button-float"><img src={search}/></button>
                    <img src={shopCart}/>
                        <div>2</div>
                </div>
            </div>
            <form action="/search" className="searchsx">
                <input className="search-input" name="query" placeholder="Pesquisar Produto..." type="search" id="search" />
                <input type="submit" className="search-button" value="" />
            </form>
            <div className="nav-float">
                <div className="nav-bottom">
                    <Link to="/" id="home-link" className="link-nav">Home</Link>
                    <Link to="/Produtos" id="Produtos-link" className="link-nav">Produtos</Link>
                    <Link to="/Categorias" id="Categorias-link" className="link-nav">Categorias</Link>
                    <Link to="/MeusPedidos" id="pedidos-link" className="link-nav">Meus Pedidos</Link>
                </div>
                <div className="login-float">
                    <a className="entrar-float" href="#">Entrar</a>
                    <a className="cadastro" href="#">Cadastra-se</a>
                </div>
            </div>
        </header>
    )
}
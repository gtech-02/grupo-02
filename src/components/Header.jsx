import menuIcon from '../assets/Menu-icon.svg'
import shopCart from '../assets/shopp-cart.svg'
import search from '../assets/Search.svg'
import Logo from './Logo.jsx'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="cabecalho">
            <div className="nav-top">
                <button className="menu-flutuante"><img src={menuIcon} /></button>
                <Logo color={"var(--primary)"} />
                <form className="search">
                    <input className="search-input" placeholder="Pesquisar Produto..." id="search" />
                    <button className="search-button" value="" ><img src={search} /></button>
                </form>
                <div className="login">
                    <a className="cadastro" href="#">Cadastra-se</a>
                    <a className="entrar" href="#">Entrar</a>
                </div>
                <div className="carrinho">
                    <button className="search-button-float"><img src={search} /></button>
                    <img src={shopCart} />
                    <div>2</div>
                </div>
            </div>
            <form action="/search" className="searchsx">
                <input className="search-input" name="query" placeholder="Pesquisar Produto..." type="search" id="search" />
                <input type="submit" className="search-button" value="" />
            </form>
            <div className="nav-float">
                <div className="nav-bottom">
                    <NavLink to="/" className="link-nav">Home</NavLink>
                    <NavLink to="/Produtos" className="link-nav">Produtos</NavLink>
                    <Link to="/" className="link-nav">Categorias</Link>
                    <Link to="/" className="link-nav">Meus Pedidos</Link>
                </div>
                <div className="login-float">
                    <a className="entrar-float" href="#">Entrar</a>
                    <a className="cadastro" href="#">Cadastra-se</a>
                </div>
            </div>
        </header>
    )
}

export default Header
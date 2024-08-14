import menuIcon from '../assets/Menu-icon.svg'
import shopCart from '../assets/shopp-cart.svg'
import search from '../assets/Search.svg'
import Logo from './Logo.jsx'
import NavBar from './NavBar.jsx'
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';


const Header = () => {

    const [query, setQuery] = useState('');

    const SearchClick = (e) => {
        e.preventDefault();
        console.log(query)
        window.location.href = `/produtos?filter=${query}`;
    };

    return (
        <header className="cabecalho">
            <div className="nav-top">
                <button className="menu-flutuante"><img src={menuIcon} /></button>
                <Logo color={"var(--primary)"} iconsize={"33px"} />
                <form className="search">
                    <input className="search-input" placeholder="Pesquisar Produto..." id="search" value={query} onChange={(e) => setQuery(e.target.value)} />
                    <button className="search-button" onClick={SearchClick}><img src={search} /></button>
                </form>
                <div className="login">
                    <NavLink className="cadastro" to="/Cadastro">Cadastra-se</NavLink>
                    <NavLink className="entrar" to="/Login">Entrar</NavLink>
                </div>
                <div className="carrinho">
                    <button className="search-button-float"><img src={search} /></button>
                    <img src={shopCart} />
                    <span>2</span>
                </div>
            </div>
            <NavBar />
        </header>
    )
}

export default Header
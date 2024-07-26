import { NavLink } from 'react-router-dom'
const NavBar = () => {

    return (
        <div className="nav-float">
            <div className="nav-bottom">
                <NavLink to="/" className="link-nav">Home</NavLink>
                <NavLink to="/Produtos" className="link-nav">Produtos</NavLink>
                <NavLink to="/Categorias" className="link-nav">Categorias</NavLink>
                <NavLink to="/Meus-pedidos" className="link-nav">Meus Pedidos</NavLink>
            </div>
            <div className="login-float">
                <NavLink className="entrar-float" to="/Login">Entrar</NavLink>
                <NavLink className="cadastro" to="/Cadastro">Cadastra-se</NavLink>
            </div>
        </div>
    )
}

export default NavBar
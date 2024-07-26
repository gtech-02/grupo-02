import { NavLink } from "react-router-dom"
import Footer from "../components/Footer"
import Logo from "../components/Logo"

const Login = () => {
    return (
        <>
            <header style={{ height: "80px", backgroundColor: "var(--white)", padding: "25px 100px", display: "flex", alignItems: "center" }}>
                <Logo color={"var(--primary)"} iconsize={"22.5px"} textsize={"23.99px"} width={"160px"} />
            </header>
            <main className="user-login">
                <form id="form-login">
                    <h1>Acesse sua conta</h1>
                    <span>Novo cliente? Então registre-se <NavLink to="/Cadastro">aqui.</NavLink></span>
                    <div>
                        <label>Login*</label>
                        <input></input>
                    </div>
                    <div>
                        <label>Senha*</label>
                        <input></input>
                    </div>
                    <a href="#">Esqueci minha senha</a>
                    <button>Acessar Conta</button>
                    <span>Ou faça login com <img src={''} /><img src={''} /></span>
                </form>
            </main>
            <Footer />
        </>
    )
}

export default Login
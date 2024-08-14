import { NavLink } from "react-router-dom"
import Footer from "../components/Footer"
import Logo from "../components/Logo"

const Cadastro = () => {
    return (
        <>
            <header style={{ height: "80px", backgroundColor: "var(--white)", padding: "25px 100px", display: "flex", alignItems: "center" }}>
                <Logo color={"var(--primary)"} iconsize={"22.5px"} textsize={"23.99px"} width={"160px"} />
            </header>
            <main className="user-login">
                <form id="form-login">
                    <h1>Crie sua conta</h1>
                    <span>Já possui uma conta? Entre <NavLink to="/Login">aqui.</NavLink></span>
                    <div>
                        <label>Email*</label>
                        <input></input>
                    </div>
                    <button>Criar Conta</button>
                    <span>Ou faça o Cadastro com <img src={''} /><img src={''} /></span>
                </form>
            </main>
            <Footer />
        </>
    )
}

export default Cadastro
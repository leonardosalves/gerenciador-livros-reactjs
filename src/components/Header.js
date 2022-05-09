import React from "react"
import { NavLink } from "react-router-dom"

const Header = () =>{
    return(
        <header>
            <h1>Gerenciador de livros</h1>
            <div className="links">
                <NavLink to="/" className="link" activeClassName="active" exact>
                    Lista de livros
                </NavLink>
                <NavLink to="/add" className="link" activeClassName="active">
                    Adicionar novo livro
                </NavLink>
            </div>
        </header>
    )
}

export default Header
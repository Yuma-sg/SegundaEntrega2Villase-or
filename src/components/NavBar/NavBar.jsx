import CartWidget from "./CartWidget"
import { GiDeathJuice } from "react-icons/gi"
import { NavLink, Link, useNavigate } from "react-router-dom"

import "./navbar.scss"

const NavBar = () => {

    const navigate = useNavigate()

    return (
        <nav className="navbar">

            <button onClick={ () => navigate(-1) } >Ir para atrás</button>

            <ul className="categories">
                <NavLink to="/category/jugos" className={ ( { isActive } ) => isActive ? "category-active" : "category" } >Jugos</NavLink>
                <NavLink to="/category/merch" className={ ( { isActive } ) => isActive ? "category-active" : "category" } >Merch</NavLink>
                <NavLink to="/category/comida" className={ ( { isActive } ) => isActive ? "category-active" : "category" } >Comida</NavLink>
            </ul>

            <Link to="/" className="brand primary-font-color">
                <GiDeathJuice className="icon-brand" />
                <p className="title-brand">Mr. Jugo</p>
            </Link>

            <CartWidget />
        </nav>
    )
}
export default NavBar
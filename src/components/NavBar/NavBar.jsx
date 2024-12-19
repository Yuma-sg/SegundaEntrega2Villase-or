import CartWidget from "./CartWidget"
import { RiDrinks2Line } from "react-icons/ri";
import { NavLink } from "react-router-dom"
import { NavLink, Link, useNavigate } from "react-router-dom"


import "./navbar.scss"

const NavBar = () => {

    const navigate = useNavigate()

    return (
        <nav className="navbar bg-success border-bottom border-body sticky-top">

            <div className="logo">
                <img src="" alt="" />
                <p>Mr. Jugo</p>

            </div>

            <button onClick={ () => navigate(-1) }>Ir para atrás</button>

            <ul className="categorias">
                <NavLink to="/category/Jugos" className={ ( { isActive }) => isActive ? "category-active" : "category" } >Jugos</NavLink>
                <NavLink to="/category/Comida" className={ ( { isActive }) => isActive ? "category-active" : "category" } >Comida</NavLink>
                <NavLink to="/category/Merch" className={ ( { isActive }) => isActive ? "category-active" : "category" } >Merch</NavLink>
            </ul>

            <Link to="/" className="brand primary-font-color">
                <RiDrinks2Line className="icon-brand" />
                <p className="title-brand">Mr. Jugo</p>
            </Link>

            <CartWidget />
        </nav>
    )
}
export default NavBar
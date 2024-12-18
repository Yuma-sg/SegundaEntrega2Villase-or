import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"
import { RiDrinks2Line } from "react-icons/ri";



import "./navbar.scss"

const NavBar = () => {

    const categorias = ["Jugos", "Helados", "Comida", "Nosotros"]
    return (
        
        <nav className="navbar bg-success border-bottom border-body sticky-top">

            <div className="logo">
                <img src="" alt="" />
                <p>Mr. Jugo</p>

            </div>

            <ul className="categorias">
                {
                    categorias.map( (categoria) => {
                        return <NavLink>{categoria}</NavLink>
                    })
                }
            </ul>

            <RiDrinks2Line />


            <CartWidget />
        </nav>
    )
}
export default NavBar
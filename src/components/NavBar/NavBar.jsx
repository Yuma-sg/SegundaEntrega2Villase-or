import CartWidget from "./CartWidget"
import "./navbar.scss"

const NavBar = () => {

    const categorias = ["Jugos", "Helados", "Comida", "Nosotros"]
    return (
        
        <nav className="navbar bg-success border-bottom border-body sticky-top">

            <div className="logo">
                <img src="" alt="" />
                <p>Mr. Jugo</p>

            </div>

            <ul class="categorias">
                {
                    categorias.map( (categoria) => {
                        return <li>{categoria}</li>
                    })
                }
            </ul>

            <CartWidget />
        </nav>
    )
}
export default NavBar
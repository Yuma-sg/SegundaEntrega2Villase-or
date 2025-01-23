import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import "./cart.css"

const Cart = () => {
    const { cart, totalPrice, deleteProductById, deleteCart } = useContext(CartContext)

    if(cart.length === 0){
      return(
        <div>
          <h2>Oops...el carrito está vacío </h2>
          <Link to="/">Volver al inicio</Link>
        </div>
      )
    }

  return (
    <div>
        <ul>
        {
            cart.map((productCart)=> (
            <li key={productCart.id} style={{ display: "flex", justifyContent: "space-around", margin: "20px 0" }} >
                <img src={productCart.image} with={100} />
                <p>{productCart.name}</p>
                <p>cantidad: {productCart.quantity}</p>
                <p>precio c/u: {productCart.price}</p>
                <p>precio parcial: ${productCart.price * productCart.quantity} </p>
                <button onClick={ ()=> deleteProductById(deleteProductById) }>eliminar</button>
            </li>
            ))
        }
        </ul>

        <h3>Precio total: {totalPrice()}</h3>
        <button onClick={deleteCart}>Vaciar carrito</button>
    </div>
  )
}

export default Cart
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { PiShoppingCartFill } from "react-icons/pi";

const CartWidget = () => {
  const { saludo, saludando } = useContext(CartContext)

  return (
    <div className="cartwidget" onClick={saludando}>
        <PiShoppingCartFill className="icon-cartwidget" />
        <p className="number-cartWidget">8</p>
    </div>
  )
}
export default CartWidget
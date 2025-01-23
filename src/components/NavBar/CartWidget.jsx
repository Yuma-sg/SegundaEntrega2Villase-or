import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { PiShoppingCartFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)

  return (
    <Link to="/cart" className="cartwidget" onClick={saludando}>
        <PiShoppingCartFill className="icon-cartwidget" />
        <p className="number-cartWidget"> { totalQuantity() } </p>
    </Link>
  )
}
export default CartWidget
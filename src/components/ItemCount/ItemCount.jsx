import { useState } from "react";

const ItemCount = ({ stock, AddProductInCart }) => {
    const [count, setCount] = useState(1)

    const handleClickRemove = () => {
        if( count > 1 ){
            setCount( count - 1 )
        }
    }
    
    const handleCLickAdd = () => {
        if( count < stock ){
            setCount( count + 1 )
        } 
    }
    return (
        <div>
            <button  onClick={handleClickRemove} >-</button>
            <p>{count}</p>
            <button onCLick={handleCLickAdd} >+</button>
            <button onCLick={ () => AddProductInCart(count) }>Agregar al carrito</button>
        </div>
    )
}
export default ItemCount
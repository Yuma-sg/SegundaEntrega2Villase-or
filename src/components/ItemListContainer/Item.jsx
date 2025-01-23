import React from "react"
import { Link } from "react-router-dom"

const Item = React.memo( ({ product }) => {

    console.log("re-render de: ", product.name)

    return (
        <div to={"/detail/"+product.id} className="item">
            <img src={product.image[0] } className="img-item" alt="" width={100} />
            <p className="text-item">{product.name}</p>
            <p className="text-item">${product.price}</p>
            <Link to={"/detail/" + product.id } className="button-detail" >Ver detalles </Link>
        </div>
    )
}, (prevProps, nextProps) => JSON.stringify(prevProps) === JSON.stringify(nextProps) )
export default Item
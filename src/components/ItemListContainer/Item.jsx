import { Link } from "react-router-dom"

const Item = ({ product }) => {
    return (
        <Link to={"/detail/"+product.id} className="item">
            <img src={product.image[0] } className="img-item" alt="" width={100} />
            <p className="text-item">{product.name}</p>
            <p className="text-item">${product.price}</p>
        </Link>
    )
}
export default Item
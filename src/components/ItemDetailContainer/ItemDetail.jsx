import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import "./itemdetail.css"


const ItemDetail = ({ product }) => {
    const { addProduct } = useContext(CartContext)

    const AddProductInCart = (count) => {
        //producto que va al carrito
        const ProductCart = { ...product, quantity: count }

        addProduct(productCart)

        console.log(productCart)
    }
    const [currentImage, setCurrentImage] = useState(product.image[0])

    const images = product.image.filter ( (image) => image !== currentImage)


    return (
        <div className="item-detail">
            <div className="images-detail-container">
                <div className="secondar-images">
                    {
                        product.image.map((image)=>(
                            <img src={image} key={image} onClick={ () => setCurrentImage(image) } />
                        ))
                    }
                </div>
                <div className="main.image">
                    <img src={product.image[0]} alt="" />
                </div>
            </div>

            <div className="text-detail-container">
                <h2 className="title-detail">{product.name}</h2>
                <p className="text-detail">{product.description}</p>
                <p className="text-detail">Precio: ${product.price}</p>

                <ItemCount stock={product.stock} AddProductInCart={AddProductInCart} />
            </div>
        </div>
    )
}
export default ItemDetail
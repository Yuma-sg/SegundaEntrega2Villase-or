import { createContext } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {

    const saludo = "Bienvenid@ a Mr. Jugo"

    const saludando = () => {
        alert("Te saludo humano adicto al jugo")
    }

    return(
        <CartContext.Provider value={ { saludo, saludando } }>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }
import { createContext, useState, useContext } from "react"
const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext  )
}
 export default function CartProvider ({children}) {
     const [itemsInCart, setItemsInCart] = useState([])
 }



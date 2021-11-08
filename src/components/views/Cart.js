import React from 'react'
import { useCart } from '../contexts/Cart';
import {Link} from 'react-router-dom'

const Cart = () => {
    const {itemsInCart} =useCart();
    if(itemsInCart?.length >0)
        return (
            <div>
                {itemsInCart.map(itemsInCart => <div key = {itemInCart._id}>{itemInCart.name}</div>)}
            </div>
        )
    const subTotal = (itemID) =>{
        const item = itemsInCart.filter(itemInCart => itemInCart._id ===itemID)
        return Number (item.qty) * Number(item.price)
    }
    return (
        <div>
            
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Unit Cost</th>
                        <th>Sub Total</th>
                    </tr>
                </thead>
                <tbody>
                    {itemsInCart.map(itemInCart => 
                    <div key= {itemsInCart._id}>{itemInCart.name}</div>)}
                </tbody>
            </table>
        </div>
    )
}

export default Cart

import React from 'react'

const Cart = () => {
    const {itemsInCart} =useCart();
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
                    {itemsInCart.map(itemInCart)}
                </tbody>
            </table>
        </div>
    )
}

export default Cart

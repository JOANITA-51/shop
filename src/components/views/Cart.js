import React from 'react'
import { useCart } from '../contexts/Cart';
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';

const Cart = () => {
    let formatter = new Intl.NumberFormat('en-US',{
        style: 'currency',
        currency:'UGX',
    });
    const {itemsInCart, setItemsInCart, total, setTotal} =useCart();
    useEffect(()=>{
        setTotal(itemsInCart.reduce((currentItem, previousItem)=>currentItem.subTotal + previousItem.subTotal,0))
    }, [])
    if(itemsInCart?.length >0)
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                            <th>Sub Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemsInCart.map((itemInCart,index)=>
                            <tr className= "cart-item" key = {itemInCart._id}>
                                <td>{itemInCart.name}</td>
                                <td>
                                    <input type = "number" min = "1" defaultValue={itemInCart.qty} placeholder = {itemInCart.qty}
                                        onChange = {(event)=>{
                                            const item = itemsInCart[index]
                                            item.qty = Number(event.target.value)
                                            item['subTotal'] = Number(item.qty) * Number(item.price)
                                            itemsInCart[index] = item
                                            setItemsInCart([...itemsInCart])
                                            const subTotals = itemsInCart.map(itemsInCart => itemInCart.subTotal)
                                            const reducer = (currentValue, previousValue) => {
                                                return currentValue + previousValue
                                            }
                                            setTotal(subTotals.reduce(reducer))
                                        }
                                    }
                                    
                                    />
                                </td>
                                <td>{formatter.format (itemInCart.price)}</td>
                                <td>{formatter.format (itemInCart.subTotal||itemInCart.price)}</td>
                            </tr>
                        
                        )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total {formatter.format(total)}</th>
                        </tr>
                    </tfoot>
                </table>
 
            </div>
        )
    return (
        <div>
            <h1>Your Basket is empty</h1>
            <p><Link to ="/">Shop Now</Link></p>   
        </div>
    )
}

export default Cart

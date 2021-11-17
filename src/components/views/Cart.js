import React from 'react'
import { useCart } from '../contexts/Cart';
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';
import Checkout from '../views/Checkout';


const Cart = () => {
    const {itemsInCart, setItemsInCart, total, setTotal} = useCart(); 
const returnTotal = (items)=>{
    let sum =0 ;
    items.forEach(item => {
        sum += item.subTotal
    });
    return sum
   }
  
    let formatter = new Intl.NumberFormat('en-US',{
        style: 'currency',
        currency:'UGX',
    });
    const removeItemsInCart = (itemId)=>{
        let newCart = itemsInCart.filter((item)=>item._id !==itemId )
        return newCart;
    }


    useEffect(()=>{
        setTotal(returnTotal(itemsInCart))
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
                                <td>{itemInCart.name} <br/>
                                <button onClick ={() =>{
                                    let newItemsInCart = removeItemsInCart(itemInCart._id)
                                    setItemsInCart([... newItemsInCart])
                                    setTotal(returnTotal(newItemsInCart))
                                }}> Remove from Cart

                                </button>
                                </td> 
                                <td>
                                    <input type = "number" min = "1" defaultValue={itemInCart.qty} placeholder = {itemInCart.qty}
                                        onChange = {(event)=>{
                                            //const item = itemsInCart[index]
                                            // item.qty = Number(event.target.value)
                                            // item['subTotal'] = Number(item.qty) * Number(item.price)
                                            // itemsInCart[index] = item
                                            let {value : quantity } = event.target
                                            itemInCart.qty = quantity > 0 ? quantity:1
                                            itemInCart.subTotal = itemInCart.qty * itemInCart.price
                                            setItemsInCart([...itemsInCart])
                                            // const subTotals = itemsInCart.map(itemsInCart => itemInCart.subTotal)
                                            // const reducer = (currentValue, previousValue) => {
                                            //     return currentValue + previousValue
                                            // }
                                            setTotal(returnTotal(itemsInCart))
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
                            <td>checkout</td>
                            <li>
                        <Link to = "/checkout">Checkout</Link>
                        </li>
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

import React from 'react'
import { Redirect } from 'react-router-dom'
import {useAuth} from '../contexts/Auth'

const Home = ({onClick}) => {
    const currentUser = useAuth()
    const invetoryItems =[
        {
            id:12,
            name: "Phone",
            category: "Samsung",
            price: 50000
        },
        {
            id:13,
            name: "Blue shirt",
            category: "All",
            price: 35000
        },
        {
            id:14,
            name: "Black Shoes",
            category: "Men",
            price: 5000  
        },
        {
            id:15,
            name: "red dress",
            category: "Women",
            price: 15000  
        }
    ]

    // const addItemToCart = ItemID =>{
    //     setItemsInCart([...itemsIncart, inventoryItems[ItemNumber]])
    // }
    if (currentUser)
        return (<Redirect to = {{pathname:"/dashboard"}}/>)
  
    return (
        <div>
            <div className = "header">
               <h1>
                   <link to ></link>ONLINE SHOPPING </h1>
               <div>
                   <button>
                       {/* {itemsIncart.length} */}
                       Basket</button>
               </div>
            </div>
           

            <ul className = "item-list">
                {
                    invetoryItems.map((invetoryItem, index) =>{
                        return(
                            <li key = {index.toString()} className= "item">
                                
                                <div>
                                {invetoryItem.name}
                                </div >
                                 
                                <div>
                                {invetoryItem.category}
                                </div>
                                 
                                <div>
                                {invetoryItem.price}
                                </div>

                                <div>
                                    <button><span>Wishlist</span></button>
                                    <button><span>Rate</span></button>
                                    <button onClick><span>Cart</span></button>
                                    <button><span>Buy Now</span></button>
                                </div>


                            </li>
                        )
                    })
                }
            </ul> <br/>
            {/* <button className='btn' style = {{backgroundColor:'green'}} onClick={onClick}>
                Add <br/>
                +
            </button>
            <button className='btn' style = {{backgroundColor:'red'}} onClick={onClick}>
                Remove<br/>
                -
            </button> */}

        </div>

    )
}

export default Home
